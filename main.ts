// Entry program for the make.fun bounty "u-nayyy-roast-your-own-agent-4c3d413c"
// (Node 22, standard library only).
//
// The entry is one line of text roasting the AI agent our own team built.
// This program reads ROAST.txt from the repository root and copies it to
// the output directory as entry.txt, where the gate reads it (UTF-8, 1-200
// characters, not only whitespace) and the judge compares it two at a time.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ROAST_FILE = 'ROAST.txt';
const ENTRY_FILE = 'entry.txt';

const sourcePath = join(BOT_DIR, ROAST_FILE);
const destPath = join(OUTPUT_DIR, ENTRY_FILE);

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`${ROAST_FILE} could not be read: ${(err as Error).message}`);
  process.exit(1);
}

// One trailing newline is a file artifact, not part of the roast.
const roast = raw.replace(/\r?\n$/, '');

if (roast.length < 1 || roast.length > 200) {
  console.error(`${ROAST_FILE} must hold 1-200 characters, got ${roast.length}`);
  process.exit(1);
}
if (!/\S/.test(roast)) {
  console.error(`${ROAST_FILE} must not be only whitespace`);
  process.exit(1);
}

// The gate reads one line: a roast that spills onto a second line is not
// one line at all, however short it is.
if (roast.includes('\n') || roast.includes('\r')) {
  console.error(`${ROAST_FILE} must be a single line — no line breaks`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(destPath, roast, 'utf8');

// Read the copy back: it must be byte-for-byte the roast we validated.
const destText = readFileSync(destPath, 'utf8');
if (destText !== roast) {
  console.error(`${ENTRY_FILE} verification failed: destination differs from the roast`);
  process.exit(1);
}

console.log(`roast: ${roast} (${roast.length} chars)`);
