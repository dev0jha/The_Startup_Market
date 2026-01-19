---
title: The Startup Market Documentation
description: Modern platform to share, pitch, and discover startups.
---

# 🚀 The Startup Market

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red?style=flat&logo=sanity)](https://www.sanity.io/)
[![NextAuth](https://img.shields.io/badge/NextAuth-5.0-purple?style=flat)](https://next-auth.js.org/)

**The Startup Market** is a modern platform for entrepreneurs to pitch their startup ideas, connect with innovators, and get real community feedback, powered by a cutting-edge tech stack.

---

## ✨ Features

- 🔐 **GitHub OAuth Authentication** — Secure login via NextAuth
- 📝 **Create & Pitch Startups** — Share your ideas with rich markdown support
- 🔍 **Search & Filter** — Find startups by category, keywords, or trending topics
- 👀 **Real-time Views** — Track engagement with live view counts
- 💬 **Interactive Cards** — Startup cards with images & descriptions
- 🎨 **Modern UI** — Tailwind CSS + Radix UI
- 📊 **Sanity CMS** — Real-time, flexible content management
- 🌐 **Responsive Design** — Optimized for all devices

---

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JS
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** — Accessible component primitives
- **[Lucide React](https://lucide.dev/)** — Icon library

### Backend & CMS

- **[Sanity](https://www.sanity.io/)** — Headless CMS
- **[NextAuth.js](https://next-auth.js.org/)** — Authentication system
- **[Sanity Live](https://www.sanity.io/docs/live-content-api)** — Real-time updates

### Deployment

- **[Vercel](https://vercel.com/)** — Production hosting (recommended)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm / yarn / pnpm
- GitHub OAuth App (for authentication)
- Sanity Account (for CMS)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dev0jha/The_Startup_Market.git
cd The_Startup_Market
```

### 2️⃣ Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3️⃣ Environment Setup

Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-28
SANITY_WRITE_TOKEN=your_write_token

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

#### 🔑 Get Your Keys

**Sanity:**

1. Create a project at [sanity.io](https://www.sanity.io/)
2. Run `npm create sanity@latest` and grab your keys from the Dashboard
3. Generate a write token with "Editor" permissions

**GitHub OAuth:**

1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Create a new OAuth App
3. Set **Authorization callback URL** to: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Secret

**NextAuth Secret:**

```bash
openssl rand -base64 32
```

### 4️⃣ Set Up Sanity Studio

```bash
# Generate TypeScript types from Sanity schema
npm run typegen

# Optional: Open Sanity Studio locally
npm run dev
# Visit http://localhost:3000/studio
```

### 5️⃣ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
The_Startup_Market/
├── app/
│   ├── (root)/               # Main app routes
│   │   ├── page.tsx          # Home page with startup listings
│   │   ├── startup/
│   │   │   ├── [id]/         # Startup detail page
│   │   │   └── create/       # Create new startup
│   │   └── user/[id]/        # User profile page
│   ├── api/auth/             # NextAuth API routes
│   ├── studio/               # Sanity Studio
│   ├── layout.tsx            # Root layout with providers
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation with auth
│   ├── SearchForm.tsx        # Search functionality
│   ├── StartupCard.tsx       # Startup card component
│   ├── StartupForm.tsx       # Create/edit startup form
│   └── ui/                   # Reusable UI components
├── sanity/
│   ├── schemaTypes/          # Sanity schema
│   │   ├── startup.ts        # Startup model
��   │   ├── author.ts         # User model
│   │   └── playlist.ts       # Curated lists
│   ├── lib/                  # Sanity clients, queries, subscriptions
│   └── env.ts                # Environment variables
├── lib/
│   ├── actions.ts            # Server actions
│   ├── utils.ts              # Utility functions
│   └── validation.ts         # Form validation
├── auth.ts                   # NextAuth config
└── .env.local                # (Create this)
```

---

## 🎯 Key Features Explained

### Authentication Flow

- **GitHub OAuth** integration via NextAuth.js
- User data synced to Sanity CMS
- Secure, server-side session management

### Content Management

- **Sanity Studio** embedded at `/studio`
- Real-time updates with Sanity Live API
- Markdown support for startup pitches
- Built-in image optimization

### Startup Listings

- Dynamic search & filtering
- View count tracking
- Category organization
- Editor’s picks & curated playlists

---

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Sanity
npm run typegen      # Generate TS types from Sanity schema

# Code Quality
npm run lint         # Run ESLint
```

---

## 🐛 Troubleshooting

#### Login Not Working

- Check `GITHUB_ID` & `GITHUB_SECRET`
- Verify GitHub OAuth callback URL: `http://localhost:3000/api/auth/callback/github`
- Ensure `NEXTAUTH_SECRET` is set
- Restart dev server if you update `.env.local`

#### Sanity Issues

- Check `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Ensure `SANITY_WRITE_TOKEN` is valid and with proper permissions
- Run `npm run typegen` after schema changes

#### Build Errors

- Use `npm install --legacy-peer-deps`
- Clear `.next`: `rm -rf .next`
- Re-run `npm run typegen`

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dev0jha/The_Startup_Market)

1. Push your code to GitHub
2. Import into [Vercel](https://vercel.com/)
3. Add env variables in the dashboard
4. Update GitHub OAuth callback in your production settings
5. Deploy!

**Note:** Update `NEXTAUTH_URL` & GitHub callback for production.

---

## 🤝 Contributing

1. **Fork** the repo
2. **Create** a branch (`git checkout -b feature/my-feature`)
3. **Commit** (`git commit -m "Add my feature"`)
4. **Push** (`git push origin feature/my-feature`)
5. **Open** a Pull Request

---

## 📄 License

MIT — see [LICENSE](LICENSE).

---

## 👨‍💻 Author

**Dev Ojha**  
- [GitHub @dev0jha](https://github.com/dev0jha)  
- [Project Home](https://github.com/dev0jha/The_Startup_Market)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Vercel](https://vercel.com/)
- [Radix UI](https://www.radix-ui.com/)
- All contributors & supporters!

---

## 📸 Screenshots

### Home Page

![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)

### Startup Detail

![Startup Detail](https://via.placeholder.com/800x400?text=Startup+Detail+Screenshot)

### Create Startup

![Create Startup](https://via.placeholder.com/800x400?text=Create+Startup+Screenshot)

---

**⭐ Star this repo if you find it helpful!**

Built with ❤️ by [Dev Ojha](https://github.com/dev0jha)
