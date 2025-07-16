# Baby Boy Clothing - Myanmar Local Branch

A fullstack Next.js application for a local Myanmar baby clothing business specializing in baby boy apparel.

## Tech Stack

- **Frontend**: Next.js 14+ with React
- **Backend**: Next.js API Routes
- **Styling**: Tailwind CSS (recommended) or CSS Modules
- **Database**: [Your choice - MongoDB, PostgreSQL, etc.]
- **Deployment**: Vercel (recommended for Next.js)

## About

This fullstack web application showcases our collection of quality baby boy clothing, designed specifically for the Myanmar market. We focus on comfortable, safe, and stylish clothing options for babies and toddlers.

## Website Structure

Single-page application with the following sections:

- **Home** - Welcome section with brand introduction
- **Products** - Interactive product catalog with filtering
- **Contact** - Contact form and business information

## Features

- Server-side rendering with Next.js
- Responsive design for all devices
- Product management system
- Contact form with backend processing
- SEO optimized for Myanmar market
- Fast loading and performance optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd baby-clothing-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Add your environment variables:
```
DATABASE_URL=""
NEXTAUTH_SECRET=""
EMAIL_SERVICE_API_KEY=""
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── components/     # React components
│   ├── (pages)/        # Page components
│   └── globals.css     # Global styles
├── public/             # Static assets
├── lib/                # Utility functions
├── types/              # TypeScript types
└── README.md
```

## API Routes

- `GET /api/products` - Fetch all products
- `POST /api/contact` - Submit contact form
- `GET /api/products/[id]` - Get specific product

## Database Schema

### Products
- id (Primary Key)
- name (String)
- description (Text)
- price (Number)
- images (Array)
- category (String)
- sizes (Array)
- inStock (Boolean)

### Contact Messages
- id (Primary Key)
- name (String)
- email (String)
- phone (String)
- message (Text)
- createdAt (DateTime)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

## Environment Variables

```env
# Database
DATABASE_URL=

# Authentication (if needed)
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Email Service
EMAIL_SERVICE_API_KEY=
EMAIL_FROM=

# Other services
CLOUDINARY_URL=  # For image uploads
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Business Information

**Specialization**: Baby boy clothing
**Market**: Myanmar local market
**Business Type**: Local clothing branch with online presence

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## SEO Features

- Meta tags optimization
- Open Graph tags
- JSON-LD structured data
- Sitemap generation
- Myanmar language support

## License

This project is for commercial use by [Noah-city].

- Owner : THINN YU SAN

- Developer : AYE KYI PHYU

- Copyright : noah-city since 2025

---
