# 🚀 The Startup Market

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red?style=flat&logo=sanity)](https://www.sanity.io/)
[![NextAuth](https://img.shields.io/badge/NextAuth-5.0-purple?style=flat)](https://next-auth.js.org/)

**The Startup Market** is a modern platform where entrepreneurs can pitch their startup ideas, connect with like-minded innovators, and get feedback from the community. Built with cutting-edge technologies for a seamless, real-time experience.

---

## ✨ Features

- 🔐 **GitHub OAuth Authentication** - Secure login with NextAuth
- 📝 **Create & Pitch Startups** - Share your ideas with rich markdown content
- 🔍 **Search & Filter** - Find startups by category, keywords, or trending
- 👀 **Real-time Views** - Track startup engagement with live view counts
- 💬 **Interactive Cards** - Beautiful startup cards with images and descriptions
- 🎨 **Modern UI** - Built with Tailwind CSS and Radix UI components
- 📊 **Sanity CMS** - Powerful content management with real-time updates
- 🌐 **Responsive Design** - Works seamlessly on all devices

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### Backend & CMS
- **[Sanity](https://www.sanity.io/)** - Headless CMS for content management
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution
- **[Sanity Live](https://www.sanity.io/docs/live-content-api)** - Real-time content updates

### Deployment
- **[Vercel](https://vercel.com/)** - Production hosting (recommended)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**
- **GitHub OAuth App** (for authentication)
- **Sanity Account** (for CMS)

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
2. Run `npm create sanity@latest` or get keys from your Sanity dashboard
3. Generate a write token with "Editor" permissions

**GitHub OAuth:**
1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Create a new OAuth App
3. Set **Authorization callback URL** to: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret

**NextAuth Secret:**
```bash
# Generate a random secret
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

```
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
│   ├── schemaTypes/          # Sanity schema definitions
│   │   ├── startup.ts        # Startup content model
│   │   ├── author.ts         # Author/user model
│   │   └── playlist.ts       # Curated lists
│   ├── lib/
│   │   ├── client.ts         # Sanity read client
│   │   ├── write-client.ts   # Sanity write client
│   │   ├── queries.ts        # GROQ queries
│   │   └── live.ts           # Real-time subscriptions
│   └── env.ts                # Environment variables
├── lib/
│   ├── actions.ts            # Server actions
│   ├── utils.ts              # Utility functions
│   └── validation.ts         # Form validation
├── auth.ts                   # NextAuth configuration
└── .env.local                # Environment variables (create this)
```

---

## 🎯 Key Features Explained

### Authentication Flow
- **GitHub OAuth** integration using NextAuth.js
- User data automatically synced to Sanity CMS
- Server-side session management for security

### Content Management
- **Sanity Studio** embedded at `/studio` route
- Real-time content updates with Sanity Live
- Markdown support for rich startup pitches
- Image optimization with Next.js Image component

### Startup Listings
- Dynamic filtering and search
- View count tracking
- Category-based organization
- Editor's picks and curated playlists

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Sanity
npm run typegen      # Generate TypeScript types from Sanity schema

# Code Quality
npm run lint         # Run ESLint
```

---

## 🐛 Troubleshooting

### Login Not Working
- Ensure `GITHUB_ID` and `GITHUB_SECRET` are correct
- Verify callback URL in GitHub OAuth app matches: `http://localhost:3000/api/auth/callback/github`
- Check that `NEXTAUTH_SECRET` is set
- Restart dev server after changing `.env.local`

### Sanity Connection Issues
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` matches your project
- Ensure `SANITY_WRITE_TOKEN` has "Editor" permissions
- Run `npm run typegen` to regenerate types

### Build Errors
- Try `npm install --legacy-peer-deps` to resolve peer dependency conflicts
- Clear `.next` folder: `rm -rf .next`
- Regenerate types: `npm run typegen`

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dev0jha/The_Startup_Market)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Update GitHub OAuth callback URL to your production domain
5. Deploy!

**Important:** Update `NEXTAUTH_URL` and GitHub callback URL to your production domain.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Dev Ojha**

- GitHub: [@dev0jha](https://github.com/dev0jha)
- Project: [The Startup Market](https://github.com/dev0jha/The_Startup_Market)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Sanity](https://www.sanity.io/) for the powerful CMS
- [Vercel](https://vercel.com/) for hosting platform
- [Radix UI](https://www.radix-ui.com/) for accessible components
- All contributors and supporters!

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
