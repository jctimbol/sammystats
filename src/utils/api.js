//get data from supabase

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const client = createClient(supabaseUrl, supabaseKey);

export async function fetchAdmissions() {
     const { data, error } = await client
    .from('admission_data')
    .select('*');

    if (error) {
        console.error('Error fetching admissions:', error);
        return [];
    }
    
    return data;
}