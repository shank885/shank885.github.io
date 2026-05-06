# Shashank Shekhar - Lead AI Engineer Portfolio

A modern, interactive portfolio website showcasing my professional experience, projects, and expertise as a Lead AI Engineer.

## 🌟 Features

- **Modern & Interactive Design** - Built with React and Framer Motion for smooth animations
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme** - Eye-friendly dark mode with blue accent colors
- **Multiple Sections**
  - Hero section with introduction
  - About & contact information
  - Work experience timeline
  - Technical skills & expertise
  - Featured projects showcase
  - Education & publications
  - Blog with ability to add posts
  - Contact form
- **Blog System** - Create, edit, and manage blog posts
- **Social Integration** - Links to GitHub, LinkedIn, and email
- **Smooth Navigation** - Single page app with smooth scrolling

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: React Router v6
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Experience.jsx      # Work experience timeline
│   ├── Skills.jsx          # Technical skills
│   ├── Education.jsx       # Education & publications
│   ├── Projects.jsx        # Featured projects
│   ├── Publications.jsx    # Research papers
│   ├── Blog.jsx            # Blog page with add/edit functionality
│   ├── Contact.jsx         # Contact section with form
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── App.css                 # App styles
├── index.css               # Global styles
└── main.jsx                # Entry point

public/                      # Static assets
tailwind.config.js           # Tailwind configuration
vite.config.js               # Vite configuration
```

## 📝 Customization

### Update Personal Information

Edit the content in each component to match your information:

1. **Navbar** - Update social links
2. **Hero** - Change title, subtitle, and description
3. **About** - Update personal details
4. **Experience** - Add/edit work experiences
5. **Skills** - Update skill categories
6. **Projects** - Add featured projects
7. **Contact** - Update email and phone

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0f172a",      // Dark background
      secondary: "#1e293b",    // Secondary background
      accent: "#3b82f6",       // Primary accent
      accentDark: "#1e40af",   // Dark accent
    },
  },
}
```

### Add Blog Posts

1. Navigate to `/blog`
2. Click "New Post"
3. Fill in title, excerpt, category, and content
4. Click "Publish Post"

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub repository named `your-username.github.io`
2. Push your code to the repository:

```bash
git remote add origin https://github.com/your-username/your-username.github.io.git
git branch -M main
git push -u origin main
```

3. Build the project:

```bash
npm run build
```

4. The `dist` folder contents will be served as your website at `https://your-username.github.io`

5. For automated deployment with GitHub Actions, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: dist
          path: dist
```

### Option 2: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Vercel will automatically build and deploy your site

### Option 3: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customizing Styling

### Tailwind CSS

The portfolio uses Tailwind CSS for styling. To customize:

1. Edit `tailwind.config.js` for theme changes
2. Edit component files to change Tailwind classes
3. Edit `src/index.css` for global styles

### Custom CSS

Add custom styles in `src/App.css` for animations and special effects.

## 🔗 Important Links

- **Repository**: Update git remote to your GitHub repo
- **Live Site**: Will be available at your deployed URL
- **Email**: shashankshekhar885@gmail.com
- **LinkedIn**: linkedin.com/in/shank885
- **GitHub**: github.com/shank885

## 📝 Adding More Sections

To add new sections:

1. Create a new component file in `src/components/`
2. Add your content and styling
3. Import and add the component to `src/App.jsx`
4. Update the Navbar navigation if needed

Example:

```jsx
// src/components/Testimonials.jsx
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        {/* Add your content */}
      </div>
    </section>
  )
}
```

## 🐛 Troubleshooting

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Blog posts not showing:**
Check browser console for errors. Blog data is stored in component state.

## 📄 License

This portfolio is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own purposes.

---

Built with ❤️ using React, Vite, and Tailwind CSS
