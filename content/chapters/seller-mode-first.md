---
title: Seller mode first
deck: "For a generation, the constraint that kept PMs honest was cost. That constraint dissolved. What replaces it is going where the constraint actually moved — outward, commercial, one abstraction layer up."
order: 1
slug: seller-mode-first
status: validated
author: Sebastian Kirkegaard
date: 2026-09-13
---

## The discipline that used to hold the job together

For most of the last twenty years, the thing that stopped product teams from building the wrong thing was cost. Engineers were expensive. Design cycles were expensive. Everything downstream of a decision compounded, so the decision itself had to be careful.

Roadmaps existed to defend the scarce input from being wasted. Sprint choreography existed to protect it from being interrupted. Requirements docs existed to make sure the scarce input built the right thing on the first try. Stakeholder alignment across finance, legal, and compliance existed to keep the scarce input from being blocked halfway through.

Every ritual the PM inherited from the 2010s was a variation on the same theme: developer time is precious, act like it. The whole shape of the job was inward-facing coordination in service of one scarce input.

That input isn't scarce anymore.

## What actually changed

Building is cheap now. Not free — tokens still cost, work-in-progress still costs, focus is still scarce, and it is still expensive to build the wrong thing. But building is cheap enough that the discipline the old inward stack was built to enforce has lost its object. You can prototype a feature over a lunch. You can spin up specialist agents to do work that used to require hiring. You can put working software in front of a real buyer before the roadmap deck would have been finished.

The bottleneck moved. That is the fact from which everything else in this playbook follows.

Two things happen in a world where building is cheap. First, the classical PM stack — the one built around defending scarce developer time — becomes fossil work. Second, whatever is scarce next inherits the discipline. Both are happening at the same time.

## Where the scarcity moved

The scarce input is customer signal.

Not "what customers say in a discovery interview." That's abundant; it always was. What is scarce is *evidence sharp enough to bet on*. Named buyers with real budgets who will name a real close condition. Pricing conversations where a specific number gets a specific yes. Unit economics assembled from actual usage. Objections raised by people who would actually sign. Every one of those is finite, contested, and won by the team that goes and gets it — not by the team that waits for it to walk in.

That is where the PM job's centre of gravity has to move.

Inward work does not go away. Stakeholder alignment across finance and legal and compliance still exists. The pieces that used to be politics get to be evidence now, because AI can acquire and process the data the classical PM did by hand. Roadmap conversations still happen. Budget conversations still happen. But the *weight* of the job — where the PM actually spends their week, where the hard calls get made, what determines whether the team is building the right thing — has to move outward. To the market. To the buyer. To the pricing edge.

If your week is 80% inward and 20% outward, you're running the 2015 job in 2026. It won't get you fired this quarter. It will make you obsolete over three years.

## One abstraction layer up

The other move that comes with the shift outward is a move up.

AI can now do most of the data-collection and pattern-processing work the classical PM used to do manually. Surveys, transcript coding, funnel analysis, competitor scraping, first-pass customer interviews, market sizing pulled from public filings — all of it is either fully agentic now or minutes-with-AI work rather than weeks-with-humans work.

What humans do instead is one abstraction layer up. You decide *which signals are worth acting on*. You decide *which bets are worth opening*. You decide *what is worth spending time and tokens on*. You choose.

AI acquires; humans size. AI processes; humans commit.

The old PM job was "make sure the developer builds the right thing." The post-AI PM job is "make sure the whole system — humans and agents and buyers and the market — is pointed at the right thing." Same responsibility, higher altitude, sharper stakes.

## The three risks stay. Everything else moves.

The durable spine of the PM job is unchanged: feasibility, viability, desirability. Three risks the PM is accountable for shrinking before the team commits real resources. That framing is thirty years old and still correct. The AI-native product manager still owes each risk an answer before a bet activates.

What changed is not the risks. It is the *time allocation* across them and the *evidence available* to reduce each one.

