---
layout: landing.njk
title: The Post-AI PM Playbook
description: A product playbook for a world where building got cheap. Written by Sebastian Krumhausen.
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

You are a CPO, a founder, or a head of product at a Series B who has already read the essays. You already believe building got cheaper. You already know the frameworks (RICE, JTBD, OKRs, shortest-latest-first) are proxies for the team building the right thing, not laws of nature. What you do not have is a coherent operating model for the middle: what runs in the space between definition and shipped outcome, once your engineers are no longer the constraint. That is what the six chapters are for.

If you have not read the essays, come back after you have. This playbook takes the same starting premise (build got cheap, cognition didn't) and skips to the interesting part: what to do about it.

## The load-bearing sentence

Every playbook has one sentence it lives or dies on. Here is ours.

**Builders are biased towards building. But what they need to be doing first is selling.**

That is not a growth-marketing punchline. It is the discipline the rest of the playbook is designed to enforce. When building was scarce, the constraint kept teams honest: you had to pick, because you could not build everything. Now that constraint is gone. Nothing stops a team from shipping. Which means the discipline has to come from somewhere else. Proof of demand is where it comes from. Every claim in the playbook maps back to that.

## The activation rule

Before the six chapters, one rule.

**No proof of demand, no open bet.**

Proof of demand is three things, not one. A named buyer — a specific person or segment, not a persona. A testable close condition — a specific thing they will do when given a specific offer. Evidence you can point at that says: this specific person, or this specific segment, will do this specific thing when we give them this specific offer.

A bet without proof of demand is a hobby with a Jira board. In the old world, that hobby was expensive and slow, so you could catch it in review. In the new world, it is cheap and fast, so you have to catch it at the gate. The gate is proof of demand.

This rule sounds like it belongs in a sales-first culture. It belongs everywhere. In a world where building costs almost nothing, the most expensive thing a team can do is build the wrong thing well. Proof of demand is the cheapest possible gate against that. If you cannot assemble it, that is a signal, not an inconvenience. The bet is not smaller than you thought. The bet is not real.

Everything downstream, every gate in every chapter, assumes this rule holds. If a bet opens without proof of demand, the graph fills with plausible-looking work whose success cannot be measured, because the evidence that was going to measure it never existed. The chapters that follow describe how the harness handles context, composition, guardrails, human re-entry, and loop lifecycles. None of that works if the first gate is skipped.

Anti-vanity by construction. Not anti-vanity by review.

## What the six chapters do

**Chapter 1 — You can only sell what you understand.** Selling is the scarce skill now, and you can only sell what you actually understand: the customer, the pain, and what they would pay to make the pain stop. The centre of gravity of the PM job moves outward. Inward coordination shrinks. The three risks — desirability, viability, feasibility — stay; the discipline for shrinking each one moves from politics to evidence.

**Chapter 2 — The product operating model as your shared context layer.** The operating model comes before the tool. When it is designed well, it produces a typed context layer: a record of what the team has bet on, killed, and learned. That layer is what both humans and agents work from — the reason nobody invents and nobody assumes. Hallucination and assuming are the same failure. The moat is not the model. It is the context.

**Chapter 3 — Composition, not headcount.** A product team stops being a fixed ratio of humans. It becomes a composition of humans and specialist agents, sized to the problem, resizing without limit. The T-shape survives; the horizontal bar changes. The organising work moves from designing permanent staff to specifying the problem clearly enough that the right composition assembles around it.

**Chapter 4 — Guardrails to reduce assumptions and hallucinations.** An untested assumption is a hallucination. Guardrails are how you stop both — not warnings, not flags, stops. The gate does not open while the context has a hole. Some agents are built to block, not help. Their identity is separate from the agent that produced the work, and their job is to find the fault.

**Chapter 5 — Two moments for the humans in the loop.** Humans own the definition at the front and the review at the end. The middle is background. The old PM middle — standups, planning, retros — was coordination overhead defending a constraint that no longer holds. Cut it, do not automate it. Automating the fossil makes it durable.

**Chapter 6 — Run it as loops, not projects.** A project is a shape you deliver a thing in. A loop is a shape you run a thing in. Loops have lifecycles: they start in learning, they graduate on evidence, they demote when quality drops. A loop earns its autonomy. It does not inherit it.

Each chapter is a claim, an argument, and the anti-pattern it rules out. Read them in order the first time.

## A bridge to chapter one

The activation rule you just read is the gate at the front of the bet lifecycle. Chapter 1 is the argument for why it exists. Selling is now the scarce skill, and proof of demand is what you assemble when you actually understand who you are selling to. Same discipline, one altitude down: the front-door rule refuses to open a bet without proof; Chapter 1 argues for why the proof has to come from the market, not from the inside of the building.

## What this playbook is not

It is not a memo about AI copilots. Copilots make an individual PM faster at doing the old job. This is a book about a different job.

It is not a productivity list. Nothing here will make your Monday morning easier. It will make your quarter more honest, which is different.

It is not a curation of what other PM thinkers are saying. Cagan, Cohen, Mehta, Torres, Singer, Ries, Fried and Hansson, Traynor, and a handful of others show up in the footnotes because they built the ground I am standing on. But the claims are mine. Cite them where they are cited, and disagree with me where I have gone past them.[^1][^2]

**Maskin ships this playbook as executing infrastructure — signal → shipped outcomes.** The company underneath this book builds a tool for teams that want to run the discipline the chapters describe. The tool is a footer byline on every page. The book is the point.

Start with the preface, or jump to chapter one.

---

**Footnotes**

[^1]: Jason Fried and David Heinemeier Hansson, *Getting Real* (37signals, 2006). The book that first argued the discipline of selling before you build in the modern web-software era. Their frame was ergonomic: underdo your competition, ship less, sell earlier. This playbook picks up that discipline and asks what it looks like when the "less" is a rounding error and the "sell" is the entire remaining gate.

[^2]: Des Traynor's pre-launch essays for Intercom (2010–2011) are the reference shape for a founder writing a body of work before the tool is famous. Roughly ninety posts, all sharpening a single opinionated view of software-building, all landing on the same reader. Day-one traction on the product was the compounded return of a year of the discipline the microsite is designed to enforce.
