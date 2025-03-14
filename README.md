# The Shops at 550

A modern, responsive web application showcasing the businesses at 550. Built with React, TypeScript, and Vite, featuring a clean and elegant design.

## 🌟 Features

- Responsive grid layout of business cards
- Clean, modern UI with TailwindCSS
- Image optimization with Cloudinary
- Mobile-friendly design
- Individual business cards with:
  - Business logos
  - Operating hours
  - Descriptions
  - Direct website links
  - Custom link wording

## 🛠 Tech Stack

- React 19
- TypeScript
- Vite 6
- TailwindCSS 4
- Cloudinary for image management
- ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Leilanigreer/shops_550_vite.git
cd shops_550_vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This will create a production-ready build in the `dist` directory.

## 📦 Project Structure

```
shops_550_vite/
├── src/
│   ├── components/         # React components
│   ├── businesses/        # Business data
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── dist/               # Production build
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🌐 Deployment

The application is configured with Caddy server for production deployment, with settings optimized for performance and security.

## 💜 Credits

Created with love by [Leilani Greer](https://leilanigreer.com)
