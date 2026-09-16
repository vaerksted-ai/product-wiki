---
title: Infinite scale
deck: "A product team is no longer a fixed ratio of humans. It is a composition of humans and specialist agents, sized up and down to the problem, without limit."
order: 3
slug: infinite-scale
status: live
author: Sebastian Krumhausen
date: 2026-09-16
---

## The team-shape and what it was for

For most of the last twenty years, the shape of a product team was ratio-locked: one PM, one designer, six to eight engineers, plus supporting functions on rotation. That shape was not handed down; it evolved. It was the ratio that let a small number of humans coordinate closely enough to ship one artefact together without falling over.

Standups existed to close context gaps between humans between meetings. Sprint ceremonies existed to synchronise humans on the same cadence. Retros existed to metabolise the coordination failures the team had accumulated. Quarterly planning existed to align many parallel teams on a shared calendar. Every ritual in the stack was scaffolding around one constraint: coordination between humans is expensive, so we invest in rituals to make it cheaper.

That constraint changed.

## What actually dissolved

Coordination between a human and ten agents is fundamentally different from coordination between eleven humans. Agents do not have context loss between meetings; you hand them the context layer and they read the whole state. Agents can be spun up for a specific problem and dissolved when the problem is done. No HR, no severance, no politics. Agents can be cloned: a single expert human's judgement, packaged into a specialist for a specific feature, running in parallel while the expert works on something else. The specialist inherits the expert's frame without stealing the expert's attention.

Once you are not designing around coordination overhead between scarce human specialists, the ratio-locked team-shape stops being load-bearing. You are free to design the composition around the problem instead of around the permanent staff.

## Infinite scale: composition follows the problem

The right composition for a security audit is different from the right composition for a pricing experiment. Yesterday, both got the same eight-person squad because that is who was on staff. Tomorrow, both get whatever specialists the problem actually calls for.

A security audit might want three specialist agents (threat modelling, cryptography review, dependency scanning), plus one human security lead making judgement calls, plus a clone of the CTO's frame for architectural decisions. Three humans, four agents, one clone. When the audit ends, the composition dissolves.

A pricing experiment might want two human interviewers, one specialist agent for competitive pricing scraping, one specialist agent for elasticity modelling, and a clone of the head of sales' frame for sanity-checking pricing conversations. Three humans, three agents. Different problem, different composition. When the experiment ends, this composition also dissolves.

The size is not fixed and it is not capped. If a problem calls for ten specialists, you compose ten. If it calls for two, you compose two. The limit is the problem, not the payroll. That is what infinite scale means: the team can be sized to the problem in either direction, humans and agents together.

## T-shapes stay; the horizontal bar changes

The IDEO T-shape framing, deep expertise on the vertical, broad ability to collaborate across specialisms on the horizontal, still holds. Both bars matter, but they matter differently.

The vertical bar (deep specialism) is more valuable in an AI-native world, not less. Because composition is cheap, you can afford ten specialists on a problem. The specialists you compose have to be actually deep; a shallow one adds noise without adding signal. Deep taste in one thing is what makes an agent-clone of you worth spinning up.

The horizontal bar (collaboration) still matters, but its collaborators change. A T-shaped PM works with a T-shaped human designer plus a T-shaped agent-specialist for competitive research plus a T-shaped agent-specialist for pricing modelling plus a T-shaped human engineer plus agent-specialists for security review, code review, and QA. The collaborators are no longer all humans. The horizontal bar is now about collaborating across an interchangeable set of specialists, some of whom are bio and some of whom are digital.

Tom Kelley's Ten Faces of Innovation, explicitly anti-devil's-advocate, is the closest pre-AI heritage. The Faces were roles, not people; a single team could pick up different Faces at different moments. Post-AI, the roles are still real; some are picked up by humans, some by specialists on demand, some by clones. Multi-lens beats critique. Composition beats headcount.

## Context is the new organising work

If composition is problem-shaped, the load-bearing question is no longer "which roles exist in an AI-native org?" It is "what does this problem, in this organisation, need?"

That is a context question, not a taxonomy question. The organising work moved from designing the permanent staff to specifying the problem clearly enough that the right composition assembles around it. Naming the problem, sizing it, tagging it with the risks it carries, deciding what evidence would close it: that is the work that pulls the right composition into existence.

## What this rules out

- **Fixed org charts as the substrate.** The org chart still exists as an HR artefact and a legal artefact. It stops being a work artefact. Work assembles per-problem; the org chart does not move.
- **Roadmapping-as-headcount-planning.** "We can do three bets this quarter because we have three squads" is a sentence that will get less true every year. Bets pull composition; composition does not gate bets.
- **Persistent squad names.** "The Growth Squad," "the Platform Squad." Names that persist across quarters regardless of what the squad is actually working on. If the squad has been working on onboarding for four quarters, the name stopped describing the work; it is now naming the headcount.
- **"Who owns X" as a permanent question.** In a problem-shaped world, ownership is per-bet, not per-domain. A domain has a lot of past bets and a context layer of decisions; that context layer is the ownership record.

## What this does not claim

- Not that humans go away. Humans do the origination, the taste, the sizing, the direction, the review. Agents do the execution, the parallelisation, the specialist depth on demand.
- Not that we know exactly which roles survive. The point is not to predict role hierarchies; the point is that composition is problem-shaped now.
- Not that specialists disappear. The opposite. Deep specialism is more valuable because you can compose ten specialists cheaply. What disappears is generalists whose value was in coordinating scarce specialists. That was scaffolding for a constraint that is gone.

## On a Monday

You open a bet. You name the problem clearly enough that a composition can assemble around it. You compose: two humans, three agent specialists, one clone of the expert whose frame the problem calls for. You hand them the definition and the context layer. They run the loops.

You do not schedule a standup. The context layer reports itself. The loops escalate when they hit a re-entry situation. When the bet closes, the composition dissolves. The learning writes back into the context layer, and it is available to the next composition that assembles around an adjacent problem.

The team is a verb, not a noun. It exists for the duration of the problem.

**Artifact:** the team roster that resizes.

---

## References

- **Building on.** Tom Kelley and IDEO, Ten Faces of Innovation (2005): roles as lenses picked up on demand, not permanent titles. IDEO T-shape framing (Tim Brown). Team-of-teams doctrine (Stanley McChrystal, 2015). Bruce Tuckman's group development stages.
- **Inverting.** The persistent-cross-functional-team orthodoxy, right when coordination between humans was the load-bearing constraint, wrong when coordination is cheap. Inverted here: the persistent team was a solution to a coordination problem, not a first principle.
- **Rejecting outright.** Fixed org charts as the substrate of work. Persistent squad names that outlive the work. Roadmapping-as-headcount-planning. "Who owns X" as a permanent question.
- **Adjacent reading.** McChrystal, Team of Teams. Frederic Laloux, Reinventing Organizations. Ravi Mehta on multi-agent orchestration inside product teams.
- **Load-bearing to the rest of the site.** Ch2 is what composition reads from. Ch5 explains the asymmetry, humans direct and agents detect, that makes cross-composition collaboration coherent.
