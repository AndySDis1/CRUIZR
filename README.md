# CRUIZR

A modern social presence network that respects your privacy.

## Features

- 🌍 Real-time location sharing with privacy controls
- 🔒 Privacy-focused with granular permission settings
- 🗺️ Interactive maps powered by Mapbox
- 🔥 Firebase backend for authentication and data storage
- ⚡ Built with Next.js 15 and React 18
- 🎨 Modern UI with Tailwind CSS and Framer Motion

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Firebase project
- Mapbox account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AndySDis1/CRUIZR.git
cd CRUIZR
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Firebase and Mapbox credentials:
- Get Firebase credentials from [Firebase Console](https://console.firebase.google.com/)
- Get Mapbox token from [Mapbox Account](https://account.mapbox.com/)

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndySDis1/CRUIZR)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_MAPBOX_TOKEN`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animation:** Framer Motion
- **Maps:** Mapbox GL
- **Backend:** Firebase
- **Form Validation:** Zod

## License

MIT

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/AndySDis1/CRUIZR)