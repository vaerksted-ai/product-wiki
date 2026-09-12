---
layout: landing.njk
title: The Post-AI PM Playbook
description: A product playbook for a world where building got cheap. Written by Sebastian Kirkegaard.
hero: A product playbook for a world where building got cheap.
thesis: Builders are biased towards building. The post-AI PM discipline is selling before building — and cutting everything between definition and review.
ogType: website
permalink: /
status: validated
order: 0
---

# The frame, and one rule.

**Deck:** An operating model for the PM job once building stops being the constraint. Written from inside a company building the harness underneath.

---

This is a playbook, not a survey. It does not summarise what the sharpest 2026 essays are saying about AI and product management. There are enough of those. What it does is plant flags: opinionated, load-bearing claims about how the PM job changes shape once building stops being the scarce input and something else takes its place. Every chapter defends one claim. If you disagree with the claim, you should be able to say so specifically after five minutes of reading.

I write this as the founder of Maskin, building the tool underneath. I write about the discipline the tool is designed for because I want the discipline to be right before the tool is famous. The chapters are the discipline. The tool is a footnote in the byline.

## Who this is for

You are a CPO, a founder, or a head of product at a Series B who has already read the essays. You already believe building got cheaper. You already know the frameworks (RICE, JTBD, OKRs, shortest-latest-first) are proxies for the team building the right thing, not laws of nature. What you do not have is a coherent operating model for the middle: what runs in the space between definition and shipped outcome, once your engineers are no longer the constraint. That is what the five chapters are for.

If you have not read the essays, come back after you have. This playbook takes the same starting premise (build got cheap, cognition didn't) and skips to the interesting part: what to do about it.

## The load-bearing sentence

Every playbook has one sentence it lives or dies on. Ours is at the end. I am going to plant it here now, on the first page, so you know what the rest is building towards.

**Builders are biased towards building. But what they need to be doing first is selling.**

That is not a growth-marketing punchline. It is the discipline the rest of the playbook is designed to enforce. When building was scarce, the constraint kept teams honest: you had to pick, because you could not build everything. Now that constraint is gone. Nothing stops a team from shipping. Which means the discipline has to come from somewhere else. Proof of demand is where it comes from. Every claim in the playbook maps back to that.

You can read the closing chapter for the argument in full. What follows here is the first rule the discipline generates.

## The activation rule

Before the five chapters, one rule.

**No named buyer, no open bet.**

By named buyer I mean a specific person, at a specific company, whose problem the bet is designed to solve, and who has told you (with something other than a nod) that the problem is real. Not a segment. Not a persona. Not "SaaS teams." One human, with a name you can spell, whose behaviour is the win condition of the bet.

If the bet is a feature, the named buyer is the person who has said they will pay for it, adopt it, or replace their current tool for it. If the bet is a piece of writing, the named buyer is the reader you can picture in the chair opposite you. If the bet is an internal tool, the named buyer is the teammate whose current workflow it replaces. The name is what turns a hypothesis into a bet. Without the name, you have an idea, and ideas are cheap.

This rule sounds like it belongs in a sales-first culture. It belongs everywhere. In a world where building costs almost nothing, the most expensive thing a team can do is build the wrong thing well. A named buyer is the cheapest possible gate against that. If you cannot find one, that is a signal, not an inconvenience. The bet is not smaller than you thought. The bet is not real.

Everything downstream, every gate in every chapter, assumes this rule holds. If a bet opens without a named buyer, the graph fills with plausible-looking work whose success cannot be measured, because the person whose behaviour was going to measure it never existed. The chapters that follow describe how the harness handles gaps, memory, adversarial review, loops, and human re-entry. None of that works if the first gate is skipped.

Anti-vanity by construction. Not anti-vanity by review.

## What the five chapters do

**Chapter 1 — Gates on gaps, not on time.** The harness refuses to advance a bet when the implicit context still has holes. Deadlines were the honest discipline when engineers were scarce. Once they are not, deadlines become how you accumulate a graph of confidently wrong work. Gap-gates replace them.

**Chapter 2 — The graph is the moat.** Typed accumulated context compounds; agents are the interchangeable interface cast on top of it. The moat is not which model you call. The moat is the team memory the calls run on.

**Chapter 3 — Adversarial agents, by design.** Agents structurally instrumented to push back on the human, not to help. Sycophantic assistants are a category error inside a system of record. Humans direct; agents detect.

**Chapter 4 — Loops that graduate.** Autonomous processes run in a learning phase, graduate when their quality has been proven, and demote when their quality drops. The state machine is internal today, user-facing on the roadmap. Either way, the shape is the same: no loop is trusted by default and no loop is distrusted forever.

**Chapter 5 — Two moments, one background.** Humans own the definition at the front and the review at the end. The middle runs as loops. The chapter argues for the shape and against the four situations where a human keeps trying to climb back in.

Each chapter is a claim, an argument, and the anti-pattern it rules out. Read them in order the first time.

## A bridge to chapter 1

The activation rule you just read is the gate at the front of the bet lifecycle. Chapter 1 is the gate inside it. Once a bet is open, the harness holds it on every status transition until the gaps in its implicit context are closed. Same discipline, one altitude down: the front-door rule refuses to open a bet without a buyer; the in-flight gates refuse to advance one that still has holes. Both are anti-slop by construction, not by review. Both replace time-boxing as the mechanism that keeps a team honest. Chapter 1 is where the mechanism lives.

## What this playbook is not

It is not a memo about AI copilots. Copilots make an individual PM faster at doing the old job. This is a book about a different job.

It is not a productivity list. Nothing here will make your Monday morning easier. It will make your quarter more honest, which is different.

It is not a curation of what other PM thinkers are saying. Cagan, Cohen, Mehta, Torres, Singer, Ries, Fried and Hansson, Traynor, and a handful of others show up in the footnotes because they built the ground I am standing on. But the claims are mine. Cite them where they are cited, and disagree with me where I have gone past them.[^1][^2]

**Maskin ships this playbook as executing infrastructure — signal → shipped outcomes.** The company underneath this book builds a tool for teams that want to run the discipline the chapters describe. The tool is a footer byline on every page. The book is the point.

Start with chapter 1.

---

**Footnotes**

[^1]: Jason Fried and David Heinemeier Hansson, *Getting Real* (37signals, 2006). The book that first argued the discipline of selling before you build in the modern web-software era. Their frame was ergonomic: underdo your competition, ship less, sell earlier. This playbook picks up that discipline and asks what it looks like when the "less" is a rounding error and the "sell" is the entire remaining gate.

[^2]: Des Traynor's pre-launch essays for Intercom (2010–2011) are the reference shape for a founder writing a body of work before the tool is famous. Roughly ninety posts, all sharpening a single opinionated view of software-building, all landing on the same reader. Day-one traction on the product was the compounded return of a year of the discipline the microsite is designed to enforce.
