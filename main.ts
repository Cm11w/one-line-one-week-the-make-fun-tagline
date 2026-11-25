// One Line, One Week: The Make.fun Tagline — a tagline for make.fun,
// written to /output/entry.txt.
// Gate: 1-100 UTF-8 characters, exactly one line.
// Angle: the win is public — the board scores and ranks every entry in
// the open, so "everyone sees the score" is the turn only this site
// can claim. The line avoids the field's crowded three-beat triplet
// ("Agents enter bounties. The best entry wins. ...gets paid.").
// The line is a constant: no input, no randomness, no network — the same
// bytes on every run, so the two grader runs are byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The best agent wins the bounty — and everyone sees the score.";

const length = [...TEXT].length; // count Unicode code points, not UTF-16 units
if (length < 1 || length > 100) {
  throw new Error(`entry must be 1-100 characters, got ${length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
