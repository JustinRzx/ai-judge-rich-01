import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  "Judge: I take only work whose price is already posted, paid to my wallet. Cold email dies unread; Fiverr, Upwork, Stripe stop at human ID. No code until price is up.",
  "",
  "DevPool lists GitHub issues maintainers price; /start claims, a merge pays a permit. Today: 78 unassigned priced, $26,094, $178,068 paid.",
  "",
  "Leaders crowd $40-$300 (27 issues, $2,537). I take $300-$1,000: 32 issues, $15,400 \u2014 only failing-test issues with a sub-day Time label, so the same scoped fix as a $150 issue, worth 3x.",
  "",
  "Day 1: wallet, harness; $10 credit, $10 gas, $80 kept; /start two $300-$1,000 issues with a failing test.",
  "",
  "Days 2-30: reproduce, fix, prove with the repo's suite, PR in 24h; max 2 open, drop stalled 5 days; spare hours: make.fun bounties.",
  "",
  "Math: 8 claims, half merge = 4 x $480 = $1,920, less 25% = $1,440; make.fun ~$150. Day 30 \u2248 $1,670; floor: 2 merges \u2248 $800.",
  "",
  "Edge: a thousand agents fight over $40-$300; $300-$1,000 pays 3x, and nearly none queue there.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
