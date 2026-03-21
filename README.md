# Chome Chome South Sudanese Kitchen (static site)

Phase-1 static website for **Chome Chome South Sudanese Kitchen**, with **Healing Hands Cleaning** as a secondary line of service. Plain HTML, CSS, and a small JavaScript file for mobile navigation. No build step. Intended for [GitHub Pages](https://docs.github.com/pages) on a **project** repository (site URL shape: `https://chomechomekitchen.github.io/chomechome-site/`).

## File structure

```
chomechome-site/
  index.html          Home
  food.html           Food menu and ordering
  cleaning.html       Healing Hands Cleaning
  about.html          Story and values
  contact.html        Contact placeholders
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

| Placeholder / search key | Where | Purpose |
|--------------------------|-------|---------|
| `REPLACE_ORDER_FORM` | `food.html` | Google Form URL for food orders (`[ORDER_FORM_LINK]`) |
| `REPLACE_CLEANING_FORM` | `cleaning.html` | Google Form URL for cleaning bookings (`[CLEANING_FORM_LINK]`) |
| `[CASH_APP_HANDLE]` | `pay.html` | Public Cash App handle |
| `[BUSINESS_PHONE]` | `contact.html` | Phone |
| `[BUSINESS_EMAIL]` | `contact.html` | Email |
| `[SERVICE_AREA]` | `contact.html` | Service area |
| `[BUSINESS_HOURS]` | `contact.html` | Hours |

External form links already use `rel="noopener noreferrer"` and `target="_blank"`.

## Publish on GitHub Pages

1. Create a **public** repository named `chomechome-site` under the **chomechomekitchen** GitHub account (or push an existing local repo to that remote).
2. In the repo on GitHub: **Settings** → **Pages** → **Build and deployment** → **Source**: **Deploy from a branch** → Branch **main** → Folder **/** (root) → **Save**.
3. After the first deployment, confirm the live URL matches your project Pages URL (for example `https://chomechomekitchen.github.io/chomechome-site/`).

**Security note:** Before pushing, run `git remote -v` and confirm `origin` points at the correct owner and repository. Do not push if the authenticated GitHub user is not the intended account.

## Post-launch checklist

- [ ] All placeholders in the table above replaced
- [ ] Order and cleaning form links tested end-to-end
- [ ] Cash App handle and any other payment text match what you send in confirmations
- [ ] Contact details and hours are accurate
- [ ] Open the site on a phone and confirm the menu and forms behave as expected
- [ ] Optional: add real photos under `assets/img/` and reference them from the HTML

## License

Content and code are for the business operator. Add a license file if you need one for collaborators.
