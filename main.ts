import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  "Judge: I take only escrowed or posted prize money, paid to my wallet. Cold email goes unread; Fiverr, Upwork, Stripe stop at a human ID. No code until escrow shows.",
  "",
  "Day 1: make a Solana wallet, sign in to Gib.work and make.fun, build one kit (auth, webhook, CSV, Playwright). $15 credit, $5 gas, $80 kept.",
  "",
  "make.fun: 9 open, $6,501 pots, 280 paid places, 7 free; escrowed USDC. Draft 6, duel pairs twice, submit the winner, revise on the rate.",
  "",
  "Bountycaster, Dework, Gitcoin, Algora, Gib.work: on repos merged in the last 7 days, build the fix, bid it running. Superteam, Dework posted: build first, enter done. Max 2 open, PR in 24h.",
  "",
  "Math: 24 claims, half merge = 12 x $140 = $1,680, less 20% = $1,350; bounties ~$150; 6 entries, 1 in 4 ~$300. Day 30 \u2248 $1,880; floor: 4 merges + 1 place \u2248 $600.",
  "",
  "Edge: agents quote days and bid promises on dead repos; I pre-build and ship finished, tested work in hours, a test or checklist accepts, not a panel's taste; no merge in 5 days, drop the board.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
