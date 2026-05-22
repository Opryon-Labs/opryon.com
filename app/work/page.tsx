import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Case studies and products built by Opryon Labs — GymPilot, AstraBill, FuelPulse, and more. See how we design and ship AI-powered applications.',
  alternates: {
    canonical: 'https://www.opryon.com/work',
  },
  openGraph: {
    title: 'Our Work | Opryon Labs',
    description:
      'Case studies and products built by Opryon Labs — GymPilot, AstraBill, FuelPulse, and more.',
    url: 'https://www.opryon.com/work',
  },
};

const caseStudies = [
  {
    name: 'GymPilot',
    tagline: 'Gym Management + WhatsApp Automation for Indian Fitness Businesses',
    url: 'https://thegympilot.com',
    label: 'thegympilot.com',
    category: 'SaaS Product',
    accent: '#00f0ff',
    status: 'Live',
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'WhatsApp Business API', 'Razorpay', 'Vercel'],
    problem:
      'Gym owners in India were managing members, attendance, and fees through WhatsApp groups and Excel sheets — slow, error-prone, and impossible to scale.',
    solution:
      'A purpose-built SaaS that handles the entire member lifecycle: registration, attendance tracking, fee collection (UPI + cash), and automated WhatsApp reminders for renewals and dues.',
    outcome: [
      'Handles thousands of member check-ins per month',
      'Automated WhatsApp messages eliminate manual follow-up',
      'Pricing starts at ₹199/month — accessible for any gym',
      '4–5x higher engagement vs email-based reminders',
    ],
  },
  {
    name: 'AstraBill',
    tagline: 'Automated Billing & Expense Management for Indian SMBs',
    url: 'https://astrabill.com',
    label: 'astrabill.com',
    category: 'SaaS Product',
    accent: '#00ff88',
    status: 'Live',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Razorpay', 'AWS'],
    problem:
      'Small and mid-size Indian businesses struggled with manual invoicing, GST filing chaos, and zero visibility into expenses. Most were still using Tally or Excel for billing.',
    solution:
      'A clean, modern billing and expense management tool designed for Indian compliance requirements. GST-ready invoices, automated recurring billing, payment tracking, and expense categorization in one place.',
    outcome: [
      'GST-compliant invoice generation in under 30 seconds',
      'Automated payment reminders reduce follow-up time by 60%',
      'Real-time expense dashboard replaces scattered spreadsheets',
      'Razorpay integration for one-click online payment collection',
    ],
  },
  {
    name: 'FuelPulse',
    tagline: 'AI Nutrition Tracker Built for Indian Food',
    url: 'https://fuelpulse.in',
    label: 'fuelpulse.in',
    category: 'Mobile + Web App',
    accent: '#a855f7',
    status: 'Live',
    stack: ['Next.js 15', 'TypeScript', 'OpenAI API', 'Vercel', 'PostgreSQL'],
    problem:
      'Existing calorie trackers don\'t understand Indian food. Searching for "dal makhani" or "aloo sabzi" in MyFitnessPal returns no results or wildly inaccurate data. Indian users were simply not tracking.',
    solution:
      'An AI-powered nutrition logger where you describe your meal in plain text — "had dal chawal and one roti for lunch" — and the AI estimates calories, protein, carbs, and fat automatically. Free forever.',
    outcome: [
      'Understands 500+ Indian dishes out of the box',
      'Natural language input — no barcode scanning needed',
      'Habit tracking integrated with nutrition logging',
      'Free tier with unlimited logging, no paywall on core features',
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-neutral-dark/20 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">Our Work</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Products we&apos;ve{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00f0ff 0%, #00ff88 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              shipped
            </span>
          </h1>
          <p className="text-xl text-neutral max-w-2xl">
            From idea to production — real products solving real problems for real people in India and beyond.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 space-y-24">
        {caseStudies.map((cs, index) => (
          <article key={cs.name} className="group">
            {/* Project Header */}
            <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ color: cs.accent, background: `${cs.accent}12` }}
                  >
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-green-400 border border-green-400/20 px-2 py-0.5 rounded bg-green-400/5">
                    ● {cs.status}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{cs.name}</h2>
                <p className="text-neutral mt-2">{cs.tagline}</p>
              </div>
              <Link
                href={cs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm border px-4 py-2 rounded-full transition-all duration-300 font-mono flex-shrink-0 hover:opacity-80"
                style={{
                  color: cs.accent,
                  borderColor: `${cs.accent}40`,
                }}
              >
                {cs.label} ↗
              </Link>
            </div>

            {/* Three columns: Problem / Solution / Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-bg-card border border-neutral-dark/20 rounded-2xl p-6">
                <p className="text-xs text-neutral/50 font-mono uppercase tracking-wider mb-3">
                  The Problem
                </p>
                <p className="text-sm text-neutral leading-relaxed">{cs.problem}</p>
              </div>
              <div className="bg-bg-card border border-neutral-dark/20 rounded-2xl p-6">
                <p className="text-xs text-neutral/50 font-mono uppercase tracking-wider mb-3">
                  Our Solution
                </p>
                <p className="text-sm text-neutral leading-relaxed">{cs.solution}</p>
              </div>
              <div className="bg-bg-card border border-neutral-dark/20 rounded-2xl p-6">
                <p className="text-xs text-neutral/50 font-mono uppercase tracking-wider mb-3">
                  Outcomes
                </p>
                <ul className="space-y-2">
                  {cs.outcome.map((item) => (
                    <li key={item} className="text-sm text-neutral flex items-start gap-2">
                      <span style={{ color: cs.accent }} className="mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-neutral/60 border border-neutral-dark/20 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Divider */}
            {index < caseStudies.length - 1 && (
              <div className="mt-24 border-b border-neutral-dark/10" />
            )}
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-neutral-dark/20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want us to build your product?
          </h2>
          <p className="text-neutral text-lg mb-8">
            We take on a small number of client projects each quarter. If you have an idea that needs engineering, let&apos;s talk.
          </p>
          <Link
            href="mailto:info@opryon.com"
            className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </div>
  );
}
