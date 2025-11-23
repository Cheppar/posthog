# PostHog (fork / demo)

This repository contains a small Next.js application bootstrapped with create-next-app. It is intended as a demo or starting point for a PostHog-related project (analytics dashboard, experimentation, or similar). The README below has been expanded with clearer setup, development, and contribution instructions as well as an activity schedule at the bottom.

> Note: If this repo is intended to reproduce or extend the official PostHog product, update this description to reflect the project scope and any licensing or dataset requirements.

---

## Table of contents

- [Project overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Environment variables](#environment-variables)
- [Testing](#testing)
- [Linting & formatting](#linting--formatting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Activity schedule](#activity-schedule)

---

## Project overview

This is a Next.js application (App Router) created with `create-next-app`. Its goal is to provide a minimal, developer-friendly starting point for building features that integrate with PostHog or other analytics tools. Use this repository to prototype dashboards, track events, add feature flags, or to learn Next.js and PostHog integration patterns.

Key technologies:
- Next.js (App Router)
- React
- Node.js (for local dev)
- Tailwind / CSS (if present in the project — adjust as needed)

---

## Prerequisites

- Node.js 18+ (or the version you prefer; see engines in package.json if present)
- npm, yarn, pnpm, or bun (any package manager is supported by the scripts shown)
- Optional: Docker & docker-compose for containerized setups

---

## Quick start

1. Clone the repository
   ```bash
   git clone https://github.com/Cheppar/posthog.git
   cd posthog
   ```

2. Install dependencies (choose one)
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create environment variables
   - Copy `.env.example` to `.env.local` (if `.env.example` exists).
   - Add your PostHog API key, PostHog host URL, and any other secrets required by the app:
     ```
     NEXT_PUBLIC_POSTHOG_API_KEY=your_key_here
     NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
     ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open http://localhost:3000 in your browser.

---

## Available scripts

Common scripts you will find in this repo (verify in package.json):

- dev - Run the Next.js development server
- build - Create an optimized production build
- start - Start the built production server
- lint - Run ESLint
- format - Run Prettier
- test - Run unit tests (if included)
- preview - Locally preview production build

Example:
```bash
npm run build
npm run start
```

---

## Project structure

A typical Next.js (app router) structure:

- app/ - Next.js App Router pages and layouts
- components/ - Reusable React components
- public/ - Static assets
- styles/ - Global styles, CSS or Tailwind config
- scripts/ - Helper scripts (optional)
- package.json - Project scripts and dependencies

Adjust these paths if your project differs.

---

## Environment variables

Put sensitive configuration in `.env.local` (gitignored). Example variables:

- NEXT_PUBLIC_POSTHOG_API_KEY - Public PostHog key for the browser (if using PostHog)
- NEXT_PUBLIC_POSTHOG_HOST - PostHog host (e.g., https://app.posthog.com or your self-hosted URL)
- DATABASE_URL - If the app uses a DB for server-side features

Never commit secrets to the repository.

---

## Testing

If tests exist, run:
```bash
npm test
# or
yarn test
# or
pnpm test
```

Add tests for new features — unit tests for logic and integration/e2e for flows that touch analytics or external services.

---

## Linting & formatting

Use the repository's lint and format scripts to keep code consistent:
```bash
npm run lint
npm run format
```
Configure IDE integrations (ESLint, Prettier) for best DX.

---

## Deployment

This Next.js app can be deployed to Vercel, Netlify, or any platform that supports Node.js. For Vercel:

1. Connect the GitHub repository to Vercel.
2. Set environment variables in the Vercel dashboard.
3. Deploy — Vercel will automatically build Next.js apps.

See Next.js docs for more detailed deployment options: https://nextjs.org/docs/deployment

---

## Contributing

Thanks for wanting to contribute! A good contribution workflow:

1. Fork the repo
2. Create a branch with a descriptive name: `feature/add-analytics` or `fix/login-bug`
3. Run tests and linters locally
4. Open a pull request describing the change and why it’s needed
5. Keep PRs small and focused; include screenshots or recordings for UI changes

If you intend to make large architectural changes, open an issue first to discuss.

---

## Contact / Support

If this repo is used in an organization, add contact info here (owner, Slack channel, or GitHub maintainer). For example:
- Maintainer: @Cheppar
- Issues: https://github.com/Cheppar/posthog/issues

---

## Activity schedule

This schedule lists planned activities and their statuses. The first item below is marked as completed on the date requested.

- Saturday November 15 2025 — [x] Kickoff & repository initialization (scaffold Next.js app, add basic README and initial commit) — Completed
- Saturday November 22 2025 — [ ] Wire up PostHog analytics in the app (install SDK, minimal event tracking, privacy considerations)
- Saturday November 29 2025 — [ ] Add an example analytics dashboard page (display events, simple charts)
- Saturday December 06 2025 — [ ] Add environment configuration and sample .env.example; document secrets handling
- Saturday December 13 2025 — [ ] Add CI workflow (linting, tests, build check) and ensure green status on PRs
- Saturday December 20 2025 — [ ] Add unit and integration tests for key components and analytics flows
- Saturday December 27 2025 — [ ] Prepare deployment to Vercel and update deployment docs
- Saturday January 03 2026 — [ ] Open issues for improvements and start a roadmap (feature flags, experiments, retention dashboards)

Feel free to modify dates, reorder items, or add owners and estimates (e.g., 2d, 1w) to each entry. If you'd like, I can convert this schedule into GitHub issues or a project board and create the initial tasks for you.

---

Thank you for improving this repository. If you'd like, I can:
- Open a PR with this README update
- Create issues for the activity schedule
- Add a GitHub Actions workflow template for CI

Tell me which action you'd like next and I will proceed.
```
