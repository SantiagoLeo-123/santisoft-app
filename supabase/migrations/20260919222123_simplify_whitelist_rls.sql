/*
# Simplify whitelist RLS for edge function approach

## Purpose
All write operations (insert, update, delete) on the whitelist table will go through a Supabase Edge Function using the service role key, which bypasses RLS. This migration drops the complex RLS write policies and keeps only the SELECT policy that allows the login screen to check if an email is whitelisted.

## Changes
- Drop INSERT, UPDATE, DELETE policies from whitelist table
- Keep SELECT policy (anon + authenticated can read all rows — needed for login validation)
- The edge function handles all writes with the service role key

## Security
- Reads are open (needed to check whitelist status and fetch password hash for comparison)
- All writes go through the edge function which validates admin credentials before acting
*/

DROP POLICY IF EXISTS "admin_insert_whitelist" ON whitelist;
DROP POLICY IF EXISTS "update_own_whitelist" ON whitelist;
DROP POLICY IF EXISTS "admin_delete_whitelist" ON whitelist;
