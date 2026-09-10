---
title: Example placeholder chapter
deck: This is a placeholder demonstrating the chapter template renders end-to-end. Delete when the first real chapter lands, or leave and let it noindex.
order: 0
slug: example
date: 2026-09-07
---

This placeholder proves the chapter template renders from a markdown file with `layout: chapter.njk`, standard frontmatter (`title`, `deck`, `order`, `slug`), and body content processed as markdown.

## What the chapter template supports

The shell wraps this in the reading column with a sticky left rail on desktop, a native `<details>` drawer below 900px, and the site footer.

Body copy inherits full ink (`--ink`) contrast. The eyebrow, deck, and rail chrome use `--muted`.

## Deep-link demo

Any `<h2>` gets a stable anchor. Sharing a URL like `/drafts/example/#deep-link-demo` lands the reader here with a subtle tint applied to this heading, no animation.

<aside class="note">Asides use <code>&lt;aside class="note"&gt;</code>. They render at reading-measure width with a hairline left border and muted sans copy.</aside>

## Footnotes

Chapters can carry inline superscript footnotes<a href="#fn1" id="ref1" class="fn-ref">1</a> that jump to a numbered block at the foot of the article and back<a href="#fn2" id="ref2" class="fn-ref">2</a>.

<section class="footnotes" aria-label="Footnotes">
  <ol>
    <li id="fn1">First footnote — cite external voices in this shape, keeping the editorial voice above the line. <a href="#ref1">↩</a></li>
    <li id="fn2">Second footnote — every hit gets the same tint on <code>:target</code>. <a href="#ref2">↩</a></li>
  </ol>
</section>
