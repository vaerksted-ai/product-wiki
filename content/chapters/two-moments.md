---
title: Two moments for the humans in the loop
deck: "Most of the old PM job was coordination overhead defending a constraint that is gone. Cut it. Do not automate it. Two moments need a human. The rest runs as loops."
order: 5
slug: two-moments
status: live
author: Sebastian Krumhausen
date: 2026-09-16
---

## The middle that was there for a reason

The PM job used to have three parts: define at the front, coordinate in the middle, review at the end. The middle was the largest part by hours. It is what standups, sprint ceremonies, backlog grooming, dependency management, cross-team alignment, and ticket maintenance existed to support.

That middle had a reason. When engineers were the constraint, coordinating scarce human specialists across parallel workstreams was where projects went to die. The rituals were the scar tissue of teams that had been burned by dropped hand-offs, missed dependencies, mid-cycle scope drift, and Friday-morning "wait, we thought you were doing that" conversations. Every ceremony existed to make some coordination failure less likely.

The constraint changed. The rituals did not.

## What happened when the constraint dissolved

Building is cheap now. Specialist work, competitive research, pricing analysis, first-pass design, code generation, security review, QA, can be spun up on demand by agents. There is no dependency graph of scarce humans to synchronise. Coordination overhead is defending nothing.

Two things follow. First, the middle of the PM job empties out. The rituals still exist in most orgs because org habit is stronger than org logic, but the coordination they enforce has less to coordinate. Second, whatever remains of the PM job clusters at the ends: at the definition, where the bet is opened, and at the review, where the bet is closed.

Two moments. Everything between runs as loops.

## The two moments

**Definition.** A human decides what the bet is. What signal you are chasing, what buyer you are chasing, what close condition would tell you the bet is won. This is not delegable. Not because agents cannot do it. They can. Because the choice of what to bet on is the durable act of judgement the human owns. Delegate this and you get a PM whose bets look like they came out of a bag of similar-looking completions. Nothing compounds.

**Review.** A human decides what the outcome of the bet means. Was the close condition met. Was the evidence real. Does the outcome update your priors about the segment, the price, the market. This is also not delegable. The judgement about what evidence to trust and what to update on is where the accumulation happens. Skip this and the graph fills with bets that never resolved into learning.

Between those two moments, work runs as loops. An implementation loop that turns the definition into working software. A discovery loop that puts working software in front of a real buyer and captures what happens. A synthesis loop that turns the buyer's response into evidence the human reviewer can act on. Loops read from and write back into the graph. Humans re-enter the loops at defined points.

## Loops that run without hand-holding

An autonomous loop is not the same as a script. Scripts fail silently and require someone to notice. Loops are structurally instrumented to escalate. They surface when they need direction, they push back when they detect drift, they demote themselves when quality regresses. That is the difference between a loop that runs in the background and a workflow that hides its failures until the review meeting.

The loop primitive is what makes "two moments" honest. Without loops, the PM has to babysit the middle, which is just the old PM job with new tooling. With loops, the middle really is background. The PM re-enters the loop only when the loop asks for re-entry, or when the human's own review cadence triggers a check.

## Engaging the neighbours

Two published frames are close enough to this argument to matter. Neither is quite right, but both are load-bearing to the reader.

Andrew Ng's three-loops frame keeps the middle loop human. The claim: the middle loop needs a human for steering, because agents drift without live judgement. This is defensible when the graph underneath is thin and the agents are unaccountable. It stops being defensible when the graph is typed and the agents are structurally instrumented to escalate. The middle loop can be background because the loop is watching itself, not because the human is watching the loop.

Ethan Mollick's Twilight Factory names four re-entry situations: approval (a decision needs human sign-off), expertise (a task exceeds the agent's competence), variance (the loop hit an edge case), and interesting (a novel signal worth a human eye). This is the sharpest live articulation of what background actually means in practice. The chapter agrees with the four situations and owns them as escalations from the background, not as arguments against it. Two moments plus four re-entries.

## What this rules out

- **Sprint choreography as the middle.** Standups, planning, retros, review. A ritual stack calibrated for a constraint that no longer holds. Automating the standup makes it durable. The fix is to delete it.
- **Program-increment ceremonies.** Same category, larger scale. Even less defensible under an AI-native operating model.
- **Task management as the PM's job.** Workflow states, handoffs, ticket routing between engineers. All fossil coordination overhead. If your week is 40% ticket maintenance, you are paid to run a workflow that no longer needs a human.
- **Automating fossil work.** The temptation is to wrap the standup in an agent that summarises it. The wrong move. Automating the fossil makes it durable. The move is to delete the standup and let the loops report themselves into the graph.

## On a Monday

You open a bet. That is moment one. You compose the loops that will chase it, discovery, implementation, synthesis, and hand them the definition. Then you leave.

The loops run. They read from the graph, write back into it, escalate when they hit one of the four re-entry situations. They do not wait for a standup to report status. They report by writing outcomes into the graph continuously. You check the graph when you want to. The graph pings you when the loops want you.

You close a bet. That is moment two. You look at the outcome, decide what it means, mark the bet won or lost, write the learning back into the graph. The next bet inherits that learning automatically.

Two moments. The rest is background. Fossil rituals in between are not the AI-era PM job.

**Artifact:** the two-moments map.

---

## References

- **Building on.** Basecamp / Ryan Singer *Shape Up*, hill chart (uphill unknown, downhill execution). SAE J3016 levels of driving automation (2014), the taxonomy the loop-graduation logic borrows from. Toyota jidoka, the andon cord as escalation from background to human. Norbert Wiener, cybernetics.
- **Inverting.** Andrew Ng *Three Loops* (Jun 2026), middle loop stays human for steering. Inverted here: the middle loop can be background because the loops are structurally instrumented, not because the human is watching. Ethan Mollick *Twilight Factory* (Aug 2026), four re-entry situations. Owned here as escalations from the background, not as arguments against it.
- **Rejecting outright.** Sprint choreography, the ritual stack for a constraint that no longer holds. Program-increment ceremony middles. Task-management-as-middle. All fossil work.
- **Adjacent reading.** Teresa Torres *Continuous Discovery*. arXiv *AI Agents Push Humans Out of the Loop* (Aug 2026), the counter-vector: agent design can degrade the human oversight capacity the two moments depend on.
- **Load-bearing to the rest of the site.** Ch2 (the shared context layer) is where the loops read from and write back into. Ch6 (Run it as loops, not projects) explains how a loop earns the right to run in the background. This chapter assumes graduation as a mechanism; Ch6 specifies it.
