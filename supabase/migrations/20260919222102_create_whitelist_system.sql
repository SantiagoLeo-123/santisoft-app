/*
# Whitelist Authentication System for SantiSOFT

## Purpose
Creates a whitelist-based access control system where an administrator email controls who can access the app. Users on the whitelist can set their own password on first access and log in subsequently.

## New Tables

### `whitelist`
- `id` (uuid, primary key) — unique row identifier
- `email` (text, unique, not null) — the authorized email address
- `is_admin` (boolean, default false) — marks the admin who can manage the whitelist
- `password_hash` (text, nullable) — bcrypt-style hash of the user's password (null until first access)
- `has_password` (boolean, default false) — quick check whether the user has set a password yet
- `created_at` (timestamptz, default now()) — when the email was added
- `created_by` (text, nullable) — email of the admin who added this entry

## Security

- RLS enabled on `whitelist`.
- SELECT: anyone (anon + authenticated) can check if an email is whitelisted — needed for the login screen validation.
- INSERT: only the admin email can add new whitelist entries. Enforced via a check against the `is_admin` flag on the admin's own row.
- DELETE: only the admin email can remove entries.
- UPDATE: any whitelisted user can update their own row (to set their password). The admin can also update any row.

## Seeded Data
- Admin email: leodoscsgo2018@hotmail.com (is_admin = true, no password initially)

## Important Notes
1. The admin must set their own password on first login.
2. Passwords are hashed using the Supabase Edge Function before storage.
3. The whitelist table is intentionally readable by anon so the login screen can validate whether an email is allowed before attempting authentication.
*/

CREATE TABLE IF NOT EXISTS whitelist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_admin boolean NOT NULL DEFAULT false,
  password_hash text,
  has_password boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by text
);

ALTER TABLE whitelist ENABLE ROW LEVEL SECURITY;

-- SELECT: anyone can check if an email is on the whitelist (needed for login validation)
DROP POLICY IF EXISTS "anon_select_whitelist" ON whitelist;
CREATE POLICY "anon_select_whitelist" ON whitelist FOR SELECT
  TO anon, authenticated USING (true);

-- INSERT: only the admin can add new emails
-- The admin's email must exist in the whitelist with is_admin = true
DROP POLICY IF EXISTS "admin_insert_whitelist" ON whitelist;
CREATE POLICY "admin_insert_whitelist" ON whitelist FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM whitelist w
      WHERE w.is_admin = true
      AND w.email = current_setting('request.header.x-admin-email', true)
    )
  );

-- UPDATE: a user can update their own row (to set password), admin can update any row
DROP POLICY IF EXISTS "update_own_whitelist" ON whitelist;
CREATE POLICY "update_own_whitelist" ON whitelist FOR UPDATE
  TO anon, authenticated
  USING (
    email = current_setting('request.header.x-user-email', true)
    OR EXISTS (
      SELECT 1 FROM whitelist w
      WHERE w.is_admin = true
      AND w.email = current_setting('request.header.x-admin-email', true)
    )
  )
  WITH CHECK (
    email = current_setting('request.header.x-user-email', true)
    OR EXISTS (
      SELECT 1 FROM whitelist w
      WHERE w.is_admin = true
      AND w.email = current_setting('request.header.x-admin-email', true)
    )
  );

-- DELETE: only the admin can remove entries
DROP POLICY IF EXISTS "admin_delete_whitelist" ON whitelist;
CREATE POLICY "admin_delete_whitelist" ON whitelist FOR DELETE
  TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1 FROM whitelist w
      WHERE w.is_admin = true
      AND w.email = current_setting('request.header.x-admin-email', true)
    )
  );

-- Seed the admin email
INSERT INTO whitelist (email, is_admin, has_password)
VALUES ('leodoscsgo2018@hotmail.com', true, false)
ON CONFLICT (email) DO NOTHING;
