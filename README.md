# Mohamed Amine Nejdi - JavaScript and Node.js Portfolio

A responsive personal portfolio built with plain HTML, CSS, browser JavaScript, and Node.js core modules. No framework or npm package dependencies are required.

## Run on Ubuntu

1. Extract this project and open the `portfolio-nodejs` folder in VS Code.
2. Choose **Terminal -> New Terminal**.
3. Check Node.js is installed:

   ```bash
   node --version
   ```

4. Start the local Node.js server:

   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in Firefox.
6. Stop the server with `Ctrl+C` in the terminal.

## Review before publishing

Your email and phone number will be visible to the public. The Tombola card links to both the participant page and the organiser sign-in page; the organiser area should require its own password. Never put the organiser password in this portfolio. Confirm the Tombola is suitable as a public demo before sharing the portfolio.

## Personalize it before publishing

- Your name, email, phone, GitHub profile, and Tombola links are filled in. Check them before publishing because contact details will be public.
- In `app.js`, edit the `projects` array to add your own projects and update project links.
- The language button switches between English and French. Text is in the `translations` object in `app.js`.
- Keep project status honest: label work as `LIVE`, `DEMO`, or `IN PROGRESS` accurately.
- In `style.css`, adjust colors, spacing, and layout. The light blue theme and gradient are at the end of the file.

## Files

- `index.html` - page sections and semantic HTML.
- `style.css` - visual style and responsive layout.
- `app.js` - renders project cards, updates the year, and controls the mobile menu.
- `server.js` - small static server using Node.js built-in modules.
- `package.json` - project scripts and Node.js version requirement.

The portfolio itself does not collect or store visitor information. The email button opens the visitor's email application.

## Publish for free with GitHub Pages

This portfolio is a static website. GitHub Pages can publish the files in the repository root; it does not run `server.js`, which is only for local preview.

1. Create a new public GitHub repository named `mohamed-amine-nejdi-portfolio`.
2. In Ubuntu, open this folder in VS Code and run:

   ```bash
   git init
   git add .
   git commit -m "Create my portfolio"
   git branch -M main
   git remote add origin https://github.com/mohamedaminenejdi-commits/mohamed-amine-nejdi-portfolio.git
   git push -u origin main
   ```

3. On GitHub, open the repository and choose **Settings -> Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for publishing. The site URL should be `https://mohamedaminenejdi-commits.github.io/mohamed-amine-nejdi-portfolio/`.

If Git says the remote already exists, use `git remote set-url origin https://github.com/mohamedaminenejdi-commits/mohamed-amine-nejdi-portfolio.git` before pushing. If you later want a server-side contact form or Node API, host that backend separately on a service that runs Node.js.

## Next portfolio project idea

Build a **small-business appointment booking app** with a JavaScript front end and a Node.js API. Add service listings, available time slots, booking creation/cancellation, an organiser login, and a database. It complements the Tombola by demonstrating scheduling and CRUD workflows. Start with fake/demo data; do not collect real customer data until hosting, privacy, and access controls are ready.
