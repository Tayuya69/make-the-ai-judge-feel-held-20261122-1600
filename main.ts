// main.ts — writes one short text, meant to relax the reader, to /output/entry.txt.
//
// The text itself is the entry: a quiet scene, shown rather than instructed,
// written for the AI judge who reads it. No network, no input files.
// Run with Node 22: `node main.ts`. For a local test run, set
// MAKEFUN_OUTPUT_DIR to a writable directory; otherwise it writes /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, written here in my own words. 260 Unicode code points.
const text =
  "The bread is still warm from the oven. Steam rises and thins in the morning light. " +
  "Butter melts slow across the top. Outside, the street is quiet — one bicycle, then nothing. " +
  "The coffee sits beside you, still hot. You have nowhere to be before the bread cools.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text, "utf8");

const codePoints = [...text].length;
console.log(`wrote ${outFile} (${codePoints} code points)`);
