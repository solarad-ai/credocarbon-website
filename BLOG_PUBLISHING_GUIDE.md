# Blog Publishing Guide

## How the Blog Page Works

The blog page (`/blog`) automatically fetches and displays all posts from your Hashnode blog at `credocarbon.hashnode.dev` (displayed with custom domain `blog.credocarbon.com`).

## Publishing New Posts

When you publish a new post on Hashnode:

### ⏰ Expected Behavior
- **Hashnode's CDN caching delay**: 15-20 minutes
- New posts will NOT appear immediately on your website
- This is a Hashnode platform limitation, not an issue with your website

### ✅ Workflow After Publishing
1. **Publish your post** on Hashnode
2. **Wait 15-20 minutes** for Hashnode's CDN cache to clear
3. **Click the "Refresh" button** on your blog page (top right)
4. Your new post will now appear!

## Why This Happens

Hashnode uses multiple caching layers:
- **Backend API cache** (~10 minutes)
- **CDN/Browser cache** (~15-20 minutes)

Even with aggressive cache-busting headers, browser requests hit the CDN cache which takes longer to clear than server-side requests.

## Automatic Features

✅ **Pagination**: Automatically handles 50+ posts with "Load More" button  
✅ **Recursive fetching**: Loads all available posts on page load  
✅ **Dynamic count**: Footer shows accurate post count  
✅ **Custom domain links**: All links use `blog.credocarbon.com`  

## Troubleshooting

**Post still not showing after 20 minutes?**
1. Verify the post is published (not draft) on Hashnode
2. Check that it's visible at `credocarbon.hashnode.dev`
3. Try clearing your browser cache completely
4. Wait a few more minutes - some CDN layers can take up to 30 min

**Need immediate visibility?**
Unfortunately, there's no way to force Hashnode's CDN to clear faster. This is a platform constraint we have to work with.
