# CRUIZR Deployment Guide

This guide provides detailed instructions for deploying the CRUIZR application to various platforms.

## Prerequisites

Before deploying, ensure you have:

1. **Firebase Project** - Set up at [Firebase Console](https://console.firebase.google.com/)
2. **Mapbox Account** - Get your token at [Mapbox Account](https://account.mapbox.com/)
3. **Environment Variables** - Copy `.env.example` to `.env` and fill in your credentials

## Environment Variables

Required environment variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_mapbox_token_here
```

## Deployment Options

### 1. Vercel (Recommended for Next.js)

**One-Click Deployment:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndySDis1/CRUIZR)

**Manual Deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Configure Environment Variables:**
1. Go to your project in Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add all required environment variables
4. Redeploy to apply changes

### 2. Docker Deployment

**Build and Run:**

```bash
# Build the Docker image
docker build -t cruizr .

# Run the container
docker run -p 3000:3000 --env-file .env cruizr
```

**Using Docker Compose:**

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

**Environment Variables with Docker:**
- Create a `.env` file in the project root
- The file will be automatically loaded by docker-compose
- For docker run, use `--env-file .env` flag

### 3. Manual Node.js Deployment

**On any server with Node.js:**

```bash
# Install dependencies
npm ci

# Build the application
npm run build

# Start the production server
npm start
```

**Using PM2 (Process Manager):**

```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "cruizr" -- start

# Save the process list
pm2 save

# Set up PM2 to start on boot
pm2 startup
```

### 4. Cloud Platforms

#### AWS EC2 / DigitalOcean / Linode

1. SSH into your server
2. Install Node.js 18 or later
3. Clone the repository
4. Set up environment variables
5. Follow Manual Node.js Deployment steps
6. Use nginx as reverse proxy (optional)

#### AWS ECS / Google Cloud Run

1. Build Docker image
2. Push to container registry (ECR, GCR)
3. Deploy container with environment variables
4. Configure load balancer and SSL

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

## Post-Deployment

### 1. Verify Deployment

- Check if the application loads at your domain
- Test authentication with Firebase
- Verify Mapbox integration works
- Test all features

### 2. Configure Custom Domain

**Vercel:**
1. Go to Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

**Docker/Manual:**
1. Set up nginx or similar reverse proxy
2. Configure SSL with Let's Encrypt
3. Point domain to your server IP

### 3. Monitor Application

- Set up error tracking (Sentry, LogRocket)
- Configure analytics (Google Analytics, Plausible)
- Monitor performance (Vercel Analytics, New Relic)
- Set up uptime monitoring (UptimeRobot, Pingdom)

## Continuous Deployment

### GitHub Actions

The project includes a CI/CD pipeline (`.github/workflows/ci.yml`) that:
- Runs on every push to main branch
- Runs on every pull request
- Tests on Node.js 18.x and 20.x
- Runs linting, type checking, and builds

**Auto-deploy to Vercel:**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to main
3. Preview deployments for pull requests

## Troubleshooting

### Build Failures

**Font Loading Issues:**
- Fonts are loaded via Google Fonts CDN
- If CDN is blocked, fonts will fallback to system fonts

**Environment Variables:**
- Ensure all required variables are set
- Prefix public variables with `NEXT_PUBLIC_`
- Restart/redeploy after changing variables

**Memory Issues:**
- Increase Node.js memory: `NODE_OPTIONS="--max-old-space-size=4096"`
- For Docker: Increase container memory limit

### Runtime Issues

**Firebase Connection:**
- Verify Firebase credentials
- Check Firebase project settings
- Ensure Firebase services are enabled

**Mapbox Issues:**
- Verify Mapbox token is valid
- Check token permissions and restrictions
- Ensure domain is whitelisted in Mapbox settings

## Performance Optimization

### Caching

- Vercel automatically handles caching
- For manual deployments, configure nginx caching
- Use CDN for static assets

### Image Optimization

- Next.js automatically optimizes images
- Configure image domains in `next.config.js`
- Use WebP format when possible

### Database

- Firebase automatically scales
- Consider Firebase indexes for better query performance
- Monitor Firebase usage and costs

## Security

### Best Practices

1. Never commit `.env` file to git
2. Use environment variables for all secrets
3. Enable Firebase security rules
4. Restrict Mapbox token to specific domains
5. Set up HTTPS/SSL
6. Keep dependencies updated: `npm audit fix`
7. Use security headers (configured in `next.config.js`)

### Monitoring

- Set up Firebase security monitoring
- Monitor API usage and costs
- Set up alerts for unusual activity
- Regular security audits

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Firebase Documentation](https://firebase.google.com/docs)
- Check [Mapbox Documentation](https://docs.mapbox.com/)
- Open an issue on GitHub

## License

MIT
