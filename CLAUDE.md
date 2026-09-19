# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

`liftingdiary` is a Next.js 16.3.5 (App Router) + React 19 + TypeScript app, bootstrapped with `create-next-app` and using Tailwind CSS v4 (via `@tailwindcss/postcss`). It is currently a fresh scaffold with no custom features yet — source lives entirely under `src/app/`.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)

There is no test setup in this repo yet.

## Architecture notes

- App Router only (`src/app/`) — no `pages/` directory.
- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- Global styles in `src/app/globals.css`; root layout in `src/app/layout.tsx` sets up the Geist font via `next/font`.

## Important: unfamiliar Next.js version

Per `AGENTS.md`, this Next.js version (16.3.5) has breaking changes relative to older/training-data Next.js knowledge. Before writing routing, data-fetching, or config code, check the relevant guide under `node_modules/next/dist/docs/` (sections: `01-app`, `02-pages`, `03-architecture`, `04-community`) rather than relying on prior assumptions.
