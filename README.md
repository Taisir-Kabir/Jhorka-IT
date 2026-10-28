# JHORKA IT

## Local development

1. Install Node.js 20 or newer.
2. Run `npm ci`.
3. Copy `.env.example` to `.env.local` and set the existing Supabase project URL and **publishable** key. Never add a service-role or secret key to a frontend environment file.
4. Run `npm run dev`. The site uses hash-based routes, for example `/#/courses`.
5. Run `npm run build` to create the production site in `dist/`.

The app intentionally does not include Supabase credentials. Without the two environment values, forms report that Supabase is not configured rather than simulating a successful submission.

## GitHub Pages

The GitHub Actions workflow builds and publishes `dist/` on pushes to `main`. In the repository's **Settings → Pages**, choose **GitHub Actions** as the deployment source. Add repository Actions secrets named `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` to enable the existing Supabase-backed forms in the published site.
