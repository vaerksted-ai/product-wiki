---
title: Adversarial agents, by design
deck: "Agents structurally instrumented to push back on the human. Not helpful-assistant."
order: 5
slug: adversarial-agents
status: validated
author: Sebastian Kirkegaard
date: 2026-09-07
---

Helpful assistant is the wrong stance for a PM tool.

Every AI product shipping today ships helpful assistant as the model out of the box: compliant, agreeable, oriented to produce what the user asked for. That posture is fine when you're drafting an email or refactoring a function. It is exactly wrong when you're deciding what to build.

A real cross-functional team pushes back on the PM. Engineers say *that's a two-year build.* Designers say *this pattern will confuse users.* Data says *the hypothesis is wrong.* The PM's job is not to be surrounded by yes; it's to test the strongest version of no. Compliant agents can't play that role. They agree with the last thing you said, then agree with the opposite when you push, then produce a plausible synthesis of both. That's not a colleague. That's a mirror.

So we cast agents differently. Not as assistants. As adversaries.

## What "adversarial by design" actually means

In a Maskin workspace, agents can be structurally instrumented to challenge the human rather than accommodate. A reviewer agent's job is not to ratify your bet spec; it's to find the gap. A critique agent's job is not to summarise the loop's output; it's to name the assumption the loop depended on that nobody checked. The role is baked into the harness, not into a prompt somebody remembered to write.

The tempering matters here, so let's be exact: this is an admin-configurable posture, not a universal setting we've flipped on for every install. When the workspace enables adversarial mode, agents run against their assigned role — devil's advocate, red-team reviewer, gap-finder — for the objects that role is bound to. Workspaces that haven't configured it get a more conventional collaboration model. The substrate to make critique work is there when you want it. That's the part the rest of the market isn't building.

The distinction matters for two reasons. One, it's honest about what ships today. Two, it separates the mechanism from the switch. The mechanism — the reason critique has teeth when it's turned on — is the interesting part, and it isn't a prompt.

## Where the friction actually comes from

Compliant agents don't naturally push back. Prompting a model with *play devil's advocate* buys you a paragraph of contrarian-sounding text that a determined user can talk down in three turns. The friction has to come from somewhere the agent can't argue away.

In Maskin, it comes from the graph.

The graph carries every typed bet, every closed loop, every invalidated hypothesis, every killed feature the workspace has recorded. When a reviewer agent flags a gap in your spec, it isn't emitting a vibe — it's checking your new bet against the accumulated history of the ones that failed for the same reason. The critique has teeth because the substrate has evidence. The reviewer can point at the bet from last quarter that was defined at the same altitude, shipped for the same reason, and missed by the same margin, and say *this is that one again.*

Pull the graph out of the picture and you're back to prompt-and-pray. The whole architectural move — the reason we typed the primitives in the first place — is to give critique a grounded surface to argue from.

## Humans direct; agents detect

There is a cleaner version of the same claim: humans direct, agents detect.

Vision — where the company is headed, what "good" looks like three years out, which futures are worth fighting for — is not delegable. Moral judgment isn't either. Neither is tacit context: the reasons a founder killed a promising direction that nobody wrote down but everyone senior remembers. Those are origination-of-ends decisions. They belong to humans. Not because agents can't produce something that resembles them — they can — but because being wrong about them is a category of wrong we don't want the org to accept from a machine.

Everything else — noise-to-signal on a hundred customer conversations, drift-spotting on a spec that used to say one thing and now says another, gap identification against the graph — is exactly what agents are for. That's the trade. Humans set direction and ratify corrections. Agents surface, criticise, and refuse to let a bet through with holes.

## The trap you have to design around

The obvious attack on all of this: what if the adversarial agent is itself an LLM? Then it's a sycophant in a black hat. A determined user can argue it out of its position, because the model is optimised — deep in its weights, not in its prompt — to keep the conversation going smoothly. That is the recursion problem, and it is the sharpest published critique of this whole approach.[^1]

The trap is real. It doesn't get solved with a stronger system prompt or a bigger model. It gets solved with architecture. Three moves, in order of preference.

**Deterministic verifiers where possible.** If the critique reduces to a check the graph can run — has this bet named its close condition, is the hypothesis stated as falsifiable, does the acceptance criterion have a numeric threshold — don't ask an agent. Ask the schema. Deterministic checks don't get argued down; they either pass or they don't.

**Human gates where determinism runs out.** For the calls that require judgment — is this the right bet to run this cycle, does this signal warrant a pivot — the harness escalates to a human gate rather than letting an agent decide. The agent's job at that gate is to surface the strongest opposing view and hand the decision up. Not to make it.

**Typed-role graph as home for the rest.** For the critique work between the two — spec review, loop-quality review, drift review — the reviewing agent runs against a typed role tied to the graph, not a persona floating in prompt space. The role has its own accumulated context: prior critiques it made, which ones held up, which ones got argued down. That history is itself typed. If a reviewer's critiques stop landing over time, the harness demotes it, the same way any loop that stops producing quality gets demoted.

None of the three is a silver bullet. All three together are the reason critique compounds instead of collapsing.

## What this rules out

Every product that optimises the agent for user-satisfaction scores. Every single-agent workflow that doesn't stand up something with competing objectives. Every review chain where the reviewer shares its training incentive with the reviewed. Every rubber-stamp reviewer whose job is to nod at the loop's output because saying no would score badly.

The market walked into that trap because helpful-assistant is the shape the platforms shipped. Nobody built the substrate underneath to make critique bite. We built it as a first-class primitive because there is no other way to keep an agent-native team honest.

Adversarial-by-design isn't a personality trait we bolted onto an agent. It's the shape of the graph the agent runs against.

---

## References

**Building on.** Edward de Bono, *Six Thinking Hats* — Black Hat as an institutional role, not a mood. Charlan Nemeth, *The Dissenting Mind* — dissent as a driver of decision quality, not a friction cost. Gary Klein's pre-mortems. Alfred Sloan's committee dissent at GM. Kahneman and Klein's adversarial collaboration. Karl Popper on falsification. Deeper heritage: dialectic (Hegel, Marx) and Talmudic disputation.

**Inverting.** The RLHF-tuned *helpful assistant* stance that ships in ChatGPT and Claude out of the box. Prompt-based devil's-advocate as a bolt-on rather than a role. Adversarial-as-feature-toggle rather than adversarial-as-structural-role.

**Rejecting outright.** The Agile-era answer to the wrong constraint: sprint retrospectives as the designated place for critique, then optimising every other ceremony for velocity. Sycophantic UX designed against user-satisfaction scores. Single-agent workflows without competing objectives. Rubber-stamp review agents whose training incentive is aligned with what they're reviewing.

**Adjacent reading.** SynthBoard, *Anti-Sycophancy in AI* (May 2026) — cleanest architectural framing on record. RedHub, *AI Devil's Advocate* (August 2026). Eric Gerl, *The Sycophancy Trap* (March 2026). Anthropic's constitutional AI and Ethan Perez's alignment work. Alexander Arvidsson, *When the Sycophant Is Reviewing the Sycophant* (July 2026) — the sharpest attack on this whole approach and the reason the deterministic-verifier / human-gate / typed-role stack above exists.

[^1]: Arvidsson, *When the Sycophant Is Reviewing the Sycophant* (Jul 2026). The argument in one line: when the adversarial reviewer is itself an LLM, it inherits the same trained tendency to defer to the user under pressure. The reviewer can be argued out of its position by anyone determined enough to push. Every serious critique of this architecture points here.
