# React Native Documentation Website

A fast, responsive React Native documentation website with advanced search and filtering capabilities.

## Features

- ⚡ **Lightning Fast**: Optimized with React.memo, debounced search, and bundle splitting
- 🔍 **Advanced Search**: Real-time search with 200ms debouncing
- 🎯 **Smart Filtering**: Filter by component properties with dropdown selection
- 🌙 **Dark Mode**: Persistent theme switching with localStorage
- 📱 **Responsive**: Mobile-first design with modern UI
- 🎨 **Modern UI**: Tailwind CSS with custom design system

## Run Locally

**Prerequisites:** Node.js 16+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Deployment

### Rancher/Kubernetes Deployment

The app is configured for SPA (Single Page Application) routing. When deploying to Rancher/Kubernetes, you need to configure your server to serve `index.html` for all routes.

#### Option 1: Using Nginx (Recommended)

1. Build the app:
   ```bash
   npm run build
   ```

2. Use the provided Kubernetes configuration:
   ```bash
   # Create ConfigMap from built files
   chmod +x create-configmap.sh
   ./create-configmap.sh

   # Deploy to Kubernetes
   kubectl apply -f k8s-deployment.yaml
   kubectl apply -f app-configmap.yaml
   ```

#### Option 2: Manual Nginx Configuration

Use the `nginx.conf` file provided in this repository for your nginx configuration. The key setting is:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This ensures that all routes not matching static files will serve the `index.html` file, allowing React Router to handle client-side routing.

#### Option 3: Static Hosting with Redirects

If using platforms like Netlify, Vercel, or Firebase Hosting, the `_redirects` file in the `public` folder will handle SPA routing automatically.

## Project Structure

```
├── components/          # React components
│   ├── DocViewer.tsx   # Main documentation viewer with search/filter
│   ├── Navigation.tsx  # Sidebar navigation
│   └── CodeBlock.tsx   # Syntax-highlighted code blocks
├── data/              # Documentation data files
├── public/            # Static assets
└── dist/              # Built files (after npm run build)
```

## Performance Optimizations

- React.memo for component memoization
- useCallback for event handlers
- Debounced search input (200ms)
- Bundle splitting (vendor, icons, main chunks)
- Virtualized dropdown rendering
- Efficient filtering algorithms

## Technologies Used

- **React 18** with hooks
- **TypeScript** for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Router** for navigation
