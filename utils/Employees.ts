// import axios from "axios";

// export async function getAllEmployeesData() {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getEmployeeData(id: string | string[] | undefined) {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getNewsData() {
//   try {
//     const response = await axios.get(
//       "https://newscatcher.p.rapidapi.com/v1/search_enterprise",
//       {
//         params: {
//           q: "hack",
//           lang: "id",
//           sort_by: "date",
//           page: "1",
//           page_size: "6",
//           media: "True",
//         },
//         headers: {
//           "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
//           "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase: SupabaseClient = createClient(
  "https://gxwsfvtvgbntyzsewsyy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4d3NmdnR2Z2JudHl6c2V3c3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTQ0NTMsImV4cCI6MjAyMjA5MDQ1M30.vsWkGcLTuPchdd82-Q3a3tX0w42n3IhdUIGf7E3aXVQ"
);

// Function to fetch all employees data
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

// Function to fetch data for a specific employee
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
