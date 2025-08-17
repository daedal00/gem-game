# 🚀 Deployment Guide

This guide will help you deploy your price-guessing game to various hosting platforms.

## 🌐 GitHub Pages (Recommended - Free)

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it something like `price-guessing-game`
4. Make it **Public** (required for free hosting)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Your Files
1. **Option A: Using Git (Recommended)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/price-guessing-game.git
   git push -u origin main
   ```

   **Option B: Drag & Drop**
   - Drag all your files directly to the GitHub repository page
   - Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch
5. Click **Save**
6. Wait a few minutes for deployment

Your site will be available at: `https://YOUR_USERNAME.github.io/price-guessing-game`

## 🎯 Other Hosting Options

### Netlify (Free Tier)
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your site is instantly deployed!
4. Get a random URL like `https://random-name.netlify.app`

### Vercel (Free Tier)
1. Go to [Vercel](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Deploy automatically on every push

### Firebase Hosting (Free Tier)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## 📱 Testing Your Deployment

### Before Deploying
1. **Test locally** - Open `index.html` in your browser
2. **Check images** - Ensure all image paths are correct
3. **Verify data** - Confirm `data.json` loads properly
4. **Test mobile** - Use browser dev tools to test mobile view

### After Deploying
1. **Visit your site** on different devices
2. **Test the game flow** - Play through a few rounds
3. **Check mobile experience** - Ensure it works on phones
4. **Verify images load** - All items should display correctly

## 🔧 Common Issues & Solutions

### Images Not Loading
- **Problem**: Images show as broken
- **Solution**: Check file paths in `data.json` match your actual file names

### Game Not Working
- **Problem**: JavaScript errors or game doesn't start
- **Solution**: Check browser console (F12) for error messages

### Mobile Issues
- **Problem**: Game doesn't work on phones
- **Solution**: Ensure viewport meta tag is present and test touch events

### CORS Errors
- **Problem**: Can't load `data.json`
- **Solution**: Use a proper web server (GitHub Pages handles this automatically)

## 📋 Pre-Deployment Checklist

- [ ] All images are in the `items/` folder
- [ ] `data.json` has correct image paths and prices
- [ ] Game works locally in browser
- [ ] Mobile view looks good
- [ ] All 15 items are configured
- [ ] No console errors
- [ ] Images are optimized (under 500KB each)

## 🎉 Post-Deployment

1. **Generate QR Code** - Use a QR code generator with your site URL
2. **Test with team** - Have a few people try the game
3. **Monitor performance** - Check if images load quickly
4. **Gather feedback** - Ask players about their experience

## 🔄 Updating Your Game

### Add New Items
1. Add new images to `items/` folder
2. Update `data.json` with new items
3. Push changes to GitHub
4. GitHub Pages automatically redeploys

### Change Game Rules
1. Edit values in `game.js`
2. Push changes to GitHub
3. Wait for automatic redeployment

### Fix Issues
1. Make changes locally
2. Test thoroughly
3. Push to GitHub
4. Verify fix is live

## 💡 Pro Tips

- **Use descriptive image names** - Makes debugging easier
- **Keep image sizes consistent** - Better visual experience
- **Test on actual devices** - Browser dev tools aren't perfect
- **Monitor file sizes** - Large images slow down mobile users
- **Backup your data** - Keep copies of images and data.json

## 🆘 Need Help?

1. **Check browser console** for error messages
2. **Verify file structure** matches the expected layout
3. **Test with sample data** first before adding your items
4. **Use GitHub Issues** if deploying to GitHub Pages
5. **Check hosting provider docs** for platform-specific issues

Happy deploying! 🚀
