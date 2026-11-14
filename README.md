# Colton Kirby — academic website

Five-page static website rebuilt from https://sites.google.com/view/coltonkirby/Philosophy .

Public URL when GitHub Pages is enabled: https://coltonkirby01.github.io/coltonkirby/

## Publishing
Go to repository Settings → Pages and select **GitHub Actions** as the deployment source. Each push to `main` runs `.github/workflows/pages.yml`. GitHub Pages cannot be enabled by the workflow's default token if it is not already enabled.

## Pages
- Home, CV, Research, Teaching, and Links; also `/Philosophy/` alias
- Mobile navigation, keyboard navigation, local search, sitemap and Person identity metadata
- Merriweather-based layout and original visible source copy

## Known source limitations
The inspection specification was supplied without the associated portrait JPEG, PDFs, and document-preview images. Replace `assets/portrait-pending.svg` in `index.html` with the actual portrait as `assets/colton-kirby-portrait.jpg` when supplied. Existing Google Docs links and the desktop CV embed remain live, while the Links cards are fast static preview illustrations. The first resource's source document was reported deleted.

All text, including dated biography and source misspellings, was preserved. Check it before publicity. Empty resource tiles and Coming Soon labels are intentionally retained.

SEO is configured for **Colton Kirby** first, with philosophy secondary. If changing domain or repository name, update all canonical and open-graph URLs, robots.txt, sitemap.xml, and Person metadata. Rank is not guaranteed.
