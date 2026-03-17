# Bold Growth - Static Website

A fully static, ready-to-deploy version of the Bold Growth plant e-commerce website.

## 🌿 Features

- **Dark forest green theme** with liquid glass accent effects
- **6 plant products** with interactive price toggle sliders
- **8 sections**: Hero, Lifestyle, Products, Philosophy, Feature, Size Categories, Delivery, Contact
- **Responsive design** - works on desktop, tablet, and mobile
- **No build step required** - just HTML, CSS, and JavaScript

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** button → **New repository**
3. Name it `bold-growth` (or any name you prefer)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all files from this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `images/` folder (with all 6 images)
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to this folder
cd /path/to/bold-growth-static

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/bold-growth.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (or click "Pages" in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main** and **/ (root)**
6. Click **Save**

### Step 4: Wait & Access

- Wait 1-2 minutes for GitHub to deploy your site
- Your site will be live at: `https://YOUR_USERNAME.github.io/bold-growth`
- You can find the exact URL in the GitHub Pages settings

## 📁 File Structure

```
bold-growth-static/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Interactive features
├── README.md           # This file
└── images/
    ├── eucalyptus.jpg
    ├── hero-bg.jpg
    ├── money-plant.jpg
    ├── palm.jpg
    ├── snake-plant.jpg
    └── tomato-plant.jpg
```

## 🎨 Customization

### Change Contact Information

Edit the contact section in `index.html`:

```html
<!-- Around line 400-420 -->
<p class="contact-value">XXXX</p>  <!-- Change to your email -->
<p class="contact-value">XXXX</p>  <!-- Change to your location -->
<p class="contact-value">XXXX</p>  <!-- Change to your hours -->
```

### Change Product Prices

Edit the price options in `index.html`:

```html
<!-- Example for Eucalyptus -->
<button class="toggle-btn" data-product="eucalyptus" data-options="4,49,89" data-selected="1">
```

Change `data-options="4,49,89"` to your desired prices (small, medium, large).

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --forest: #0B1A12;      /* Main background */
  --mint: #3CE089;        /* Accent color */
  --sage: #A8C4B0;        /* Secondary text */
  --cream: #F3FFF6;       /* Primary text */
  --blue: #3B82F6;        /* Toggle button */
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

This is a template for your personal or commercial use.
