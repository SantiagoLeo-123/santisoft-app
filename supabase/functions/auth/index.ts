import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

if (req.method === "OPTIONS") {
  return new Response(null, { status: 200, headers: corsHeaders });
}

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Simple password hash using Web Crypto API (SHA-256 with salt)
async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(salt + password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return salt + ":" + hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function generateSalt(): string {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const computed = await hashPassword(password, salt);
  return computed === storedHash;
}

try {
  const body = await req.json();
  const { action } = body;

  // --- CHECK EMAIL ---
  if (action === "check-email") {
    const { email } = body;
    if (!email) {
      return new Response(JSON.stringify({ error: "Email obrigatório" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const normalizedEmail = email.trim().toLowerCase();
    const { data, error } = await supabase
      .from("whitelist")
      .select("email, is_admin, has_password")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (error) {
      return new Response(JSON.stringify({ error: "Erro ao verificar email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!data) {
      return new Response(JSON.stringify({ allowed: false }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      allowed: true,
      isAdmin: data.is_admin,
      hasPassword: data.has_password,
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // --- SET PASSWORD (first access) ---
  if (action === "set-password") {
    const { email, password } = body;
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email e senha são obrigatórios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (password.length < 4) {
      return new Response(JSON.stringify({ error: "A senha deve ter no mínimo 4 caracteres" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const { data: existing } = await supabase
      .from("whitelist")
      .select("email, has_password")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (!existing) {
      return new Response(JSON.stringify({ error: "Email não autorizado" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (existing.has_password) {
      return new Response(JSON.stringify({ error: "Senha já cadastrada. Faça login." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const salt = generateSalt();
    const hashed = await hashPassword(password, salt);

    const { error: updateError } = await supabase
      .from("whitelist")
      .update({ password_hash: hashed, has_password: true })
      .eq("email", normalizedEmail);

    if (updateError) {
      return new Response(JSON.stringify({ error: "Erro ao salvar senha" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // --- LOGIN ---
  if (action === "login") {
    const { email, password } = body;
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email e senha são obrigatórios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const { data, error } = await supabase
      .from("whitelist")
      .select("email, is_admin, has_password, password_hash")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Email não autorizado" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!data.has_password || !data.password_hash) {
      return new Response(JSON.stringify({ error: "Senha ainda não cadastrada" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const valid = await verifyPassword(password, data.password_hash);
    if (!valid) {
      return new Response(JSON.stringify({ error: "Senha incorreta" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      email: data.email,
      isAdmin: data.is_admin,
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // --- ADMIN: ADD TO WHITELIST ---
  if (action === "admin-add") {
    const { adminEmail, newEmail } = body;
    if (!adminEmail || !newEmail) {
      return new Response(JSON.stringify({ error: "Dados incompletos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedAdmin = adminEmail.trim().toLowerCase();
    const normalizedNew = newEmail.trim().toLowerCase();

    // Verify admin
    const { data: admin } = await supabase
      .from("whitelist")
      .select("email, is_admin")
      .eq("email", normalizedAdmin)
      .maybeSingle();

    if (!admin || !admin.is_admin) {
      return new Response(JSON.stringify({ error: "Acesso negado" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check if already exists
    const { data: existing } = await supabase
      .from("whitelist")
      .select("email")
      .eq("email", normalizedNew)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ error: "Email já está na whitelist" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { error: insertError } = await supabase
      .from("whitelist")
      .insert({
        email: normalizedNew,
        is_admin: false,
        has_password: false,
        created_by: normalizedAdmin,
      });

    if (insertError) {
      return new Response(JSON.stringify({ error: "Erro ao adicionar email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // --- ADMIN: REMOVE FROM WHITELIST ---
  if (action === "admin-remove") {
    const { adminEmail, removeEmail } = body;
    if (!adminEmail || !removeEmail) {
      return new Response(JSON.stringify({ error: "Dados incompletos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedAdmin = adminEmail.trim().toLowerCase();
    const normalizedRemove = removeEmail.trim().toLowerCase();

    // Verify admin
    const { data: admin } = await supabase
      .from("whitelist")
      .select("email, is_admin")
      .eq("email", normalizedAdmin)
      .maybeSingle();

    if (!admin || !admin.is_admin) {
      return new Response(JSON.stringify({ error: "Acesso negado" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Prevent removing self
    if (normalizedAdmin === normalizedRemove) {
      return new Response(JSON.stringify({ error: "Você não pode remover a si mesmo" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { error: deleteError } = await supabase
      .from("whitelist")
      .delete()
      .eq("email", normalizedRemove);

    if (deleteError) {
      return new Response(JSON.stringify({ error: "Erro ao remover email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // --- ADMIN: LIST WHITELIST ---
  if (action === "admin-list") {
    const { adminEmail } = body;
    if (!adminEmail) {
      return new Response(JSON.stringify({ error: "Email do admin obrigatório" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedAdmin = adminEmail.trim().toLowerCase();

    const { data: admin } = await supabase
      .from("whitelist")
      .select("email, is_admin")
      .eq("email", normalizedAdmin)
      .maybeSingle();

    if (!admin || !admin.is_admin) {
      return new Response(JSON.stringify({ error: "Acesso negado" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: list, error } = await supabase
      .from("whitelist")
      .select("email, is_admin, has_password, created_at, created_by")
      .order("created_at", { ascending: true });

    if (error) {
      return new Response(JSON.stringify({ error: "Erro ao buscar lista" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, list }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ error: "Ação inválida" }), {
    status: 400,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
} catch (err) {
  return new Response(
    JSON.stringify({ error: err.message || "Erro interno do servidor" }),
    { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
}
