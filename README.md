# Hillview Highland Cabin

Hillview is a Vercel-ready Next.js website for a Braemar holiday cabin, with Supabase-backed booking enquiries.

## Stack

- Next.js App Router
- React 19
- Supabase for data storage
- Vercel for hosting and deployment

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template:

   ```bash
   cp .env.example .env.local
   ```

3. Add your Supabase project values to `.env.local`:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. In the Supabase SQL editor, run the SQL in `supabase/schema.sql`.

5. Start the app:

   ```bash
   npm run dev
   ```

6. Open the local site and submit a test enquiry.

## Environment variables

Use the same values in both local development and Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Security note:

- `SUPABASE_SERVICE_ROLE_KEY` must only be used server-side.
- It should live in `.env.local` and Vercel project environment variables only.
- Because a live service role key was shared during setup, rotate it in Supabase before launch and update both local and Vercel values.

## Deployment

### GitHub

1. Create a new GitHub repository.
2. Add the remote:

   ```bash
   git remote add origin <your-github-repo-url>
   ```

3. Commit and push the project.

### Vercel

1. Create a new project in Vercel.
2. Import the GitHub repository.
3. In Vercel project settings, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Run the first deploy.
5. After deploy, open the live site and send a real test enquiry.

### Supabase

Before going live, confirm:

1. `booking_inquiries` exists in Supabase.
2. A test enquiry appears in the table.
3. The rotated service role key is updated everywhere it is used.

## What is included

- A landing page tailored to the live Hillview Airbnb listing
- A contact and booking enquiry form
- A server-side API route that saves enquiries to Supabase
- Supabase helper utilities for browser and server contexts
