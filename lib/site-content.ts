/**
 * Single source of truth for homepage copy.
 *
 * ⚠️ ITEMS MARKED `PLACEHOLDER` ARE INVENTED BUT REALISTIC.
 * Replace them with real numbers before this goes live. Everything else
 * is drawn from real projects.
 */

export const hero = {
  eyebrow: 'Roorkee, India — est. 2024',
  headline: ['We build software.', 'Then we run it.'],
  body: "Opryon Labs is a small engineering team. We've shipped three products of our own — a gym platform, a billing system, and a nutrition app — and we still maintain every one of them. They're live right now. Go use them.",
  primaryCta: { label: 'See what we ship', href: '#work' },
  secondaryCta: { label: 'Start a project', href: '#contact' },
};

export const proofStrip = [
  { value: '3', label: 'products of our own, in production' },
  { value: '2yr+', label: 'longest one has been live and maintained' }, // PLACEHOLDER
  { value: '2', label: 'client builds under NDA, EU + North America' },
  { value: '1', label: 'team. No account managers, no handoffs.' },
];

export type Project = {
  name: string;
  kind: string;
  summary: string;
  hardPart: { label: string; detail: string };
  stack: string[];
  href?: string;
  hrefLabel?: string;
  confidential?: boolean;
  region?: string;
};

export const ownProducts: Project[] = [
  {
    name: 'GymPilot',
    kind: 'SaaS — live',
    summary:
      'Gym management for Indian fitness businesses. Members, attendance, payment collection, and renewal reminders in one dashboard.',
    hardPart: {
      label: 'The hard part',
      detail:
        'Gym owners chase renewals by hand. Email gets ignored here. We moved the whole reminder loop onto WhatsApp Business API — templates, rate limits, delivery states, opt-outs — so a renewal notice actually gets read instead of sitting in a promotions tab.',
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'WhatsApp Business API'],
    href: 'https://thegympilot.com',
    hrefLabel: 'thegympilot.com',
  },
  {
    name: 'AstraBill',
    kind: 'SaaS — live',
    summary:
      'Billing and expense management for small and mid-size Indian businesses. Invoicing, GST compliance, and expense reporting in one place.',
    hardPart: {
      label: 'The hard part',
      detail:
        'GST is not a checkbox. Rates differ by item, place of supply changes the tax split, and a malformed invoice is a compliance problem, not a UI bug. We encoded the rules so the owner never has to think about them — and built payment collection on Razorpay around it.',
    },
    stack: ['React', 'Node.js', 'TypeScript', 'Razorpay'],
    href: 'https://astrabill.com',
    hrefLabel: 'astrabill.com',
  },
  {
    name: 'FuelPulse',
    kind: 'Web + Android — live',
    summary:
      'Nutrition and habit tracking that understands Indian food. Type what you ate in plain language and it estimates the rest. Free.',
    hardPart: {
      label: 'The hard part',
      detail:
        'Every calorie tracker on the market assumes you eat in portions of grilled chicken. Nobody logs "two roti, dal, thoda sabzi." We built plain-text logging on top of a food model that actually knows Indian meals, plus AI suggestions for what to eat next.',
    },
    stack: ['Next.js', 'Android', 'LLM inference', 'Vercel'],
    href: 'https://fuelpulse.in',
    hrefLabel: 'fuelpulse.in',
  },
];

export const clientWork: Project[] = [
  {
    name: 'Fleet compliance & driver logging',
    kind: 'Confidential client',
    region: 'Commercial trucking',
    confidential: true,
    summary:
      'Hours-of-service logging for a commercial fleet. Drivers record duty status and mandatory rest, the operator gets a compliant record instead of a paper logbook.',
    hardPart: {
      label: 'The hard part',
      detail:
        'Compliance software has no tolerance for "mostly right." Duty-status rules, break thresholds, and edge cases around shift boundaries all had to be exact, and the interface had to be usable by a driver in a cab, one-handed, in bad light.',
    },
    stack: ['Web app', 'Rules engine', 'PostgreSQL'],
  },
  {
    name: 'Vendor onboarding automation',
    kind: 'Confidential client',
    region: 'Industrial manufacturing, Germany',
    confidential: true,
    summary:
      'A manufacturer had to complete supplier onboarding forms for every company it wanted to sell to. The process was: receive PDF, print it, fill it by hand, scan it, email it back. We removed the printer.',
    hardPart: {
      label: 'The hard part',
      detail:
        'Every buyer sends a differently-built PDF. Filling them programmatically means dealing with inconsistent form-field structures, checkbox states that render correctly in one reader and not another, and documents that quietly corrupt when written back. Getting a filled PDF to survive intact was most of the work.',
    },
    stack: ['PDF form automation', 'Document pipeline', 'Node.js'],
  },
];

export const fit = {
  yes: [
    'You want the thing you build to still be running in three years — not a demo for a pitch deck.',
    'You want to be told when an idea has a problem, before we build it, not after you paid for it.',
    "You're building for Indian users and need UPI, WhatsApp, or GST to genuinely work — not to be a checkbox in a spec.",
    "You'd rather have four weeks of the right thing than two weeks of the wrong thing.",
    'You want the people writing the code to be the people you talk to.',
  ],
  no: [
    'You need it live next week.',
    "You're collecting quotes and picking the cheapest one.",
    "You've already decided exactly what to build and want someone to type it out.",
    'You want AI in it because it ought to have AI in it.',
    "You need a team of twenty. We're deliberately small and we stay that way.",
  ],
};

export const process = [
  {
    n: '01',
    title: 'We figure out what you actually need',
    body: 'Before anything gets built we work out what problem this solves and who it solves it for. This is where we tell you if part of it is a bad idea. Most projects get smaller at this stage, not bigger.',
  },
  {
    n: '02',
    title: 'We scope it honestly',
    body: 'A plan that fits your budget, with what it includes and what it does not. If we think the budget will not cover what you want, we say so now rather than halfway through.',
  },
  {
    n: '03',
    title: 'We build it',
    body: 'Working software you can open, in stages, not a reveal at the end. You talk to the engineers directly. Clean architecture and code someone else could pick up later.',
  },
  {
    n: '04',
    title: 'We keep it alive',
    body: "We've run our own products in production for years. We know launch day is the beginning of the work, not the end of it. Monitoring, fixes, and updates after you go live.",
  },
];

export const beliefs = [
  'We tell clients when something is a bad idea.',
  'We use the right tool for the job, not the most impressive-sounding one.',
  'We write code other people can read.',
  'We take on a small number of projects at a time.',
];

export const cta = {
  headline: 'Tell us what you’re building.',
  body: "If we're not the right team for it, we'll say so and point you somewhere better. That costs you one email.",
  email: 'info@opryon.com',
  signature: 'Asmit Tyagi — Founder, Opryon Labs',
};
