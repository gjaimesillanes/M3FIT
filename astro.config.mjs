import { defineConfig } from "astro/config";

// GitHub Actions provides GITHUB_REPOSITORY as "owner/repository".
const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "YOUR-USERNAME/YOUR-REPOSITORY").split("/");
const isUserOrOrgSite = repository === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isUserOrOrgSite ? "/" : `/${repository}`,
});
