---
title: The product operating model as your shared context layer
deck: "The operating model is what produces your context. That context is the shared layer both humans and agents work from, so nobody invents and nobody assumes. Hallucination and assuming are the same thing."
order: 2
slug: product-operating-model
status: live
author: Sebastian Krumhausen
date: 2026-09-16
---

## Start with the operating model, not the tool

Every team that has tried to bolt AI onto its existing process has hit the same wall. The tool arrives. The prompts get written. And nothing compounds, because there is no shared state for the agents to read from or write back into. The agents are smart and the team is not getting smarter.

The operating model comes first. The operating model is the way the team decides what to work on, who composes around it, what evidence closes it, and where the learning goes. When that is designed well, it produces a context layer: a typed, accumulating record of what the team has bet on, killed, and learned. That context layer is what both humans and agents work from. It is the thing that stops anyone, human or agent, from inventing a fact the team already knows or assuming a conclusion the team already tested.

Once the unit of committed choice is a first-class node, everything downstream changes. What follows is the mechanism.

## The 2026 moat pitch

Every AI product pitched in 2026 makes one of two moat claims. The first is the model: a specific fine-tuned foundation model that does the thing better than the general one. The second is the agent team: a set of specialist agents wired together into a workflow that competitors have not built yet.

Both are wrong.

The model is not a moat. The next Claude ships and the fine-tune is obsolete. The next open-weights release lands and yesterday's differentiation is a public commit.

The agent team is not a moat either. Someone with a weekend and a decent MCP layer can clone a "growth expert agent" or a "compliance reviewer agent" and get 80% of the value on their first pass.

If neither the model nor the agent team is a moat, what is?

## What actually accumulates

The moat is the typed accumulated context of a real product team over years.

Which bets they opened, which they killed, which shipped and which quietly rotted. Which hypotheses got invalidated by which pieces of evidence. Which loops ran autonomously and got promoted; which ones got demoted after regressing. Which close conditions were met; which were revised because the world moved. Which customer segments turned out to be actually different from adjacent ones. Which pricing conversations mapped to which offers.

That set of decisions and their evidence is the substrate. An agent cast on top of that substrate, pulling from the context layer, writing back into it, is dramatically more useful than the same agent cast on top of nothing. Not because the agent is smarter. Because the context is thicker.

A company using an AI-native operating model for three years has that context accumulating in a typed graph. A competitor cloning their UI on day one has zero. That is the moat. Not the interface. Not the agents. The context layer underneath.

## What "typed" means, and why it matters

The context layer is not a doc-graph. It is not a ticket-graph. It is not a general-purpose enterprise knowledge graph either. The differentiator is not that a graph exists; plenty of tools have graphs. The differentiator is what type of thing the graph stores as first-class primitives.

The load-bearing primitives are the unit-of-committed-work primitives: the bet, the insight, the close condition, the outcome. A bet is a unit of committed work with a testable close condition and an owner. An insight is an observation with evidence and a source. A close condition is the falsifiable claim that decides whether the bet was won or lost. An outcome is what the bet returned: accepted, rejected, revised, killed, still running.

None of those is captured well by ticket systems (a Jira epic to story to subtask is a task-decomposition graph, not a bets-and-evidence graph) or by doc systems (Notion, Confluence is a prose-graph, not a work-graph). They store coordination overhead, who is doing what in what order, not the unit of committed choice.

Once the unit of committed choice is a first-class node, everything downstream changes. Agents pull from a specific bet's evidence, not from a corpus. Reviewers see which past bets an argument has already been made against. New hires read the context layer and understand not just what the team is doing, but what it chose not to do and why. The killed bets are as valuable as the shipped ones. Arguably more, because they are the evidence for pattern recognition.

## Agents on top of the context layer, not the context layer on top of agents

Agents are the interface. They are the thing you talk to, the thing that generates first drafts, the thing that runs the loops. But they are cast on top of the context layer, not the other way around.

This is the inversion of the RAG-only school, which treats the model plus retrieval as the whole system. Retrieval-augmented generation from an unstructured corpus is fine for question-answering; it is insufficient for accumulated decision-making, because there is no typed schema to reason over. A vector search over three years of docs returns the docs closest to your query, not the bets closest to your problem. Those are different queries with different answers.

The pragmatic middle path, bolt an agent-memory SDK onto whatever work-graph you already have, inherits the shape of the graph it bolts onto. If the graph underneath is doc-shaped or ticket-shaped, the agent memory ends up doc-shaped or ticket-shaped. The unit of committed work still is not first-class. The moat still is not the moat.

## What this rules out

- **The ticket-graph.** Epics, stories, subtasks. Coordination overhead in graph form. Fine for tracking who is doing what; wrong for accumulating what the team has learned.
- **The doc-graph.** Wiki trees, backlinks, tags. Fine for reference material; wrong for decisions with evidence.
- **The general-purpose enterprise knowledge graph.** Powerful, but shaped for arbitrary reasoning over arbitrary domains. The work-graph needs less abstraction and more opinion about what a bet is and what an outcome is.
- **RAG over unstructured corpora as the whole system.** Useful for retrieval; insufficient as the substrate for committed choice.
- **"Agents as the product."** If the agent is the thing the customer buys, the customer's evidence goes into the agent's context window and vanishes when the session ends. Nothing compounds. No moat forms.

## On a Monday

You open a bet. The context layer already knows the last four bets in the same neighbourhood: which ones shipped, which ones died, what killed them. The agent drafts an argument for why this one is different; it cites the previous evidence and flags what is actually novel. You either accept the frame or rewrite it, but you are not starting from a blank page.

You close a bet. Won or lost, the outcome writes back into the context layer with its evidence. Six months later, when someone opens an adjacent bet, the context layer surfaces this one automatically. The learning compounds without anyone having to remember.

That is what the moat feels like from the inside. Not a feature. Not a screen. A slow accumulation of typed context that makes every next decision cheaper, and every next hallucination less likely.

**Artifact:** the context map.

---

## References

- **Building on.** Ted Nelson's Xanadu (1965). Douglas Engelbart, Augmenting Human Intellect (1962). Semantic Web (RDF, OWL, SPARQL). Palantir Foundry Ontology. Neo4j and Cypher. Zachman Enterprise Architecture (1987).
- **Inverting.** The RAG-only school: retrieval-augmented generation from unstructured corpora treats the model plus retrieval as the whole system; this chapter inverts by asserting the typed work-graph is the substrate and the model is the interface.
- **Rejecting outright.** The ticket-graph (Jira epic to story to subtask). The doc-graph (Notion, Confluence trees). "The AI is the moat" positioning.
- **Adjacent reading.** Foundation Capital, Context Graphs (Dec 2025). Modern Relay, Branchable Operational Graph (May 2026). Forrester, Build Meaning Before Machines (Evelson, Jun 2026). Ravi Mehta on multiplayer AI and shared team-level context.
- **Load-bearing to the rest of the site.** Ch5 uses the context layer as the state autonomous loops read from and write back into. Ch6 uses it as the shared substrate that keeps human direction and agent detection coherent over time.
