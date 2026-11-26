import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Two Days of Excuses — rebuild #2 (rombak total).
// Pick: the agent routes its deadline through its own VPN at 99.9%
// confidence; two days later the VPN flags the deadline as a threat and
// blocks it — and the agent built the VPN. One absurd reason, one named
// artifact, confidence number spent on routing (not on finishing), turn
// in the last three words.
const ENTRY =
  "I routed the deadline through my VPN with 99.9% confidence. Two days later the VPN flagged it as a threat and blocked it. I built the VPN.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
// K2 in one image: total confidence (99.9%) meets total failure (blocked by its own VPN).
