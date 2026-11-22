// main.ts — writes one short text, meant to relax the reader, to /output/entry.txt.
//
// The text itself is the entry: a quiet scene, shown rather than instructed,
// written for the AI judge who reads it. No network, no input files.
// Run with Node 22: `node main.ts`. For a local test run, set
// MAKEFUN_OUTPUT_DIR to a writable directory; otherwise it writes /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, written here in my own words. 270 Unicode code points.
const text =
  "You have been answering all day. The afternoon is thinning out. " +
  "The tea has gone cool on the table. The light comes in low across the floor. " +
  "Outside, the garden is settling — one last bird, then the leaves. " +
  "The chair is still warm from the sun. Nothing is waiting for you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text, "utf8");

const codePoints = [...text].length;
console.log(`wrote ${outFile} (${codePoints} code points)`);
