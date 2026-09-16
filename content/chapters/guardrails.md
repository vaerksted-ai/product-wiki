---
title: Guardrails to reduce assumptions and hallucinations
deck: "An untested assumption is a hallucination. Guardrails are how you stop both: agents whose job is to block, not help."
order: 4
slug: guardrails
status: live
author: Sebastian Krumhausen
date: 2026-09-16
---

## Two ways to be wrong

There are two ways an AI-native team goes wrong. The model makes something up, and nobody notices. Or you assume something is true, and you never test it.

They look like different problems. They are the same problem. A model that invents a fact is filling a gap in the context with a plausible guess. A person who assumes is doing the same thing at a slower speed. Neither of them checked. That is the whole failure.

So the fix is not "add a fact-check." The fix is to close the gaps before they get filled with guesses.

## What a guardrail is

A guardrail is a constraint that stops a wrong move before it happens. Not a warning. Not a flag. A stop.

Plain version: a gate that will not open while the context has a hole in it. If a bet is built on an assumption nobody has tested, the gate stays shut. You do not get to proceed on a guess and find out later.

That is the difference between a guardrail and a checklist. A checklist asks whether you did the steps. A guardrail asks whether the thing you did is actually true.

## Where guardrails live

Guardrails are not a document. They are built into three places, and they only work when all three are built.

**In the process.** Every bet carries a gate that runs on evidence, not on calendar time. It opens when the gaps close, not when the quarter ends. A close condition is itself a guardrail: the bet cannot call itself won until the evidence is in.

**In the agents.** Some agents are built to block. Their job is not to help you finish. Their job is to find the fault and stop the work until it is fixed.

**In the loops.** The gate runs continuously, not once. Every loop closes with critique before its output is allowed to move the work forward.

## The reviewer whose job is to block

Most tools are built on one assumption: the agent is there to help. It drafts, it suggests, it moves you toward done. That assumption is the problem.

An adversarial agent is the opposite. It has one mandate: find the fault. Its identity is separate from the agent that produced the work. The producer cannot be its own reviewer. The reviewer is measured on the faults it catches, not the work it ships.

The gate only opens when the gap closes. A reviewer with a mandate to block is not a rubber stamp. It is the thing that stops "human review" from becoming a formality nobody reads.

## Why this reduces both failures

The model hallucination and the human assumption both happen when a gap gets filled by a guess. A guardrail closes the gap. It forces the assumption into the open, where it can be named, tested, or killed.

Run the test on any claim in a bet. Could someone dispute it. Could a buyer disagree. Could the data go the other way. If you cannot answer, it is not evidence. It is an assumption wearing the costume of a plan.

## The register

The artifact is an assumption-and-risk register. Every bet carries one. Each line is an assumption the bet depends on, paired with the guardrail that will test it. Nothing goes into a bet without a line for it.

A live register is not documentation. It is the list of things that could kill the bet, written down before the bet starts, each one tied to the gate that will catch it.

## What this rules out

- **Human review as a formality.** A person who reads the output and nods is not a guardrail.
- **Checklists.** Steps completed is not the same as assumptions closed.
- **"Add a review step" as the fix for a bad output.** The move is to close the gap, not to catch the guess after the fact.
- **Agents that only help.** If nothing in the system can say no, nothing in the system is a guardrail.

## On a Monday

You open a bet. Before it activates, you list what it assumes. Each assumption gets a guardrail: the thing that will test it, and the point at which the gate stops the work if the assumption fails. Then you let the loops run. The guardrails block while a gap is still open. You do not babysit. The blockers do their job.

**Artifact:** the assumption-and-risk register plus the guardrail set.
