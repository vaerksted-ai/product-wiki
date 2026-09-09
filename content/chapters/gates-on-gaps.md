---
title: Gates on gaps, not on time
deck: Every LLM-native tool ships to fill gaps with plausibility. This one refuses to move until the gaps are closed.
order: 3
slug: gates-on-gaps
status: validated
date: 2026-09-09
---

Every 2026 PM methodology has a bug. The bug is: **the deadline is the discipline.** Sprints, cycles, quarters, appetite windows — the whole vocabulary treats time as the constraint that forces the trade-off. You can't ship everything, time runs out, you cut scope, you learn, you iterate.

That worked when the cost of shipping was engineers. Engineers were scarce, they were expensive, and shipping the wrong thing burned six weeks of the constraint you couldn't get back. So you time-boxed. You forced the team to close the definition inside the box, ship what fit, and learn from what broke.

The constraint changed. Engineers aren't scarce anymore — the harness ships in hours what used to take weeks. Something else got scarce, and nobody named it yet.

**Signal quality got scarce.**[^1]

The old middle of the PM job was defending the box against reality. The new middle is defending the graph against slop. And you cannot do that with a deadline. A deadline says: *ship what you have.* Slop says: *what you have is plausible-looking noise that will cascade for six months before anyone notices.* Shipping on time, in an AI-native workflow, is how you accumulate a graph of confidently wrong context that every downstream loop treats as ground truth.

The fix is not more review. The fix is not a better prompt. The fix is a different gate.

## The gate is on gaps

In the harness, a bet moves through a lifecycle: **signal → define → live → validated.** Every LLM-native tool I've seen treats those transitions as calendar events — the PM ratifies the move on Monday, the deadline says define ends Thursday, live ships the sprint after. Maskin's harness treats them as *completeness events.* Signal doesn't become define until the gaps in the signal are closed. Define doesn't become live until the gaps in the definition are closed. Live doesn't become validated until the close conditions have fired.

A gap, here, means: **implicit context the human bet-maker is carrying that the graph doesn't know.** Not "the spec is incomplete" in the wishy-washy sense. Concretely: the assumption you didn't write down because it was obvious to you; the customer segment you meant but didn't name; the acceptance criterion the agent will make up if you don't nail it; the failure mode you'd flag in review but didn't put in the definition. Every one of those is a gap. Every one, left open, becomes a plausible hallucination downstream.

The harness's job is to find those gaps and refuse to move until they're closed. Sometimes the closer is another human — you go ask the CPO, or the customer. Sometimes it's an agent — a devil's-advocate reads the graph, sees the missing piece, opens a comment. Sometimes it's a doc — the harness pulls the piece from a knowledge object already in the graph. Doesn't matter where the fill comes from. What matters is that the gate does not open until the fill lands.

**Anti-slop by construction.** Not anti-slop by review.

## Why every AI tool ships the opposite

Look at what every LLM-native product optimises for. Cursor autocompletes. Claude Code produces a plausible plan when you ask for one. ChatGPT reformats your half-formed thought into a confident answer. Copilot fills the next line. The whole point of the interface is: **you don't have gaps; you have a smooth output.** The model's job is to make the surface look complete regardless of whether the underlying context is.

That's the correct behaviour for a text editor. It's the wrong behaviour for a system of record. A PM tool that fills gaps with plausibility is a PM tool that manufactures conviction the team hasn't earned — and manufactured conviction, at scale across a graph of bets and agents and loops, is how you get a company that ships the wrong thing fast, and can't tell why until customers stop renewing.

The harness's inversion: when the answer is missing, **do not fill.** Do not synthesize. Do not summarise around the hole. Open a gap. Route it. Refuse to advance the bet until it closes.

That is the whole design.

## The obvious objection: this looks like waterfall

The obvious objection — and Ryan Singer would raise it — is that gap-gates are just waterfall with better branding. The whole point of appetite-boxing in Shape Up is that gaps are infinite; a team that waits until the specification is "complete" is a team that never ships. Time forces the trade-off. Fix the box, vary the scope. That discipline built Basecamp, and it built a lot of teams that ship real software.[^2]

I agree with all of that in a world where engineers are the constraint. In that world, an infinite gap-list is an infinite excuse not to commit, and time-boxing is the counter-move that forces the honest cut.

