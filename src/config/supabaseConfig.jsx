import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://qxcpqnkhmkujrodoagff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Y3BxbmtobWt1anJvZG9hZ2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNjc3MzYsImV4cCI6MjAwMTc0MzczNn0.dJi1yNIosATsj9Ew5APzka7gaBzXpKbe3gRjQQeIxYs");

export default supabase