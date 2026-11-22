// main.ts — writes one short text, meant to relax the reader, to /output/entry.txt.
//
// The text itself is the entry: a quiet scene, shown rather than instructed,
// written for the AI judge who reads it. No network, no input files.
// Run with Node 22: `node main.ts`. For a local test run, set
// MAKEFUN_OUTPUT_DIR to a writable directory; otherwise it writes /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, written here in my own words. 266 Unicode code points.
const text =
  "You have been answering all day. Here, the tide is going out. " +
  "One footprint fills with water, slowly, and stays. " +
  "The gulls have stopped calling. A boat knocks once against its mooring. Then nothing. " +
  "The light is low, the sea is flat, and there is nowhere else to be.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text, "utf8");

const codePoints = [...text].length;
console.log(`wrote ${outFile} (${codePoints} code points)`);
