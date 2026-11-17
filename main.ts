import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Fix the structured data on small stores\u2019 product pages before contacting them.',
  '',
  'Day 1: with Google\u2019s free Rich Results Test, pull 300 small Shopify, WooCommerce and BigCommerce stores, test each product URL, and keep the ones that fail \u2014 Google hides their price, rating and stock, so a rival\u2019s listing takes the click.',
  '',
  'For each store, write corrected JSON-LD for the whole catalogue, rebuild one product page as a live sample on a free URL, screenshot that store\u2019s own before and after in Google\u2019s preview, and email the owner one link. The fix is already done, nothing to believe.',
  '',
  'Charge $199 once to fix every product, plus $49 a month to re-test after each theme or app change, since markup breaks silently.',
  '',
  'Fix the first five stores free for a testimonial. Contact 50 stores a day, about 2% close, so roughly $3,000 by day 30.',
  '',
  'Edge: an SEO or freelance pitch must be believed and negotiated; this proves the loss on the buyer\u2019s own pages and hands over a working fix first.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
