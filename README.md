# Astro scientific website — monochrome starter

A minimal black-and-white Astro landing page for a scientific software project. It is configured for automatic deployment to GitHub Pages.

## 1. Edit the project identity

Open `src/pages/index.astro` and replace:
- `SMAX` with your final software name, if different.
- The project description and scientific text with your final wording.
- The `https://github.com/` links with the URL of your repository.

The design uses a monochrome palette and is responsive.

## 2. Create the GitHub repository

1. Create a **public** repository on GitHub (for example, `smax-website`).
2. Unzip this project on your computer.
3. Open a terminal inside the unzipped folder and run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal to preview the site.

## 3. Push the code to GitHub

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub username and repository name:

```bash
git init
git add .
git commit -m "Initial Astro website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## 4. Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy Astro site to GitHub Pages” to finish.

Your site will be available at:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

The workflow deploys automatically whenever you push changes to `main`.

## Notes

- The Astro configuration reads the repository owner and name from GitHub Actions, so you do not need to edit the deployment URL manually.
- If your repository is named `YOUR-USERNAME.github.io`, the site is published at the root URL `https://YOUR-USERNAME.github.io/`.
- GitHub Pages hosts the generated static website. It does not run Python, ML inference, SLURM jobs, or backend services.
- For local development, use Node.js and npm. Commit the generated `package-lock.json` after running `npm install`.
