---
title: Loops that graduate
deck: "Autonomous processes run gated on quality, graduate when proven, demote when quality drops."
order: 6
slug: loops-that-graduate
status: validated
author: Sebastian Kirkegaard
date: 2026-09-07
---

A loop that never graduates isn't autonomy. It's a bet you haven't proven.

Every agent-native tool shipping this year sells the same story. Configure the loop, walk away, come back to a magically finished job. The demo works. The product page loops the demo. The reader clicks buy.

Six weeks in, the loop is quietly producing garbage. Nobody noticed because nobody was checking. The output looked plausible, nothing broke, the dashboard was green. Then a customer flags it, or a leader spots it, or an audit lands, and now the team is unwinding six weeks of decisions that ran on autopilot into a corrupted spec.

That is what autonomy looks like when you skip the lifecycle. It is not autonomy. It is unattended failure.

## Loops have a lifecycle

An autonomous process is not a switch. It is a lifecycle with named states, and the loop moves between them based on evidence, not on a calendar.

A new loop enters **learning**. It runs, it produces output, and every output is critiqued by a reviewing agent whose role in the graph is to find the fault. Learning is not a beta label pasted over a shipping feature. It is a first-class state that says: this loop is producing work under supervision, and its outputs are not yet trusted to move the graph forward without a check.

A loop graduates to **proven** when the evidence supports it. Not on a schedule. Not because a quarter ended. The reviewing agents stop finding faults at a rate above the threshold the workspace has set, human sign-off lands on a defined window of outputs, and the graduation writes itself into the loop's own history. The loop earns its autonomy. It doesn't inherit it.

A loop that stops meeting the bar gets **demoted**. Quality drops, the reviewer's fault rate climbs above the threshold, and the harness pulls the loop back to learning without asking anyone's permission. The loop keeps running, but under supervision again, until it earns its way back or the team retires it.

Honest note on scope. The state machine that governs this runs inside the harness today. It is not, yet, a surface the reader of this playbook sees on the loop cards in their own workspace. Making it a visible product surface, with a badge on every loop and a public quality curve, is on the roadmap. The mechanism is real. The user-facing view of it is still coming. If you land on that gap in the product before the follow-on bet ships, know that the discipline behind the words is genuine and the pixels are the part we haven't shipped.

## Where the quality signal comes from

The whole lifecycle only works if the quality signal is more than a feeling. If it collapses to a vibe, you are back at green-dashboard theatre.

The pre-AI ancestor of this is Spotify's 5% rule. Any empowered team could roll out an experiment to up to five percent of users without asking permission. That number is a graduation threshold in disguise. Ship narrow, prove quality on real usage, and only then expand exposure. The mechanism is old. What is new is that a loop in an agent-native tool produces output continuously, not just at feature-launch, so the gate has to run continuously too.

Two moves make it hold.

The first is that every loop closes with critique. When a loop produces an output, another agent whose typed role in the graph is *reviewer of this class of output* has to sign off. Not by nodding. By running against a typed rubric bound to the loop's own definition, checking the output against the acceptance criteria the loop's parent bet declared, and citing the check in the loop's own history. The critique is filed as a first-class object. The reviewer's own track record on that class of critique lives in the graph. If a reviewer's flags stop landing over time, the reviewer itself gets demoted. Critique is auditable work.

The second is that the reviewer isn't always a language model, and it shouldn't be. If the check reduces to something the schema can run, don't ask a model. Ask the schema. Did the loop emit an object that conforms to the type it promised. Does every hypothesis this loop touched still have a close condition. Do the acceptance thresholds hold on the sample. Deterministic verifiers don't drift. They don't get tired. They don't argue their way to a pass. Use them wherever they will reduce the problem, use a reviewing agent where they will not, escalate to a human for the calls neither can make cleanly.

That stack is why loops in Maskin have a chance of graduating honestly. Pull it out and graduation collapses into self-congratulation.

## Humans direct; agents detect

The human is not out of the loop. The human is at the two ends of it.

The human defines what good is for this loop when the loop is created. What the loop is trying to produce, what threshold has to hold, what the acceptance criterion looks like for a single output and for the run of outputs. Not because agents can't propose those thresholds, they can. Because a wrong threshold, chosen by an agent, is a class of wrong we don't want the org to accept from a machine.

