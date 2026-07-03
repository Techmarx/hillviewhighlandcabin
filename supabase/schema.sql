create extension if not exists pgcrypto;

create table if not exists public.booking_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  name text not null,
  email text not null,
  arrival_date date not null,
  departure_date date not null,
  guests integer not null check (guests between 1 and 8),
  message text
);

alter table public.booking_inquiries enable row level security;

drop policy if exists "No direct client reads" on public.booking_inquiries;
create policy "No direct client reads"
on public.booking_inquiries
for select
to anon, authenticated
using (false);

drop policy if exists "No direct client inserts" on public.booking_inquiries;
create policy "No direct client inserts"
on public.booking_inquiries
for insert
to anon, authenticated
with check (false);