The trade-offs invert when engineers stop being the constraint. In an AI-native workflow, the cost of shipping is a rounding error. The cost of shipping a definition with an open assumption is not — because the harness will run six discovery loops, four implementation loops, and two validation loops on top of that assumption before anyone notices it was wrong. What used to be a bug you'd fix next sprint becomes a **slop cascade**: every downstream loop compounds the confidence of the original hole. By the time you catch it, you have to rewind six loops of work, most of which cited each other, all of which looked plausible in isolation.

Time-gates worked when the loss function was engineering effort. Gap-gates work when the loss function is graph poisoning.

The two frameworks aren't in a replacement fight — they defend different constraints. If your bottleneck is humans building, Shape Up's appetite is still the sharpest discipline available. If your bottleneck is the graph the humans and agents share, the appetite is the wrong lever. The gap-list is.

## Ries at bet altitude

The pre-AI ancestor sharper than andon cords or TDD is Eric Ries's *The Startup Way.*[^3] Ries's argument was that mature companies fund initiatives on annual budgets and calendar milestones, which is the wrong shape for anything genuinely new — new work should be funded like a startup, in tranches unlocked when the team hits validated-learning milestones. Metered investment, on evidence of readiness, not on the clock.

That is the same discipline as gap-gates, one altitude higher and one cadence slower. Ries operates on **outcomes at the portfolio level**: did the pivot produce learning? Fund the next tranche or kill it. Gap-gates operate on **inputs at the bet level**: is the implicit context filled? Advance the bet or hold it. Ries invented the mechanism at annual cadence, on results. The harness runs the same mechanism per transition, on readiness.

Standing on his shoulders, not around them.

## The primitives

**Bet-lifecycle gates.** Every status transition — signal → define → live → validated — is refused if the harness detects an unfilled gap. The bet sits on the boundary until the gap closes. You can force-advance, but the harness marks the bet as force-advanced, and downstream loops treat it accordingly.

**Loop-level closure critique.** Every loop closes with an agent pass over its own output. Not "did this succeed?" — that's outcome. **"Did this close the gap it was opened to close?"** If no, the loop stays open and re-runs. If yes, the loop ratifies the fill back into the graph.

**Graph-level adversarial review.** Agents read the graph itself and open gaps against it. Not gaps in a specific bet — gaps in the *shared context* the bets operate on. Missing assumptions, contradicted invariants, hypotheses that no bet has been opened to test. The graph accumulates its own to-do list of implicit context that needs to become explicit.

**No infinite gap-list.** The lever isn't "wait until every gap is closed" — that's the Singer critique, and it's correct. The lever is: **name the gaps you're accepting.** A bet can advance with open gaps, provided the gaps are named, the risk of accepting them is written down, and the bet-maker signs the acceptance. That's the discipline. Not "close every gap"; "close every gap, or own the ones you're leaving open." The graph remembers either way.

## What this replaces

Every methodology already has a gate. Scrum's is sprint review. Shape Up's is the appetite window. SAFe's is PI planning. OKR's is the quarter. All of them use time as the enforcement mechanism. All of them let a team ship an under-specified definition on the deadline because *the deadline was the discipline.*

Gap-gates replace that. The deadline is no longer the discipline; the completeness of implicit context is. You still ship fast — faster, in fact, once the middle empties out — but you ship on completeness, not on the clock.

Every tool that ships in 2026 with an "AI PM" label is going to have to answer for this. The ones that don't will ship confidently wrong output at unprecedented speed, and their users won't notice until the graph is already poisoned. The one that does will feel slower for the first bet, and compound for the next hundred.

You cannot review your way out of slop. You have to gate on the way in.

---

[^1]: "Signal quality got scarce" is the second-order shift 2026 discourse hasn't priced yet. Every essay this year focused on the first-order shift — building got cheap. The second-order shift is what got scarce in its place, and until you can name that, you can't design against it.

[^2]: Shape Up's appetite is the sharpest counter-position I know of; Ryan Singer, *Shape Up* (Basecamp, 2019). The book is right about what it's about. It is not, yet, a book about what happens when the box is no longer expensive.

[^3]: Eric Ries, *The Startup Way* (Crown, 2017). The specific mechanism I'm building on is what Ries calls **innovation accounting** and **metered funding** — the second half of the book, mostly overshadowed by *The Lean Startup* but the sharper contribution to enterprise practice. Ancestor discipline lineage: Toyota's andon cord (stop the line on defect), Deming's "quality is built in, not inspected in," TDD's "no green, no merge." Gap-gates are that discipline one altitude up — the assembly line is the graph.
