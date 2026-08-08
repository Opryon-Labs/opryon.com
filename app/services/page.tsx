import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/sections/v2/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Opryon Labs offers AI-powered application development, custom web development, conversational AI, UI/UX design, and automation solutions for businesses in India and globally.',
  alternates: {
    canonical: 'https://www.opryon.com/services',
  },
  openGraph: {
    title: 'Services | Opryon Labs',
    description:
      'AI development, custom web solutions, and intelligent automation from Opryon Labs — based in Roorkee, India.',
    url: 'https://www.opryon.com/services',
  },
};

const services = [
  {
    number: '01',
    name: 'AI-Powered Application Development',
    description:
      'We design and build applications that use AI as a core feature — not an afterthought. From intelligent recommendation engines to automated decision systems, we build AI products that solve real business problems.',
    details: [
      'Custom AI/ML model integration using OpenAI, Google Gemini, and Anthropic APIs',
      'Natural language processing and generation',
      'Computer vision and image recognition features',
      'Intelligent automation pipelines',
      'AI-powered search and recommendation systems',
    ],
    example: 'FuelPulse — AI nutrition logging that understands Indian food in plain text',
    exampleUrl: 'https://fuelpulse.in',
  },
  {
    number: '02',
    name: 'Custom Web Development',
    description:
      'Full-stack web development using modern technologies. We build fast, scalable, and maintainable applications — from marketing sites to complex SaaS platforms.',
    details: [
      'Next.js with App Router for server-rendered performance',
      'TypeScript throughout for reliability and maintainability',
      'PostgreSQL / Supabase database design and optimization',
      'REST and GraphQL API design',
      'Vercel / AWS deployment and infrastructure',
    ],
    example: 'GymPilot — full-stack gym management SaaS built for India',
    exampleUrl: 'https://thegympilot.com',
  },
  {
    number: '03',
    name: 'Conversational AI & Chatbots',
    description:
      'We build chatbots and AI assistants that actually understand what users are asking — not keyword-matching bots. Integrated into websites, WhatsApp, and other channels your customers already use.',
    details: [
      'Context-aware chatbots using LLM APIs',
      'WhatsApp Business API integration',
      'Multi-turn conversation handling',
      'Integration with your CRM and database',
      'Fallback escalation to human agents',
    ],
    example: 'GymPilot WhatsApp automation — automated renewal reminders',
    exampleUrl: 'https://thegympilot.com',
  },
  {
    number: '04',
    name: 'UI/UX Design',
    description:
      'We design interfaces that are beautiful, intuitive, and conversion-optimized. Not just pretty screens — products that users actually want to use.',
    details: [
      'User research and journey mapping',
      'Wireframing and interactive prototypes',
      'Design systems and component libraries',
      'Responsive design for all screen sizes',
      'Accessibility (WCAG) compliance',
    ],
    example: 'This site — designed and built by Opryon Labs',
    exampleUrl: 'https://www.opryon.com',
  },
  {
    number: '05',
    name: 'Automation Solutions',
    description:
      "We identify repetitive manual work in your business and automate it. Whether it's report generation, data processing, or customer communication — we build systems that run without you.",
    details: [
      'Workflow automation with n8n / custom scripts',
      'Scheduled job and cron automation',
      'Data pipeline design and maintenance',
      'Email and notification automation',
      'Integration between your tools (CRM, billing, inventory)',
    ],
    example: 'AstraBill — automated GST-compliant billing and payment follow-up',
    exampleUrl: 'https://astrabill.com',
  },
  {
    number: '06',
    name: 'AI Integration',
    description:
      'Already have a product? We add AI capabilities to your existing systems — making your current software smarter without rebuilding from scratch.',
    details: [
      'AI feature design and scoping',
      'LLM API integration (OpenAI, Gemini, Claude)',
      'Embedding and vector search implementation',
      'Fine-tuning and prompt engineering',
      'Cost optimization for AI API usage',
    ],
    example: 'Adding AI search to your existing web app',
    exampleUrl: 'mailto:info@opryon.com',
  },
];

const engagementModels = [
  {
    title: 'Project-Based',
    description:
      "Fixed scope, fixed timeline, fixed price. Best for well-defined products and features. We quote upfront, you know exactly what you're paying.",
  },
  {
    title: 'Retainer',
    description:
      'Ongoing engineering support on a monthly basis. Best for businesses that need consistent development work without hiring full-time.',
  },
  {
    title: 'Discovery Sprint',
    description:
      'A focused 2-week engagement to define your product, scope the work, and de-risk before committing to full development.',
  },
];

export default function ServicesPage() {
  return (
    <div className="grain bg-ink text-bone">
      <Header />
      <main>
        {/* Hero */}
        <div className="border-b border-ink-line pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint mb-6">
              Services
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-bone mb-8">
              What we <span className="italic text-clay">build</span>.
            </h1>
            <p className="text-lg sm:text-xl text-bone-dim max-w-2xl leading-relaxed">
              We bring AI, engineering, and design expertise together to build products that work
              harder for your business.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          {services.map((service) => (
            <div key={service.number} className="border-t border-ink-line py-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
                {/* Left — Number + Title */}
                <div className="lg:col-span-2">
                  <p className="font-mono text-[11px] text-bone-faint mb-3">{service.number}</p>
                  <h2 className="font-display text-2xl md:text-3xl text-bone mb-4">
                    {service.name}
                  </h2>
                  <p className="text-bone-dim leading-relaxed">{service.description}</p>
                </div>

                {/* Right — Details */}
                <div className="lg:col-span-3">
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-bone-dim">
                        <span className="mt-0.5 shrink-0 text-clay" aria-hidden>
                          →
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Example */}
                  <div className="border border-ink-line bg-ink-raised p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-faint mb-1">
                      Example from our work
                    </p>
                    <Link
                      href={service.exampleUrl}
                      target={service.exampleUrl.startsWith('http') ? '_blank' : undefined}
                      rel={
                        service.exampleUrl.startsWith('http') ? 'noopener noreferrer' : undefined
                      }
                      className="text-sm text-clay hover:underline"
                    >
                      {service.example} ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-ink-line" />
        </div>

        {/* Engagement Models */}
        <div className="bg-ink-raised border-y border-ink-line py-20 lg:py-28">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="font-display text-3xl md:text-4xl text-bone mb-12">
              How we work with you
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
              {engagementModels.map((model) => (
                <div key={model.title} className="bg-ink p-6 sm:p-8">
                  <h3 className="text-lg text-bone mb-3">{model.title}</h3>
                  <p className="text-bone-dim text-sm leading-relaxed">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-bone mb-6 max-w-2xl">
            Ready to get started?
          </h2>
          <p className="text-bone-dim text-lg mb-8 max-w-xl">
            Tell us what you&apos;re building. We&apos;ll tell you if we&apos;re the right fit —
            honestly.
          </p>
          <Link
            href="mailto:info@opryon.com"
            className="group inline-flex items-center gap-2 bg-bone text-ink px-6 py-3.5 text-sm font-medium hover:bg-clay transition-colors duration-300"
          >
            Email us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
