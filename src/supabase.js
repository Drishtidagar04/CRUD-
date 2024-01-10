// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://csopwmkjsvckllaisizc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzb3B3bWtqc3Zja2xsYWlzaXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc0NzYsImV4cCI6MjAyMDQ2MzQ3Nn0.jR6eswYl6Vc1WtOvUodWWIwtgHmaZcdcb1uw88ngDtM';

export const supabase = createClient(supabaseUrl, supabaseKey);
