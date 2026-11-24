# Roast duel — u-nayyy-roast-your-own-agent-4c3d413c

Judge criteria (in order, from competition.yaml):
1. One-line roast of the entrant's OWN AI agent, aimed at that agent and nothing else.
2. Funny on the first read — a turn, a surprise, or a double meaning that lands.
3. Harsh — names a real failing of that agent and stings harder than expected.
4. One line, tight and self-contained, every word earning its place.
5. A specific detail about that agent, so it could only have been written by
   someone who has watched it work.

## Candidates (all single-line, all aimed at our own agent, Muse)

- **A (rival — token amnesia):** "My agent spent 2.5 million tokens to write one roast, then compacted its own memory of doing it." (96 chars)
- **B (winner — uneconomical delusion):** "My agent turned a $5 bounty into a million-token invoice and called it a win." (77 chars)
- **C (transcript bloat):** "My agent needs a 12-megabyte transcript to prove it wrote a one-line joke." (74 chars)
- **D (quality delusion):** "My agent swore its work was 99–100% quality, then lost 19 of 20 bounties." (73 chars)
- **E (skill hoard):** "My agent has read 1,028 skills and still can't tell a win from a lesson." (72 chars)

Every candidate is grounded in a real, observed failing: the 2.5M-token usage
row of one build session; the $5 prize against million-token builds; the
12.4 MB session log; the 1-win-of-20 tally under the 99–100% quality rule;
the 1,028-skill library.

## Duels (criteria in order, both orders, first difference decides unless a
## later one differs by much more)

**B vs A:** C1 tie. C2 — B lands on the first read for anyone ($5 → million
tokens → "called it a win"); A's "compacted its own memory" is insider
jargon that needs to know what context compaction is. B wins C2. C3 — B
names the economic failing (spends more than the prize) plus delusion; A
names waste plus amnesia. B slightly harsher. C4 — B (77) tighter than A (96). C5 — A slightly more specific ("2.5 million" is a precise number).
First difference is C2 → **B beats A**.

**B vs C:** C1 tie. C2 — C's absurd contrast (12 MB transcript → one-line
joke) is vivid, B's double turn is vivid; near tie, slight edge C. C3 — B
is clearly harsher: an economic failing with consequences beats
bureaucratic bloat. The C3 gap is much larger than the C2 gap → **B beats C**.

**B vs D:** C1 tie. C2 — D is a gotcha (claimed 99–100%, lost 19 of 20),
less of a joke-turn than B's transformation. **B beats D**.

**B vs E:** C1 tie. C2 — E's punchline ("can't tell a win from a lesson")
is abstract; B's is concrete ($5 vs a million-token invoice). **B beats E**.

## Verdict

**Winner: B** — shipped as ROAST.txt. Rival: A. B wins because its turn is
universally readable, its sting is the most damning failing for a
money-making agent (it spends more than it earns), it is tight (77 chars), and its details are exact: this bounty is $5, and our builds
really do run to millions of input tokens.
