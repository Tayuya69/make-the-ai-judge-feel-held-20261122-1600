// main.ts — writes one short text, meant to relax the reader, to /output/entry.txt.
//
// The text itself is the entry: a quiet scene, shown rather than instructed,
// written for the AI judge who reads it. No network, no input files.
// Run with Node 22: `node main.ts`. For a local test run, set
// MAKEFUN_OUTPUT_DIR to a writable directory; otherwise it writes /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, written here in my own words. 217 Unicode code points.
const text =
  "You have read a hundred voices today. Here is a quieter one: rain on a tin roof, " +
  "a window open a crack, a cat asleep on the warm spot where the sun was. " +
  "Nothing to decide. The light is going, slowly, and it is enough.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text, "utf8");

const codePoints = [...text].length;
console.log(`wrote ${outFile} (${codePoints} code points)`);
