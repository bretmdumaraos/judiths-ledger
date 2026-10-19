# Judith’s Ledger — GitHub Pages website

A complete static promotional website for Judith’s Ledger Android app. It includes the original developer-supplied legal documents and user guide, redesigned for consistent navigation, with a responsive homepage and screenshots.

## Upload to GitHub

1. Create a **public** GitHub repository named `judiths-ledger` under the account `bretmdumaraos`.
2. Open the ZIP and **extract** it. Upload the CONTENTS of the `judiths-ledger-website` folder (not the folder itself, and not the ZIP file) into the root of the repository.
3. Your root must have `index.html`, `privacy.html`, `terms.html`, `user-guide.html`, and the `assets/` folder.
4. Commit the uploads. Under **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, and Save.
5. After deployment, expected addresses:
    - https://bretmdumaraos.github.io/judiths-ledger/
    - https://bretmdumaraos.github.io/judiths-ledger/privacy.html
    - https://bretmdumaraos.github.io/judiths-ledger/terms.html
    - https://bretmdumaraos.github.io/judiths-ledger/user-guide.html

These are expected future addresses, not evidence that the repository or deployment already exists.

## Before publishing

- **Screenshots:** The supplied screenshots include names, dates, transaction descriptions and peso amounts. Only upload these screenshots publicly if you are comfortable making them visible to everyone. Replace them with demo/redacted screenshots if needed.
- **Contact:** All `YOUR_EMAIL_HERE` placeholders from the source documents were replaced with `bretmdumaraos@gmail.com`, an address previously provided for the developer's BreonMoto website. Change it in all four HTML pages if Judith’s Ledger should use a different contact address.
- **Google Play:** No guessed Google Play URL was added. Once the app listing is live, add your real Google Play address to the homepage.
- **Legal:** The provided policy and terms wording (updated October 13, 2026) was kept intact apart from the placeholder email substitution and visual layout; review for accuracy before publication.
- No frameworks, package managers, or build commands are required. All assets are local.

## Included

- `index.html` — marketing homepage, responsive features, image gallery, FAQs.
- `privacy.html` — original privacy policy in a redesigned layout.
- `terms.html` — original terms in a redesigned layout.
- `user-guide.html` — original user guide in a redesigned layout.
- `assets/styles.css` — shared responsive theme.
- `assets/site.js` — mobile nav, screenshot filters/lightbox, contents navigation.
- `assets/*.webp` — optimized versions of all 11 supplied app screenshots and logo.
- `assets/social-preview.jpg` — share preview graphic.
