# Project Memory: Enflow Site

## Context
- **Status**: Active / Refactored
- **Stack**: Vanilla JS / Node.js SSG (`build.mjs`) + CSS
- **Last Milestone**: Complete de-slop refactoring per `kill-ai-slop` guidelines

## Active Objectives
- [x] Complete AI-slop elimination (gradient-clip headline, mesh blur, kicker spam, emoji, excessive pill radius)
- [x] Build and verify static generation across TR, EN, analytics, and documents pages
- [x] Sync to GitHub remote repository

## Technical Decisions
- **Architecture**: Single source of truth in `content.mjs`, zero-dependency Node static site generator (`build.mjs`).
- **Styling**: High-contrast, solid dark surface system (`--bg: #090d16;`, `--card: #0f1523;`, `--panel: #111726;`) with crisp hairline borders (`--line: #1c273c;`) and clean radius tokens (`6px-8px`).
- **De-slop Standard**: Adherence to `yetone/kill-ai-slop` 35-tell taxonomy.

## Important Links & Paths
- **Main Entry**: `./build.mjs`
- **Content**: `./content.mjs`
- **Styles**: `./styles.css`
- **Repo**: https://github.com/gturhan71/enflow-site

## Change Log & Agent Trail
- [2026-09-01] [Antigravity Kaira]: Refactored styling and copy using kill-ai-slop standards. Removed gradient-clip headline text, atmospheric 3-color mesh blur, repetitive kicker elements, glowing drop shadows, and robot emoji. Enforced solid surfaces, clean 6-8px border radius, and high-contrast B2B aesthetic. Rebuilt static HTML pages.
- [2026-09-01] [Antigravity Kaira]: Elevated visual identity to a premium editorial architecture design system. Replaced Inter with a Newsreader display serif and Plus Jakarta Sans pairing. Implemented asymmetric editorial layouts, comparative ledger components, and grounded carbon/parchment color tokens.
- [2026-09-01] [Antigravity Kaira]: Refined design following Apple Human Interface Guidelines (HIG) via apple-design-skill. Implemented SF Pro native typographic hierarchy, Pro Dark obsidian palette (#000000 / #141416 / #f5f5f7), continuous squircle radii (20px), Apple frosted glass header, and pill CTA buttons.
