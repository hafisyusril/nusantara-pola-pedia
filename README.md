# Nusantara Pola-pedia

Platform blog profesional untuk berbagi insights, strategi, dan berita tentang bisnis digital. Dibangun dengan teknologi modern menggunakan Next.js 16, Prisma, dan PostgreSQL.

## 🎯 Fitur Utama

### Public Section
- **Homepage** - Halaman beranda dengan tampilan hero dan daftar blog terbaru
- **Blog List** - Menampilkan 10 blog terbaru dengan layout card yang menarik
- **Blog Detail** - Halaman detail post dengan layout profesional seperti berita nasional
- **About** - Halaman tentang perusahaan
- **Contact** - Halaman kontak
- **Services** - Halaman layanan

### Admin Section
- **Authentication** - Login dengan email dan password (email: admin@polapedia.com, password: admin123)
- **Post Management** - Create, Read, Update, Delete posts
- **Post List** - Table view untuk semua posts dengan info penulis dan tanggal
- **Traffic Monitor** - Halaman untuk monitoring traffic (ready to implement soon!)

### Technical Features
- **Server-Side Rendering (SSR)** - Homepage dengan ISR (Incremental Static Regeneration)
- **Authentication** - JWT-based authentication dengan cookie
- **Authorization** - Hanya author yang bisa edit/delete post mereka
- **Error Handling** - Comprehensive error handling untuk server & client
- **ISR Caching** - Homepage di-cache dan revalidate setiap 60 detik
- **Type Safety** - Full TypeScript support
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 12+
- npm atau yarn

### Installation

1. **Clone & Install Dependencies**
```bash
git clone <repository-url>
cd nusantara-pola-pedia
npm install
```

##  Project Structure

```
app/
├─ (public)/              # Public routes (layout shared)
│   ├─ page.tsx          # Homepage
│   ├─ about/
│   ├─ contact/
│   ├─ services/
│   └─ blog/[id]/        # Dynamic post detail page
├─ admin/                 # Admin section (protected)
│   ├─ layout.tsx
│   ├─ page.tsx
│   └─ posts/
│       ├─ page.tsx      # Post list
│       ├─ create/       # Create post
│       └─ [id]/edit/    # Edit post
├─ api/                   # API routes
│   ├─ auth/login/
│   └─ posts/[id]/
├─ layout.tsx            # Root layout
└─ globals.css           # Global styles

components/               # Reusable components
├- BlogCard.tsx
├─ Navbar.tsx
├─ Footer.tsx
└─ ...

lib/
├─ auth.ts              # Authentication helpers
├─ posts.ts             # Post service functions
├─ prisma.ts            # Prisma client instance
└─ fetcher.ts           # Data fetching utilities

types/
└─ posts.ts             # TypeScript types

prisma/
├─ schema.prisma        # Database schema
├─ seed.ts              # Database seeding
└─ migrations/          # Migration files
```


- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **Database**: PostgreSQL dengan Prisma ORM
- **Authentication**: JWT + Cookies
- **Deployment**: Vercel
- **Icons**: React Icons
- **Toast Notification**: Sonner
- **Code Quality**: ESLint, TypeScript

