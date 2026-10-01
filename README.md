# Portfolio

Vijay Kumaravelrajan's portfolio, built with Next.js and React Three Fiber.

## Local development

Use Node.js 24 (see `.nvmrc`), then:

```sh
npm ci
npm run dev
```

## Verify before deploying

```sh
npm run check
npm audit
```

`check` runs ESLint, TypeScript, and the production build. To inspect the production build locally, run `npm start` and check `/`, `/about`, `/projects`, `/blog`, and `/resume` on desktop and mobile. The home page contains an interactive WebGL background; check navigation back to Home and confirm the animation restarts. Also verify project images and `/resume.pdf` load.

## Vercel

Use the Next.js framework preset, Node.js 24.x, install command `npm ci`, and build command `npm run build`. Leave the output directory at the Next.js default. This portfolio does not require application secrets or environment variables. Vercel Analytics uses the deployment integration when available.

The repository's biography, project links, and PDF are maintained separately from framework/runtime updates.
