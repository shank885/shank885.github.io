# Portfolio Deployment Guide

## 🚀 Step-by-Step Guide to Publishing Your Portfolio on GitHub Pages

### Prerequisites
- GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer (you already have this!)
- Your portfolio code ready (you're all set!)

---

## Option 1: Deploy to GitHub Pages (Recommended for beginners)

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Under **Repository name**, enter: `shank885.github.io`
   - **Important:** Use the format `{your-github-username}.github.io` for automatic GitHub Pages deployment
3. Add a description (optional): "My AI Engineering Portfolio"
4. Choose **Public** (so anyone can see it)
5. Click **Create repository**

### Step 2: Configure Git

Run these commands to configure git with your GitHub details:

```bash
git config --global user.email "shashankshekhar885@gmail.com"
git config --global user.name "Shashank Shekhar"
```

### Step 3: Push Your Code to GitHub

1. Copy the URL of your newly created repository (it should look like `https://github.com/your-username/shank885.github.io.git`)

2. Run these commands in your portfolio directory:

```bash
# Remove old origin if it exists
git remote remove origin

# Add your GitHub repository as the remote
git remote add origin https://github.com/YOUR_USERNAME/shank885.github.io.git

# Rename branch to main (if not already)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Build and Deploy

```bash
# Build the project
npm run build

# The 'dist' folder now contains your production-ready site
```

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Go to **Pages** (left sidebar under "Code and automation")
4. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**

### Step 6: Update Build Action

To automatically build and deploy on each push, create a GitHub Actions workflow:

1. In your repository, create `.github/workflows/deploy.yml`
2. Add this content:

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Push this file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Step 7: Access Your Portfolio

Your portfolio will be live at: `https://YOUR_USERNAME.github.io`

For example: `https://shank885.github.io`

---

## Option 2: Deploy to a Custom Domain

If you own a custom domain (e.g., `shashankshekhar.com`):

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**
4. Update your domain's DNS settings to point to GitHub Pages:
   - Add an `A` record pointing to `185.199.108.153`
   - Add `CNAME` record pointing to `YOUR_USERNAME.github.io`

---

## Option 3: Deploy to Vercel (Even Easier!)

### Step 1: Go to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click **Sign Up** and choose **GitHub**
3. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. Click **New Project**
2. Select your portfolio repository
3. Vercel auto-detects the React/Vite setup
4. Click **Deploy**

Your site will be live at: `portfolio-shashank.vercel.app` (or your custom domain)

---

## Option 4: Deploy to Netlify

### Step 1: Go to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Click **Sign up** and choose **GitHub**
3. Authorize Netlify

### Step 2: Deploy

1. Click **Add new site** → **Import an existing project**
2. Select your GitHub repository
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**

Your site will be live at: `your-site.netlify.app`

---

## 🔄 Updating Your Portfolio

After deploying, whenever you make changes:

```bash
# Make your changes to the code
# Edit files in src/components/

# Stage and commit
git add .
git commit -m "Update portfolio with new content"

# Push to GitHub
git push

# The deployment will automatically rebuild!
```

---

## 📝 Customization After Deployment

### Update Content
Edit the component files in `src/components/` to customize:
- Personal information
- Work experience
- Projects
- Skills
- Blog posts

### Update Colors
Edit `tailwind.config.js` to change the color scheme

### Add Blog Posts
Go to `/blog` on your deployed site and click "New Post" to add blog entries

---

## 🐛 Troubleshooting

### Build fails during deployment
- Check the Actions tab on GitHub for error messages
- Make sure all imports are correct
- Run `npm run build` locally to test

### Site not showing
- Wait 2-3 minutes for GitHub to process the deployment
- Check that your repository is public
- Verify the branch is set to `main` in GitHub Pages settings

### Want to use a different domain
- Update the repository name to `portfolio` (instead of `shank885.github.io`)
- Then use custom domain setup in GitHub Pages

---

## 🎯 Final Steps

1. **Test locally:** `npm run dev` and check `http://localhost:5173`
2. **Build:** `npm run build`
3. **Push to GitHub:** `git push`
4. **Wait for deployment:** Usually 1-5 minutes
5. **Visit your site:** Check your GitHub Pages URL or custom domain

---

## 📚 Useful Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

## 💡 Pro Tips

1. **Custom Domain:** For a professional look, buy a domain and use it with GitHub Pages
2. **SEO:** Add meta tags to `index.html` for better search engine visibility
3. **Analytics:** Add Google Analytics to track visitor statistics
4. **Speedup:** Use Vite's code splitting for faster load times
5. **Blog Growth:** Regularly add blog posts to improve SEO and show expertise

---

Good luck publishing your portfolio! 🚀
