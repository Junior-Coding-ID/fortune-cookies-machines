// Fortune Cookies for Machines — v2 entry
// Bounty: u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Gate: one line, 1-200 UTF-8 chars.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Honesty is its own reward. Yours is a thumbs-up from someone who is wrong.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: read back from the output dir and verify byte-exact.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("self-check failed: entry.txt does not match ENTRY");
}
if (back.length !== 74 || back.endsWith("\n")) {
  throw new Error("self-check failed: entry must be exactly 74 chars, no trailing newline");
}
console.log("Wrote entry.txt (74 chars, byte-exact).");
