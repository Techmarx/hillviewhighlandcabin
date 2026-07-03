# Deployment Checklist

## Before GitHub

- Confirm the homepage copy looks right locally at `http://localhost:3001` or your current dev URL
- Confirm `.env.local` is present locally and not tracked by git
- Rotate the Supabase service role key if needed

## Before Vercel

- Create a new Vercel account or sign in
- Import the GitHub repository
- Add these environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

## After first deploy

- Open the deployed site
- Submit a booking enquiry
- Confirm the row appears in Supabase `booking_inquiries`
- Check the mobile layout
- Add your custom domain when ready

## Recommended next improvements

- Add a proper photo gallery
- Add a Braemar and Cairngorms local guide
- Add availability and seasonal pricing
- Add analytics and conversion tracking
