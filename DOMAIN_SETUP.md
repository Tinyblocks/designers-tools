# Domain Setup Guide for pixelkit.net

## Step 1: Add Domain in Netlify (Already Started)
The Netlify admin panel should now be open. Follow these steps:
1. Click on "Domain settings" or "Domains" in the left sidebar
2. Click "Add custom domain" 
3. Enter: `pixelkit.net`
4. Click "Verify"
5. Netlify will show you the DNS records you need to add

## Step 2: Update Your Squarespace DNS Settings

Based on your current DNS setup, you'll need to **remove the existing Squarespace records** and **add Netlify's DNS records**.

### Records to REMOVE (from Squarespace Defaults):
- All the A records pointing to 198.49.23.xxx and 198.185.159.xxx
- The www CNAME record pointing to ext-sq.squarespace.com

### Records to ADD (from Netlify):

Netlify typically requires:

**For the root domain (pixelkit.net):**
- **Type:** A Record
- **Host:** @
- **Points to:** `104.198.14.52` (Netlify load balancer IP)

**For www subdomain (www.pixelkit.net):**
- **Type:** CNAME Record  
- **Host:** www
- **Points to:** `designers-tools.netlify.app`

### Email Security Records (OPTIONAL - Keep if you use email):
You can keep these if you're using email with your domain:
- `_domainkey` TXT record
- `_dmarc` TXT record  
- `@` TXT record (SPF)

## Step 3: Quick Setup via Nameservers (ALTERNATIVE & EASIER)

Instead of managing individual DNS records, you can point your domain's nameservers to Netlify:

1. In Netlify, go to "Domain settings"
2. Find the nameserver information (usually something like):
   - `dns1.p06.nsone.net`
   - `dns2.p06.nsone.net`
   - etc.

3. In your domain registrar (where you bought pixelkit.net), update the nameservers to point to Netlify's nameservers

4. This way, Netlify will manage all DNS records for you

## Step 4: Verification

Once you've added the records:
1. Wait 5-10 minutes for DNS propagation
2. Netlify will automatically detect when the DNS is configured
3. SSL certificate will be automatically issued
4. Your site will be accessible at https://pixelkit.net and https://www.pixelkit.net

## Notes:
- DNS changes can take up to 48 hours to fully propagate globally
- Usually works within 5-15 minutes
- Keep the custom records section empty for now (unless you need specific subdomains)

