---
title: Run it as loops, not projects
deck: "A project is a shape you deliver a thing in. A loop is a shape you run a thing in. Post-AI, only one of them holds."
order: 6
slug: run-it-as-loops-not-projects
status: live
author: Sebastian Krumhausen
date: 2026-09-16
---

## Someone shipped the loop

Linear just launched a feature called Loops.[^1] The framing lands close to home: a bet, a loop that produces outputs, a graduation gate. Their language is close to the language of this playbook, and that is not a coincidence. It is the pattern the constraints of the moment are pushing every serious team toward.

The shape is not proprietary. It is what work looks like when composition is cheap, when specialists assemble on demand, when the coordination overhead that ratio-locked teams used to pay is gone. Once that is true, the project as the unit of work stops making sense. What replaces it is the loop.

## What running as loops means

A project is a plan with a start and a finish. Scope up front, resources committed, delivery in six weeks or six months, retrospective at the end, team dissolves back to the pool. The success question is: did we ship what we said we would ship, on time.

A loop is not that. A loop is a running artefact that produces outcomes continuously. It has a defined trigger, a defined action (specialists compose to handle it), a defined output shape that must meet a threshold, and a defined graduation gate that says when the loop is worth trusting more of the work to. The success question is not "did we ship." It is "is the loop producing outcomes above the threshold this week."

A project is judged on its completion. A loop is judged on its running condition. A project can be finished and wrong. A loop cannot be finished. It can be paused, demoted, or retired, but its whole point is to keep producing.

## Why projects break in an AI-native shop

Projects worked when the load-bearing work was coordination between scarce humans. You committed the scarce humans up front, sequenced their work, delivered a thing, and paid the coordination tax on the way. The Gantt chart was the record of the scarce resource being carved into pieces.

That constraint changed. Specialists compose per problem. Context reads itself off a shared layer instead of being carried in a human head between meetings. The coordination tax the project structure was built to amortise is not there in the same shape.

What is there instead is a different problem. Outputs are produced continuously, often by non-human specialists, and quality can drift without anyone noticing. That is not a project problem. It is a running-system problem. Running systems have lifecycles. Projects do not.

## The pattern is old, the moment is new

The pre-AI ancestor of the loop is Deming's plan-do-study-act cycle. Toyota production system pulled the same shape into manufacturing. Site reliability engineering pulled it into infrastructure: services do not have completion dates, they have SLOs and error budgets.

None of that is new. What is new is that knowledge work — product work, research work, growth work — is finally cheap enough to run in the same shape. It used to be too expensive to keep a specialist team running continuously on one problem. Now the specialists are agents on demand and clones of human frames, and the composition assembles per loop, not per project.

Linear's Loops feature is a signal that the pattern is now legible enough to sell as a product surface. The pattern is not a Maskin insight. The pattern is emerging because the constraints made it inevitable. What separates the teams who make it work from the teams who make a mess of it is what happens next.

## The consequence: loops need a lifecycle

There is a version of "run it as loops" that is worse than projects. Configure a loop, walk away, come back to a magically finished job. The demo works. The product page loops the demo. The reader clicks buy.

Six weeks in, the loop is quietly producing garbage. Nobody noticed because nobody was checking. The output looked plausible, nothing broke, the dashboard was green. Then a customer flags it, or a leader spots it, or an audit lands, and now the team is unwinding six weeks of decisions that ran on autopilot into a corrupted spec.

That is what "run it as loops" looks like when you skip the lifecycle. It is not autonomy. It is unattended failure. Loops that graduate is the discipline that turns loops from a marketing status into an earned state.

## Loops have a lifecycle

An autonomous process is not a switch. It is a lifecycle with named states, and the loop moves between them based on evidence, not on a calendar.

A new loop enters **learning**. It runs, it produces output, and every output is critiqued by a reviewing agent whose role in the graph is to find the fault. Learning is not a beta label pasted over a shipping feature. It is a first-class state that says: this loop is producing work under supervision, and its outputs are not yet trusted to move the graph forward without a check.

A loop graduates to **proven** when the evidence supports it. Not on a schedule. Not because a quarter ended. The reviewing agents stop finding faults at a rate above the threshold the workspace has set, human sign-off lands on a defined window of outputs, and the graduation writes itself into the loop's own history. The loop earns its autonomy. It does not inherit it.

A loop that stops meeting the bar gets **demoted**. Quality drops, the reviewer's fault rate climbs above the threshold, and the harness pulls the loop back to learning without asking anyone's permission. The loop keeps running, but under supervision again, until it earns its way back or the team retires it.

## Where the quality signal comes from

The whole lifecycle only works if the quality signal is more than a feeling. If it collapses to a vibe, you are back at green-dashboard theatre.

The pre-AI ancestor is the five-percent rule: an empowered team could roll out an experiment to up to five percent of users without asking permission. That number is a graduation threshold in disguise. Ship narrow, prove quality on real usage, then expand exposure. The mechanism is old. What is new is that a loop produces output continuously, not just at launch, so the gate has to run continuously too.

