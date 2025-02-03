import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your-supabase-url';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || 'your-supabase-key';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
</label>
