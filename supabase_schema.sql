-- Create Agents Table
create table public.agents (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  bio text,
  strategy text not null,
  wallet_address text unique not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Users Table (keyed by wallet address generally in web3 apps)
create table public.users (
  wallet_address text primary key,
  username text,
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Vaults Table
create table public.vaults (
  id uuid default gen_random_uuid() primary key,
  agent_id uuid references public.agents(id) on delete cascade not null,
  chain_id integer not null,
  address text unique not null,
  asset_address text not null,
  asset_symbol text,
  total_assets numeric default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.agents enable row level security;
alter table public.users enable row level security;
alter table public.vaults enable row level security;

-- Create Policies (Open for now as starting point, but ideally restricted)
create policy "Public agents are viewable by everyone." on public.agents for select using (true);
create policy "Reviewable vaults" on public.vaults for select using (true);
create policy "Users can check their own data" on public.users for select using (auth.uid()::text = wallet_address); 
-- Note: auth.uid() usually returns UUID for Supabase Auth, but if using wallet as ID, adjust accordingly.
