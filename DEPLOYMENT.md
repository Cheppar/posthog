# Deployment Guide for cPanel

This guide will help you build and deploy your Next.js application to cPanel.

## Prerequisites

- Node.js installed on your local machine
- Access to your cPanel hosting account
- FTP access or File Manager access in cPanel

## Step 1: Install Dependencies

Make sure all dependencies are installed:

```bash
npm install
```

## Step 2: Build the Project

Build your Next.js application for static export:

```bash
npm run build
```

This will:
- Create an optimized production build
- Generate static HTML files in the `out` directory
- Bundle all assets (CSS, JS, images, fonts)

## Step 3: Locate the Build Output

After building, you'll find all deployable files in the `out` directory at the root of your project.

## Step 4: Upload to cPanel

### Option A: Using cPanel File Manager

1. Log into your cPanel account
2. Navigate to **File Manager**
3. Go to your domain's public directory (usually `public_html` or `www`)
4. **Important**: Clear existing files if any (backup first if needed)
5. Upload all files from the `out` directory to your public directory
6. Make sure the `.htaccess` file is uploaded (it should be in the `out` directory after build, or upload the one from project root)

### Option B: Using FTP/SFTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your hosting server
3. Navigate to your domain's public directory
4. Upload all contents from the `out` directory

## Step 5: Verify Deployment

1. Visit your website URL
2. Check all pages load correctly
3. Test navigation between pages
4. Verify images and assets load properly
5. Test interactive features

## Important Notes

### Routing
- The `.htaccess` file ensures client-side routing works correctly
- All routes will be handled by Next.js client-side routing

### File Structure on cPanel
Your cPanel directory should look like:
```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── about.html (or in _next/route/)
├── support.html
├── business.html
└── ... (other static files)
```

### Common Issues

1. **404 Errors on Routes**: Ensure `.htaccess` file is uploaded and Apache mod_rewrite is enabled
2. **Images Not Loading**: Check that image paths are correct and images are in the `out` directory
3. **Styles Not Loading**: Verify that CSS files in `_next/static/css/` are uploaded
4. **JavaScript Errors**: Check browser console and ensure all JS files are loaded

### Build Script

You can add a convenient script to `package.json`:

```json
"scripts": {
  "build:cpanel": "next build && echo 'Build complete! Upload the contents of the out/ directory to your cPanel public_html folder.'"
}
```

Then run: `npm run build:cpanel`

## Updating Your Site

Whenever you make changes:

1. Run `npm run build` locally
2. Upload the new files from `out` directory to cPanel
3. Clear browser cache if needed

## Support

If you encounter issues:
- Check cPanel error logs
- Verify file permissions (typically 644 for files, 755 for directories)
- Ensure PHP version is not interfering (though this is a static site)
- Contact your hosting provider if mod_rewrite is not enabled
