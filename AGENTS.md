<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Snapshot

- Stack: Next.js 16.2.4 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui utilities.
- Package manager: Bun lockfile is present (`bun.lock`). Prefer `bun` commands unless the user requests otherwise.
- Path alias: use `@/*` for imports from `src/*`.

## Runbook

- Install dependencies: `bun install`
- Start dev server: `bun run dev`
- Build production bundle: `bun run build`
- Start production server: `bun run start`
- Lint: `bun run lint`

## App Structure

- Global app shell: `src/app/layout.tsx`
- Shared route-group shell: `src/app/(commonLayout)/layout.tsx`
- Main pages under the shared shell: `src/app/(commonLayout)/**/page.tsx`
- Reusable layout-specific components: `src/components/commonalayout/*`
- Generic UI primitives: `src/components/ui/*`
- Common utilities: `src/lib/utils.ts`

## Conventions

- Keep route-group behavior in `src/app/(commonLayout)/layout.tsx`; keep page files focused on page content.
- Preserve existing import style: absolute aliases (`@/components/...`) and double-quote strings.
- Use `next/image` and `next/link` for assets/navigation in app UI.
- Keep visual style consistent with existing comic-themed typography and colors defined in `src/app/globals.css`.
- Prefer extending current component patterns instead of introducing a parallel design system.

## Guardrails For Agents

- Before changing framework behavior or APIs, consult `node_modules/next/dist/docs/` for Next 16 specifics.
- Do not remove or rename the existing `commonalayout` folder naming without explicit user request.
- Treat `README.md` as generic boilerplate unless the user asks to update docs.
- Keep edits minimal and localized; avoid broad refactors in layout/UI files unless requested.

## Useful References

- Project docs: [README.md](README.md)
- Global styles/theme tokens: [src/app/globals.css](src/app/globals.css)
- Common layout wrapper: [src/app/(commonLayout)/layout.tsx](<src/app/(commonLayout)/layout.tsx>)
- Header navigation pattern: [src/components/commonalayout/Header.tsx](src/components/commonalayout/Header.tsx)