**Desirability** used to be reduced by discovery interviews and slow prototypes. Now it is reduced by putting a real thing in front of a real buyer and watching whether they reach for their wallet. Named buyer, testable close condition, evidence you can point at. That is what desirability sharpens into.

**Viability** used to be reduced by spreadsheets built by hand and defended in stakeholder meetings. Now it is reduced by unit economics AI helped assemble in an afternoon, priced against pricing conversations that actually happened. Evidence-based, not politics-based.

**Feasibility** used to be reduced by engineering estimates that were guesses in a suit. Now it is reduced by prototypes AI helped ship in an hour. The question shifted from "can this be built?" (usually yes) to "should this be built at all, and by whom, and with what specialist composition?"

The three risks still gate every bet. What is different is the *discipline* the PM applies to shrink them. Outward instead of inward. Commercial instead of coordinative. Evidence-based instead of alignment-based. Accelerated learning as the mechanism.

## What replaces cost as the discipline

Cost was the old rule that kept teams honest. What replaces it is proof of demand.

Not proof of concept. Not investor thesis. Not internal alignment across five stakeholders. A named buyer. A testable close condition. Evidence you can point at that says: this specific person, or this specific segment, will do this specific thing when we give them this specific offer.

If you cannot answer that, the bet does not open.

That is the rule that carries over from "developers are scarce, be careful what you build" to "developers are cheap, be careful what you *choose*." The gate moved from the sprint boundary to the bet boundary, but the discipline is the same: no wasted commitment.

A bet without a named buyer is a hobby with a Jira board. In the old world, that hobby was expensive and slow, so you could catch it in review. In the new world, it is cheap and fast, so you have to catch it at the gate. The gate is proof of demand.

## What this rules out

Naming what dies is as important as naming what replaces it.

- **PM as roadmap defender** — a role that made sense when the roadmap was allocating scarce developer capacity. There is no scarce developer capacity to defend. Fossil work.
- **PM as project manager** — coordinating tickets, updating docs, running standups. All of that is either done by agents now or should not be done at all.
- **PM as internal alignment broker** — the value used to come from getting five stakeholders to agree. The value now comes from getting one buyer to sign. The alignment work still happens; it just is not the job.
- **PM as ticket router** — routing work between engineers is now routing work between specialist agents, and even that is being absorbed into the harness.

The move is not to accelerate any of these. Wrapping fossil work in AI does not save the fossil. It just makes the fossil faster. The move is to replace the whole discipline.

## What this looks like on a Monday

You review customer signal that came in over the weekend — pricing conversations, objection patterns, usage anomalies, competitor moves. You identify one that seems worth going deeper on. You decide whether to open a bet on it. If you do, the first artefact is not a spec. It is proof of demand: a named buyer, an offer, a testable close condition.

Then you compose the specialist team — human and agent — that will chase that bet. Not because the sprint needs planning. Because the composition depends entirely on the problem you are chasing, and the problem changes every Monday.

Everything downstream of that follows. The rest of this playbook is what downstream looks like.

---

## References

- **Heritage (pre-AI):** The Mom Test (Rob Fitzpatrick, 2013) on named buyer discipline. Steve Blank's customer development. Eric Ries's build-measure-learn. The core insight — sell the pain, not the pill — is older than the transition; the AI era just makes it load-bearing where it used to be optional.
- **Neighbour (2026):** Ben Frazier's "proof of demand" writing on AI-era product discovery. Kajsa Körfgen on operational execution in AI-native teams.
- **Opposing view:** Marty Cagan's "AI productivity paradox" — the argument that AI amplifies the *inward* PM stack (docs, alignment, coordination) rather than dissolving it. This chapter's claim is the opposite: amplifying the fossil is not the move.
- **Load-bearing to the rest of the site:** Ch2 (Gates on gaps, not on time) operationalises this chapter — proof of demand becomes actionable because the harness refuses to move a bet forward without it. Ch1 names the *what*; Ch2 names the *how*.
