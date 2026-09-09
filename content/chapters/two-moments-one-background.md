---
title: "Two moments, one background"
deck: "Humans own definition and review. Everything between is loops — and the loop tells you when to come back."
description: "The two-moments-plus-one-background model for post-AI PM work, and where the four human re-entry situations (approval, expertise, variance, interesting) fit inside it."
order: 2
status: validated
---

Before AI, most PM work sat in the middle. Standups. Task shepherding. Prioritisation calls. Weekly demos. Coordinating engineers who couldn't coordinate themselves. The classical PM job was 80% *making the middle happen*, and it was 80% of the job because building was expensive: the middle was where the money got spent, so the middle was where a human paid attention.

Building isn't expensive anymore.

What's left of the job — the part that still needs a human — is the two ends: definition at the start, review at the end. Everything between them, if you build it right, runs as loops.

## The two moments

Definition is the front-loaded moment. It's where a bet gets shape: the buyer, the problem, the hypothesis, the close condition. Chapter three lives here — gates on gaps, not on time. If your definition has holes, no downstream loop can save you, because the loops are working *from* your definition.

Review is the back-loaded moment. Something got produced by the loop. You judge it against the definition. You accept, you reject, you send back, you kill the bet, you promote the finding.

Both moments are irreducibly human. Definition is where taste, business context, and unwritten strategy get encoded. Review is where the same taste and context grade the output. The two moments are the same act at opposite ends of the loop.

Everything in between — the drafts, the discovery pings, the sub-agent handoffs, the retries, the customer research calls, the intermediate deliverables — is the middle. The middle, done right, doesn't need you.

## What the middle looks like

The middle is a set of loops. A customer discovery loop. An implementation loop. A pricing-experiment loop. Each loop has a shape: it runs, it produces evidence against the close condition, it either graduates, iterates, or hands back. Chapter six is about how loops earn autonomy; this chapter is about what they *do* while they run.

Which is, mostly, the middle work you used to do.

The reason it works now is not that loops are smart. It's that the graph is typed. The bet has a close condition. The insight has a source. The customer conversation has a transcript with a hypothesis attached to it. The loop can navigate a middle it can read. Before, the middle was implicit — a shared cognitive model between three or four humans in a room, held together by meetings. It couldn't be handed off. Now it can.

Linear manages your work. This playbook outsources it. That's the shift. The PM upgrades from middle manager to something more like a strategic thought leader with a chief of staff. The middle still happens. It just happens without you.

## The obvious pushback

Every 2026 essay that says "agents run the middle" gets the same response, and it's a good one: sometimes humans need to be back in the middle.

Ethan Mollick has published the sharpest version of this. His *Twilight Factory* essay names four kinds of moment where the human needs to come back.[^1] Andrew Ng, framing it as three concentric loops, makes the same claim from a different angle: the middle loop is where humans stay in for steering, spec updates, and product decisions.[^2]

Both are right. And this playbook owns that, rather than denying it.

The four situations Mollick names are worth naming clearly here, because they are what a loop has to recognise:

- **Approval.** The next step is irreversible, or high-stakes, or costs real money, or ships to a real customer. The loop pauses. You approve.
- **Expertise.** The situation needs tacit knowledge the loop can't have. Domain judgement. Political read. Something in your head that isn't in the graph.
- **Variance.** Something is off-distribution. The loop's confidence dropped. Its model of the world stopped matching what it's seeing. It should stop and ask.
- **Interesting.** The decision is a learning moment — the kind where a PM's judgement gets sharper. Delegating it means the PM never grows into the harder version of the job.

Two moments, plus four re-entries, is more accurate than two moments, one background. But it's the *same shape*.

## The andon cord

Definition and review are the moments you own. The middle is the loop's job. The four re-entries are the loop asking, structurally, to be pulled back to a human. That is not a contradiction of the two-moments claim. It is the mechanic that makes the two-moments claim honest.

Toyota's jidoka principle is the deepest ancestor. The line runs, but any worker can pull the andon cord when they see a defect.[^3] The cord is not a failure of the line. It's the line acknowledging that some things are outside the algorithm's competence, and escalation *by design* is how the line stays trustworthy. A loop without an andon cord is not a loop. It's a broken autopilot.

> A loop that never hands up is not efficient. It's blind. A loop that hands up on everything isn't a loop; it's a to-do list on rails. The design work is calibrating which of the four situations the loop hands up on — and how quickly it learns which ones didn't need to.

## What this changes on Monday

If you're a CPO reading this, the immediate change is what you calibrate the team on.

You do not calibrate them on middle-work throughput anymore. Standups run, tickets moved, meetings attended, decks produced, coordination volume — that's the middle, and the middle is going to look thin, because the loops are eating it. Thin middle is a feature.

You calibrate on three things:

- **Definition sharpness.** Do bets get opened with a named buyer, a close condition, a hypothesis that could be wrong? Or does the team open bets that are wishlist items with a deadline stapled on?
- **Review cleanliness.** When something graduates out of a loop, does the reviewer accept-or-reject in one pass? Or is the middle collapsing back into their week because the loop can't produce something reviewable?
- **Cord discipline.** Is the loop pulling the andon cord in the right moments, and only those moments? False positives waste your time. False negatives ship slop.

The trap for the reader is treating the four re-entries as evidence that the two-moments claim is wrong — and quietly climbing back into the middle to feel useful. Don't. The middle is not empty; it's just no longer yours.

The other trap is over-tuning the loop to *never* hand up. The four situations are load-bearing. If the loop never pulls the cord, either the middle is stuffed with slop the reviewer will catch (bad) or the reviewer stops catching it too (worse). Approval, expertise, variance, interesting: those are the moments the human is doing the job only the human can do.

Two moments, one background, with an andon cord. That's the shape of the work now.

[^1]: Ethan Mollick, ["Agency and Agents" (One Useful Thing, Aug 2026)](https://www.oneusefulthing.org/p/agency-and-agents). Mollick names the four situations — approval, expertise, variance, interesting — as the reasons humans re-enter agentic work. The naming is his; the underlying pattern is older than agents.
[^2]: Andrew Ng, ["Three Loops for 0-to-1 Products" (The Batch, Jun 2026)](https://explainx.ai/blog/andrew-ng-three-loops-0-to-1-products-2026). Inner loop = the agent, minutes. Middle loop = developer feedback, hours. Outer loop = external feedback, days. Ng puts the human explicitly in the middle loop for steering — same claim, different vocabulary.
[^3]: Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (Productivity Press, 1988). Jidoka + andon cord: any line worker can and must stop the line on defect detection. Escalation is a first-class feature of the production line, not an exception to it.
