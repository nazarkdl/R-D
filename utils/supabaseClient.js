import { createClient } from '@supabase/supabase-js';

// Use environment variables for the Supabase URL and Key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL_DEV; // Or _PROD depending on the environment
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY_DEV; // Or _PROD depending on the environment

// Initialize Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
