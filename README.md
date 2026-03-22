# Chome Chome South Sudanese Kitchen (static site)

Phase-1 static website for **Chome Chome South Sudanese Kitchen**, with **Healing Hands Cleaning** as a secondary line of service. Plain HTML, CSS, and a small JavaScript file for mobile navigation. No build step. Intended for [GitHub Pages](https://docs.github.com/pages) on a **project** repository (site URL shape: `https://chomechomekitchen.github.io/chomechome-site/`).

## File structure

```
chomechome-site/
  index.html          Home
  food.html           Food menu and ordering
  cleaning.html       Healing Hands Cleaning
  about.html          Story and values
  contact.html        Contact details
  pay.html            Payment information
  404.html            Not found (GitHub Pages)
  README.md
  .gitignore
  assets/
    css/style.css     Global stylesheet
    js/main.js        Mobile nav toggle and resize handling
    img/              Add images here when ready
```

## Local preview

From this folder, start any static file server, for example:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/` in a browser. Links use **relative paths** so the site works at the repository root and on a GitHub Pages project URL.

## Updating content

- **Copy and tone:** Edit the HTML files directly. Shared chrome (header, footer) is repeated on each page on purpose so a non-technical editor can change one page without tooling.
- **Styles:** Adjust `assets/css/style.css`. Colors and spacing use CSS variables at the top of the file.
- **Images:** Place files under `assets/img/` and reference them with relative paths, for example `assets/img/photo.jpg`.

## Replace these placeholders before launch

Search the project for each string and replace with real business values. Remove or shorten the gray “launch checklist” boxes on pages when you are done.

**Already set in `contact.html`:** email `chomechomekitchen@gmail.com`, service area Minneapolis–St. Paul metro area, hours Available 24/7 by request. Phone currently reads “Phone available upon confirmation” until a public number is published.

**Food order form (`food.html`):** live. The “Open the order form” button points to  
`https://docs.google.com/forms/d/e/1FAIpQLSdwR9k96X4rV-PWsYWxZTDoX_GhWths6Aiy6QloJUGUmRdZDA/viewform`  
(landed in commit `3aa5ca0`). No `REPLACE_ORDER_FORM` / `[ORDER_FORM_LINK]` strings remain in that file.

| Placeholder / search key | Where | Purpose |
|--------------------------|-------|---------|
| Cleaning booking form URL | `cleaning.html` | **Live:** primary CTA points to `https://docs.google.com/forms/d/e/1FAIpQLSeTTy4c1h5JRK_5fUy5V-yFj9nGPeX-MzzGogN1KsR9BrTJUg/viewform`. Contact and email remain as secondary options. |
| `[CASH_APP_HANDLE]` | `pay.html` | Public Cash App handle |
| Public phone line | `contact.html` | Replace interim “Phone available upon confirmation” when ready |

External form links already use `rel="noopener noreferrer"` and `target="_blank"`.

## Publish on GitHub Pages

1. Create a **public** repository named `chomechome-site` under the **chomechomekitchen** GitHub account (or push an existing local repo to that remote).
2. In the repo on GitHub: **Settings** → **Pages** → **Build and deployment** → **Source**: **Deploy from a branch** → Branch **main** → Folder **/** (root) → **Save**.
3. After the first deployment, confirm the live URL matches your project Pages URL (for example `https://chomechomekitchen.github.io/chomechome-site/`).

**Security note:** Before pushing, run `git remote -v` and confirm `origin` points at the correct owner and repository. Do not push if the authenticated GitHub user is not the intended account.

## Post-launch checklist

- [x] Food order form URL in `food.html` (live; commit `3aa5ca0`)
- [x] Cleaning request form URL in `cleaning.html` (verified `/viewform`)
- [ ] All remaining placeholders in the table above replaced (`[CASH_APP_HANDLE]`, public phone)
- [ ] Food and cleaning form links tested end-to-end
- [ ] Cash App handle and any other payment text match what you send in confirmations
- [ ] Contact details and hours are accurate
- [ ] Open the site on a phone and confirm the menu and forms behave as expected
- [ ] Optional: add real photos under `assets/img/` and reference them from the HTML

## License

Content and code are for the business operator. Add a license file if you need one for collaborators.
