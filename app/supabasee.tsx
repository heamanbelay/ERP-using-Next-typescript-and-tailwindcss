import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://uhmyfqrppgvdqgpndiew.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVobXlmcXJwcGd2ZHFncG5kaWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NDgyODUsImV4cCI6MjAxODAyNDI4NX0.O9mbToq4Fp3SyUZnSX-jnYaw1NDDn5Qq7i3qQSzDrbs";
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
