# product-wiki

Source for [productwiki.online](https://productwiki.online) — Maskin's post-AI PM playbook microsite.

Static site built with [Eleventy](https://www.11ty.dev/) (v3), deployed to Cloudflare Pages from `main`. Every PR gets its own Pages preview URL.

## Stack

- **Eleventy 3** — Nunjucks layouts + Markdown chapters
- **Zero client JS** beyond the PostHog analytics snippet
- **System-serif type stack** (Charter, Iowan Old Style, Georgia) — no web-font requests, no FOUT/CLS
- **PostHog cookieless** analytics — `person_profiles: 'identified_only'`, no GDPR banner needed
- **Cloudflare Pages** — auto-deploy `main`, preview URL per PR

## Local development

Requires Node ≥ 20.

```
npm install
npm run serve    # dev server on http://localhost:9333 with live reload
npm run build    # one-shot build to _site/
```

PostHog snippet is injected at build time only when `POSTHOG_PROJECT_KEY` is set. Locally you can leave it unset (snippet is skipped) or point at a dev project:

```
POSTHOG_PROJECT_KEY=phc_your_key POSTHOG_HOST=https://eu.i.posthog.com npm run serve
```

## Content layout

```
content/
  index.md              → /                 (landing)
  next.md               → /next/            (closing)
  404.md                → /404.html
  chapters/
    sell-before-you-build.md
    two-moments-one-background.md
    gates-on-gaps.md
    the-graph-is-the-moat.md
    adversarial-agents.md
    loops-that-graduate.md
  drafts/
    example.md          → /drafts/example/  (noindex placeholder)
_includes/
  base.njk              (root HTML + head + skip-link + PostHog)
  head.njk              (SEO meta + JSON-LD + PostHog init)
  nav.njk               (sticky left rail, ≥900px)
  topbar.njk            (native <details> drawer, <900px)
  footer.njk            (author byline)
  landing.njk           (landing layout)
  chapter.njk           (published chapter layout, adds JSON-LD Article)
  pending-chapter.njk   (rendered when status ≠ live and ≠ draft)
  closing.njk           (closing page layout)
  error.njk             (404 layout)
public/
  styles.css            (all design tokens + all rules — the only place hex colors live)
  favicon.ico
  og.png                (1200×630 placeholder — replace with a real design)
_headers                (Cloudflare Pages cache rules)
_data/
  site.js               (title, url, author, PostHog config)
```

## Chapter authoring loop

Drop a markdown file at `content/chapters/<slug>.md` with frontmatter:

```
---
title: Sell before you build
deck: Proof of demand replaces build-cost as the discipline that keeps teams honest.
order: 1
slug: sell-before-you-build
status: live          # pending → rail entry only, no page. draft → /drafts/<slug>/ noindex. live → /<slug>/ index,follow.
date: 2026-09-11      # required when status: live — feeds JSON-LD datePublished
---

Chapter body in markdown here...
```

`status` values:
- `pending` — chapter appears in the rail as muted with `— soon`, no page is built
- `draft` — page renders at `/drafts/<slug>/` with `<meta robots="noindex">`, rail still shows as pending
- `live` — page renders at `/<slug>/` with `robots: index,follow`, rail flips to linkable with the current-chapter marker on that page

## Deploy

Cloudflare Pages auto-deploys from `main`. Every PR to `main` gets its own preview URL.

**Cloudflare Pages project settings (one-time — set in the Pages dashboard):**
- Build command: `npm run build`
- Build output directory: `_site`
- Root directory: `/`
- Environment variables (Production + Preview):
  - `POSTHOG_PROJECT_KEY` — reuses the main-app project key
  - `POSTHOG_HOST` — defaults to `https://eu.i.posthog.com`, only set if different

**Rollback:** Cloudflare Pages dashboard → Deployments → *Rollback to previous deployment*.