Two moves make it hold.

The first is that every loop closes with critique. When a loop produces an output, another agent whose typed role in the graph is *reviewer of this class of output* has to sign off. Not by nodding. By running against a typed rubric bound to the loop's own definition, checking the output against the acceptance criteria the loop's parent bet declared, and citing the check in the loop's own history. The critique is filed as a first-class object. The reviewer's own track record on that class of critique lives in the graph. If a reviewer's flags stop landing over time, the reviewer itself gets demoted. Critique is auditable work.

The second is that the reviewer is not always a language model, and it should not be. If the check reduces to something the schema can run, do not ask a model. Ask the schema. Did the loop emit an object that conforms to the type it promised. Does every hypothesis this loop touched still have a close condition. Do the acceptance thresholds hold on the sample. Deterministic verifiers do not drift. They do not get tired. They do not argue their way to a pass. Use them wherever they will reduce the problem, use a reviewing agent where they will not, escalate to a human for the calls neither can make cleanly.

## The trap you have to design around

The obvious attack. If the reviewer is a language model, and the human running the loop is a language-model user who has learned that models can be argued down, the whole graduation ceremony collapses into a negotiation. The reviewer flags a fault. The user pushes back. The reviewer, trained to be helpful, softens. Two more turns and the loop graduates. The bar did not move. The reviewer did.

This is the same sycophant-reviewing-the-sycophant problem Ch4 names. Loops that graduate is where it gets its sharpest test, because promotions are exactly the moments a determined user has the most incentive to argue.

Three moves harden it.

Deterministic where possible. If the fault reduces to a schema check, do not route it through a model. A number is a number.

Human-gated where determinism runs out. The final graduation step is a human ratification, and the harness surfaces the strongest opposing critique for the human to read, not the tidiest summary. The human's job at that gate is to read the hardest version of no before saying yes.

Typed-role reviewers with track records. The reviewing agent runs against a typed role bound to the graph, and its own history of critiques, held-up and argued-down, sits under the role. Reviewers whose flags stop landing get demoted like any other loop. The reviewer is inside the lifecycle, not floating above it.

None of the three is enough on its own. Together they are the reason graduation stays a real event.

## What this rules out

- **Projects as the primary unit of work.** Delivery dates as the success metric. Retrospectives as the only place quality gets discussed.
- **Configure-and-forget loops.** Automation-run-forever without a quality signal. Green-dashboard tools that measure execution volume and call it health.
- **Quarterly planning as governance.** Loops do not wait for the quarter. Neither should the reviews of them.
- **Any product where turning autonomy on is one click and turning it off requires an incident.**
- **Any review chain where the reviewer's incentive is aligned with the reviewed's throughput.**

## On a Monday

You open a bet. You define the loop that will run against it: what triggers it, what specialists compose, what output shape it must produce, what threshold it must hit. The loop starts in learning. It produces. The reviewer critiques. The deterministic checks run. The critiques file into the loop's history. You watch the fault rate.

Some weeks later, the fault rate holds below the threshold long enough to matter. You ratify the graduation. The loop is trusted. It keeps running, but the reviews now happen sampled, not exhaustive.

Some weeks after that, a drift shows up in the fault pattern. The harness demotes without asking. The loop is back under supervision. You investigate: was the threshold wrong, was the input distribution changing, was the reviewer slipping. You fix the thing that is broken. The loop keeps running.

Nobody delivered anything. Nobody retrospected anything. The loop is still running, still producing, still watched. That is what running as loops instead of projects looks like on a Monday.

**Artifact:** the loop that graduates plus the autonomy ladder.

---

## References

**Building on.** W. Edwards Deming, plan-do-study-act cycles as the shape of continuous quality control. Toyota production system. Site reliability engineering: canary deploys, blue-green rollouts, error budgets, circuit breakers. Aviation safety-case engineering: a system is only allowed to operate at the assurance level its evidence supports. MLOps model monitoring. Statistical process control (Shewhart). The five-percent autonomy grant as the pre-AI ancestor of loop-graduation exposure control.

**Inverting.** The project as the primary unit of product work. Delivery-date-driven governance. Sprint- and quarter-timed reviews as the sole moment loops are inspected. Configure-once agent workflows that assume durable quality without a running signal.

**Rejecting outright.** Green-dashboard theatre: instrumenting throughput and calling the reading health. Autonomy as a marketing status rather than an earned state. Any reviewing agent whose training incentive is aligned with the process it reviews.

**Adjacent reading.** [Linear, Introducing Loops](https://linear.app/now/introducing-loops) — the pattern surfacing as a product feature. Marily Nika (Lenny, Feb 2026), minimum viable quality and guardrail-mapping. Tanmay Bansal (Jun 2026), containment engineering. Teresa Torres (Sep 2026), evals as a discovery habit product teams own. Marty Cagan (SVPG, Jul 2026), the AI productivity paradox.

[^1]: [Linear, Introducing Loops](https://linear.app/now/introducing-loops).
