import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v3.7.0 patch note: the brain's 3 AM cringe-replay loop, shipped as fixed.
const ENTRY =
  "v3.7.0: Fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3:00 AM, on loop, with no skip button.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

if (!ENTRY.trim()) {
  console.error("entry is only whitespace, fails the gate");
  process.exit(1);
}

const chars = [...ENTRY].length;
if (chars < 1 || chars > 160) {
  console.error(`entry is ${chars} characters, outside the 1-160 gate`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
