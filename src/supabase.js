import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dsawgsrsdlhpnngzsobv.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzYXdnc3JzZGxocG5uZ3pzb2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwMDQwMjMsImV4cCI6MTk4NzU4MDAyM30.vvolYI1KPf6aaLxP4tB1jXYkrnSk7qD8WZVkfbQhqZ8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
