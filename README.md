# www.juliagart.com 📸

## ✨ Features

- 📱 Responsive design for all devices
- 🖼️ Automatic EXIF data extraction from photos
- 🔐 Secure authentication with Better Auth
- ☁️ Cloud storage with Cloudflare R2
- 🎨 Beautiful UI with Shadcn/ui components
- 🚀 Lightning-fast performance
- 📍 Location-based photo organization
- 🌐 SEO optimized
- 🎯 API powered by tRPC

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Database:** [Neon](https://neon.tech/) (Serverless Postgres)
- **ORM:** [Drizzle](https://orm.drizzle.team/)
- **Authentication:** [Better Auth](https://better-auth.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **API Layer:** [tRPC](https://trpc.io/)
- **Storage:** [Cloudflare R2](https://www.cloudflare.com/products/r2/)
- **Deployment:** [Vercel](https://vercel.com)

### Prerequisites

- Node.js 20+
- bun (recommended) or npm
- [Neon Database](https://neon.tech/)
- [Cloudflare R2 Account](https://www.cloudflare.com/products/r2/)
- [Mapbox Account](https://console.mapbox.com/)

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Database
DATABASE_URL=your_database_url

# Auth
# You can generate a random secret using `openssl rand -base64 32`
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app

NEXT_PUBLIC_APP_URL='http://localhost:3000'

# Cloudflare R2
CLOUDFLARE_R2_ENDPOINT=
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
CLOUDFLARE_R2_BUCKET_NAME=
CLOUDFLARE_R2_PUBLIC_URL=

# Mapbox
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
```

Replace `your-domain.com` with your actual domain name. This is required for Cloudflare Image Optimization to work correctly.

### Installation

1. Clone the repository:

```bash
git clone git@github.com:anarbabashov/juliagart.com.git
cd juliagart.com
```

2. Install dependencies:

```bash
bun install
```

3. Set up the database:

```bash
bun db:push
```

4. Start the development server:

```bash
bun run dev
```

Visit `http://localhost:3000` to see your application.

## 🏃‍♂️ Todo

- [x] Home page with tRPC
- [x] Discover page with tRPC
- [x] Dashboard photos & photo id page with tRPC
- [x] Blog page with tRPC
- [x] Travel page with tRPC
