import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function GET() {
    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey)
        const { data: pools, error } = await supabase
            .from('pools')
            .select('*')
            .order('pool_type', { ascending: false }) // MASTER first

        if (error) throw error

        return NextResponse.json(pools)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
