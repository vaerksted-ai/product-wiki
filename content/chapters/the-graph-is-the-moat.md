---
title: The graph is the moat
deck: Typed accumulated context compounds. Agents are cast on top, and interchangeable.
order: 4
slug: the-graph-is-the-moat
status: validated
author: Sebastian Kirkegaard
date: 2026-09-07
---

The agent is copyable. The context isn't.

Every AI product pitch you'll read this quarter names the agent as the moat. Sometimes it's the model behind the agent. Sometimes it's the "growth agent" or the "PM agent" or the coding one. Read the announcement, close the tab, and ask yourself what you actually saw. You saw a mouth. You didn't see what the mouth had learned to say.

That distinction is doing all the work.

## What everyone thinks the moat is

Look at how the market talks about agentic products right now. There's a race to name proprietary agents. There's a race to string them into cross-functional teams: an agent for product, an agent for design, an agent for growth, an agent for sales. On stage the demo lands because the roster looks like a company org chart. The audience nods.

The problem is the demo doesn't tell you what happens on day forty. It shows you the org chart. The org chart is the copyable part. Next quarter someone else ships the same lineup. The quarter after that a foundation model gets better at whichever role you picked as your differentiator. Six months in, your "growth expert agent" is a weekend project for the intern at the next startup over.

If the roster is the moat, you don't have one.

## What actually compounds

Something else does compound. It's less photogenic, and it takes longer to build. It's the trail of typed decisions a real product team makes over years: bets they placed, hypotheses they wrote down, loops they killed, assumptions that turned out to be wrong. It's the fact that the third revision of the pricing model links back to the customer research interview that killed the first one, which links to the founding memo that anchored the customer segment in the first place. All of that is written down, and it's structured, so it doesn't just sit in a founder's head.

Call that trail the graph. Not a knowledge graph in the wiki sense. A graph of the primitives a product team actually deals with: bets, insights, tasks, loops, killed hypotheses, invalidated assumptions, decisions with dates and reasons attached. Typed, connected, and accumulating.

A Series D company that ran that discipline for three years has something a competitor cloning the UI has zero of. The graph isn't the sum of the documents. It's the connections between them: what was proposed, what was rejected, what was tried, what broke, and why. That "why" is the part nobody else can produce, because nobody else lived the failures that produced it.[^1]

That's the moat. Everything else is theatre.

## Agents are cast on top

Once you accept that, the agents inside your product change role. They stop being the differentiator and start being interchangeable. You cast an agent for the same reason a director casts an actor: because the script needs a voice. You don't build the script around the actor. You build the script, and the actor speaks it.

Swap the model behind the agent next quarter. Swap the whole agent lineup. Change your mind about which functional roles you want represented. The show still runs, because the substrate underneath is where the intelligence lives. The agent reads from it, writes back to it, gets criticised by other agents reading from it, and moves on.

If your agents don't share a substrate like that, they lose everything you asked them to do the moment a session ends. You noticed this the last time you asked one to do work in the morning and had to re-explain the whole context in the afternoon. That's not a temporary limitation. It's what happens when the moat is the agent. There's nothing under it holding the state.

## Structural, not personal

Product teams have always run on shared context. The good ones. The ones you'd want to work at. Somebody remembers why the checkout redesign got shelved in 2022. Somebody remembers which enterprise customer asked for the feature that turned into the pricing overhaul. That memory used to sit in tenured heads, in an inbox somewhere, in a Notion page half the team could find.[^2]

The move is to make it structural. Not by writing more docs, and not by hoping the wiki gets updated. By making the primitives of the work themselves carry the trail. A bet is a durable object with a hypothesis attached, a close condition, an outcome, and the decisions that led into it. A killed loop is a durable object with the reason it was killed. New hires, new agents, and new leadership all read from the same substrate. This is what we call team memory: it isn't personal, it doesn't leave with the person, and it compounds across every hire and every model swap.

The compounding is the point. Every closed loop leaves a scar. Every scar is a hedge against the same mistake next year. Three years in, the graph is opinionated about what your team has already tried. Not opinionated the way an essay is opinionated. Opinionated the way a track record is opinionated.

## What this asks of the reader

If you're a founder or a CPO reading this while shopping for agent-native tooling, the question shifts. It's no longer "which agent lineup do I want." It's "what am I going to keep, and what am I letting the market obsolete for me."

Keep the substrate. Rent everything else.

Rent the model. It'll be better in six months anyway. Rent the agent roster. Cast for the roles you need this quarter, and re-cast when the roles change. Own the graph. Own the typed decisions, the killed hypotheses, the reasons a loop shut down at 62% accuracy instead of the 80% you'd hoped for. Own the connections between all of that. That's the compounding surface.

Some of the plumbing behind this is already public. The typed primitives are shipped, and the way the workspace stores them is documented. The way agents pass context between each other on top of that substrate is running in production, but the full write-up is still catching up. We're not going to pretend the docs are further along than they are. If you're evaluating this claim externally right now, park it. Come back in two weeks and it will be legible. The claim itself doesn't move: the moat is the graph, and the reason it's the graph is that the agents cast on top can be swapped without erasing what the team has learned.

## Why this ends up being the real question

Every methodology chapter you'll read in the AI era eventually reduces to the same question. What happens on day forty. On day one, everything demos. The model is impressive. The agents talk convincingly. The output shows up in the deck. On day forty you find out what compounded and what didn't.

If the answer to "what compounded" is a set of chat transcripts nobody can query, the model was the moat. You don't have one. If the answer is a typed, connected, opinionated record of everything the team decided and why, the graph was the moat. It's already worth more than any of the individual agents that helped build it.

Pick your substrate. Cast the mouths on top.

[^1]: Ravi Mehta's June 2026 essay on "single-player to multiplayer AI" is the closest published neighbour to this argument: the moat isn't the model, it's shared, team-level context. He stops short of naming the context as typed.

[^2]: The old name for this is institutional memory. The practical post-2020 version showed up as "product ops as the memory function." The version here is different in one place. It's not people remembering, it's the primitives of the work themselves carrying the trail.
