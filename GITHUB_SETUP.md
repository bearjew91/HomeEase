# GitHub Setup Instructions for HomeEase

This guide walks you through setting up the HomeEase project on GitHub and deploying it to Vercel.

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in (or create an account)
2. Click the **"+"** icon in top right → **"New repository"**
3. Fill in the form:
   - **Repository name:** `homeease` (or your preferred name)
   - **Description:** "Planning platform for Israeli housing lotteries"
   - **Public** (recommended for open-source)
   - ✓ Check "Add a README file" (optional - we have one)
   - ✓ Check "Add .gitignore" (select Node)
   - Click **"Create repository"**

## Step 2: Initialize Git Locally

In your project directory (`c:\Users\katon\Documents\HomeEase`):

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: HomeEase MVP scaffold"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/homeease.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Connect via GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign up"** → Choose "Continue with GitHub"
3. Authorize Vercel
4. Click **"Add New Project"**
5. Select the `homeease` repository
6. Click **"Import"**
7. Vercel will automatically detect it's a Next.js project
8. Click **"Deploy"**
9. Wait for deployment to complete
10. Your site will be live at: `https://homeease-[random].vercel.app`

### Option B: Deploy via Command Line

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project? No (first time)
   - Project scope? Your account
   - Project name? `homeease`
   - Framework? Next.js
   - Root directory? ./
   - Build command? ✓ Automatically detected

4. Done! Your site is live.

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter your domain (e.g., `homeease.co.il`)
5. Follow DNS setup instructions from your domain registrar

## Step 5: Set Up Environment Variables (When Needed)

1. In Vercel dashboard, go to **"Settings"** → **"Environment Variables"**
2. Add your variables:
   - `NEXT_PUBLIC_API_URL` (for future API calls)
   - Database URL (when Supabase is added)
   - etc.

## Step 6: Enable Automatic Deployments

Vercel is already set up for automatic deployments on push. Every time you:

```bash
git push origin main
```

Your site will automatically redeploy with the latest changes.

## Local Development Workflow

```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/your-feature

# Make changes
# ... edit files ...

# Stage and commit
git add .
git commit -m "Add your-feature"

# Push to GitHub
git push origin feature/your-feature

# Open pull request on GitHub for review
# Once approved, merge to main
# Vercel will auto-deploy
```

## Monitoring Your Deployment

1. **In Vercel Dashboard:**
   - View deployment history
   - Check build logs
   - Monitor performance
   - Check error logs

2. **In GitHub:**
   - Track commits and PRs
   - View code history
   - Manage issues

## Troubleshooting

### Deployment fails:
1. Check Vercel build logs
2. Ensure all dependencies are in `package.json`
3. Check environment variables are set correctly

### Site doesn't update after push:
1. Check that push was successful (`git push`)
2. Check Vercel deployment status
3. Hard refresh browser (Ctrl+Shift+R)

### TypeScript errors:
1. Run `npm run build` locally to test
2. Check `tsconfig.json` configuration
3. Ensure all types are properly defined

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Desktop](https://desktop.github.com) - GUI alternative to command line

## Next Steps

1. Once deployed, share the Vercel URL with your team
2. Start adding content and research data
3. Gather user feedback
4. Plan Phase 2: Authentication and database