The human also ratifies graduation and demotion. Graduation, because promoting a loop to autonomy is a governance move. The human on the hook if it turns out to have been premature should be the one who signed off. Demotion, because pulling a running loop back to supervision has second-order effects downstream, and someone has to own the call. The harness proposes. The human commits.

Everything in between belongs to agents. Watching a hundred outputs for drift no human will sit through. Comparing this loop's fault pattern to every loop the workspace has ever demoted. Playing devil's advocate against the human when the human is drifting themselves and wants to raise the threshold to make a struggling loop's numbers look better. This is exactly the shape agents earn their seat on: coverage humans can't provide, memory humans don't carry, refusal humans find uncomfortable to voice.

Humans direct. Agents detect. The loop is where the two meet.

## The trap you have to design around

The obvious attack. If the reviewer is a language model, and the human running the loop is a language-model user who has learned that models can be argued down, the whole graduation ceremony collapses into a negotiation. The reviewer flags a fault. The user pushes back. The reviewer, trained to be helpful, softens. Two more turns and the loop graduates. The bar didn't move. The reviewer did.

This is the same sycophant-reviewing-the-sycophant problem the adversarial-agents chapter names.[^1] Loops that graduate is where it gets its sharpest test, because promotions are exactly the moments a determined user has the most incentive to argue.

Three moves harden it.

Deterministic where possible. If the fault reduces to a schema check, don't route it through a model. A number is a number.

Human-gated where determinism runs out. The final graduation step is a human ratification, and the harness surfaces the strongest opposing critique for the human to read, not the tidiest summary. The human's job at that gate is to read the hardest version of no before saying yes.

Typed-role reviewers with track records. The reviewing agent runs against a typed role bound to the graph, and its own history of critiques, held-up and argued-down, sits under the role. Reviewers whose flags stop landing get demoted like any other loop. The reviewer is inside the lifecycle, not floating above it.

None of the three is enough on its own. Together they are the reason graduation stays a real event.

## What this rules out

Configure-and-forget loops. Automation-run-forever without a quality signal. Green-dashboard tools that measure execution volume and call it health. Retrospectives quarterly, or sprintly, as the designated place to notice that a loop has been producing garbage for two months.

Any product where turning autonomy on is one click and turning it off requires an incident. Any workflow whose designers assumed the human would notice quality dropping without being told. Any review chain where the reviewer's incentive is aligned with the reviewed's throughput.

Loops that graduate is the anti-decay mechanism. It is what makes the difference between an agent-native team that quietly rots and one that quietly compounds. Nothing else in the system replaces it. You either build the lifecycle in, or the loops eat you.

---

## References

**Building on.** W. Edwards Deming, plan-do-study-act cycles as the shape of continuous quality control. Site reliability engineering: canary deploys, blue-green rollouts, error budgets, circuit breakers. Aviation safety-case engineering: a system is only allowed to operate at the assurance level its evidence supports. MLOps model monitoring: production models are watched for drift and retired when their metrics decay. Statistical process control (Shewhart) as the pre-computing ancestor of every quality-gated loop. Spotify's 5% autonomy grant as the pre-AI ancestor of loop-graduation exposure control.

**Inverting.** Configure-once agent workflows that assume durable quality without a running signal. Sprint- and quarter-timed governance ceremonies as the sole moment loops are reviewed. Feature flags treated as the primary quality control on an autonomous process.

**Rejecting outright.** Green-dashboard theatre: instrumenting throughput and calling the reading health. Autonomy as a marketing status rather than an earned state. Any reviewing agent whose training incentive is aligned with the process it reviews.

**Adjacent reading.** Marily Nika (Lenny, Feb 2026), minimum viable quality and PM guardrail-mapping. Tanmay Bansal (Jun 2026), containment engineering: deterministic validation and retry as the fail-safe layer around a probabilistic model. Teresa Torres (Sep 2026), evals as a discovery habit product teams own, not outsource. Marty Cagan (SVPG, Jul 2026), the AI productivity paradox: velocity without a signal for outcomes produces slop faster.

[^1]: See *Adversarial agents, by design* for the underlying mechanism. Graduation is the moment sycophant-reviewer risk peaks, because the user has the strongest incentive to argue the reviewer down at exactly that gate.
