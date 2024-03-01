import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gxwsfvtvgbntyzsewsyy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4d3NmdnR2Z2JudHl6c2V3c3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTQ0NTMsImV4cCI6MjAyMjA5MDQ1M30.vsWkGcLTuPchdd82-Q3a3tX0w42n3IhdUIGf7E3aXVQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
