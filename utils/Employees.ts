import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient(
  "https://gxwsfvtvgbntyzsewsyy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4d3NmdnR2Z2JudHl6c2V3c3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTQ0NTMsImV4cCI6MjAyMjA5MDQ1M30.vsWkGcLTuPchdd82-Q3a3tX0w42n3IhdUIGf7E3aXVQ"
);

export async function getAllEmployeesData(): Promise<any[] | null> {
  try {
    const { data, error } = await supabase.from("hotels").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (error: any) {
    console.error("Error fetching employees:", error?.message);
    return null;
  }
}

export async function getEmployeeData(id: string): Promise<any | null> {
  try {
    const { data, error } = await supabase
      .from("hotels")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  } catch (error: any) {
    console.error(`Error fetching employee with id ${id}:`, error.message);
    return null;
  }
}
