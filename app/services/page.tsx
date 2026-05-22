import type { Metadata } from 'next';
import Link from 'next/link';

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
    slug: 'ai-development',
    description:
      'We design and build applications that use AI as a core feature — not an afterthought. From intelligent recommendation engines to automated decision systems, we build AI products that solve real business problems.',
    details: [
      'Custom AI/ML model integration using OpenAI, Google Gemini, and Anthropic APIs',
      'Natural language processing and generation',
      'Computer vision and image recognition features',
      'Intelligent automation pipelines',
      'AI-powered search and recommendation systems',
    ],
    accent: '#00f0ff',
    example: 'FuelPulse — AI nutrition logging that understands Indian food in plain text',
    exampleUrl: 'https://fuelpulse.in',
  },
  {
    number: '02',
    name: 'Custom Web Development',
    slug: 'web-development',
    description:
      'Full-stack web development using modern technologies. We build fast, scalable, and maintainable applications — from marketing sites to complex SaaS platforms.',
    details: [
      'Next.js 15 with App Router for server-rendered performance',
      'TypeScript throughout for reliability and maintainability',
      'PostgreSQL / Supabase database design and optimization',
      'REST and GraphQL API design',
      'Vercel / AWS deployment and infrastructure',
    ],
    accent: '#00ff88',
    example: 'GymPilot — full-stack gym management SaaS built for India',
    exampleUrl: 'https://thegympilot.com',
  },
  {
    number: '03',
    name: 'Conversational AI & Chatbots',
    slug: 'conversational-ai',
    description:
      'We build chatbots and AI assistants that actually understand what users are asking — not keyword-matching bots. Integrated into websites, WhatsApp, and other channels your customers already use.',
    details: [
      'Context-aware chatbots using LLM APIs',
      'WhatsApp Business API integration',
      'Multi-turn conversation handling',
      'Integration with your CRM and database',
      'Fallback escalation to human agents',
    ],
    accent: '#a855f7',
    example: 'GymPilot WhatsApp automation — automated renewal reminders with 4x open rates',
    exampleUrl: 'https://thegympilot.com',
  },
  {
    number: '04',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    description:
      'We design interfaces that are beautiful, intuitive, and conversion-optimized. Not just pretty screens — products that users actually want to use.',
    details: [
      'User research and journey mapping',
      'Wireframing and interactive prototypes',
      'Design systems and component libraries',
      'Responsive design for all screen sizes',
      'Accessibility (WCAG) compliance',
    ],
    accent: '#f59e0b',
    example: 'This site — designed and built by Opryon Labs',
    exampleUrl: 'https://www.opryon.com',
  },
  {
    number: '05',
    name: 'Automation Solutions',
    slug: 'automation',
    description:
      'We identify repetitive manual work in your business and automate it. Whether it\'s report generation, data processing, or customer communication — we build systems that run without you.',
    details: [
      'Workflow automation with n8n / custom scripts',
      'Scheduled job and cron automation',
      'Data pipeline design and maintenance',
      'Email and notification automation',
      'Integration between your tools (CRM, billing, inventory)',
    ],
    accent: '#ef4444',
    example: 'AstraBill — automated GST-compliant billing and payment follow-up',
    exampleUrl: 'https://astrabill.com',
  },
  {
    number: '06',
    name: 'AI Integration',
    slug: 'ai-integration',
    description:
      'Already have a product? We add AI capabilities to your existing systems — making your current software smarter without rebuilding from scratch.',
    details: [
      'AI feature design and scoping',
      'LLM API integration (OpenAI, Gemini, Claude)',
      'Embedding and vector search implementation',
      'Fine-tuning and prompt engineering',
      'Cost optimization for AI API usage',
    ],
    accent: '#06b6d4',
    example: 'Adding AI search to your existing web app',
    exampleUrl: 'mailto:info@opryon.com',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-neutral-dark/20 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">Services</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            What we{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00f0ff 0%, #00ff88 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              build
            </span>
          </h1>
          <p className="text-xl text-neutral max-w-2xl">
            We bring AI, engineering, and design expertise together to build products that work harder
            for your business.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="space-y-0 divide-y divide-neutral-dark/20">
          {services.map((service) => (
            <div key={service.number} className="group py-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
                {/* Left — Number + Title */}
                <div className="lg:col-span-2">
                  <p className="text-neutral/30 font-mono text-sm mb-2">{service.number}</p>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: 'inherit' }}
                  >
                    {service.name}
                  </h2>
                  <p className="text-neutral leading-relaxed">{service.description}</p>
                </div>

                {/* Right — Details */}
                <div className="lg:col-span-3">
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-neutral">
                        <span
                          className="mt-0.5 flex-shrink-0 font-bold"
                          style={{ color: service.accent }}
                        >
                          →
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Example */}
                  <div
                    className="rounded-xl p-4 border"
                    style={{
                      borderColor: `${service.accent}20`,
                      background: `${service.accent}05`,
                    }}
                  >
                    <p className="text-xs font-mono text-neutral/40 mb-1 uppercase tracking-wider">
                      Example from our work
                    </p>
                    <Link
                      href={service.exampleUrl}
                      target={service.exampleUrl.startsWith('http') ? '_blank' : undefined}
                      rel={
                        service.exampleUrl.startsWith('http') ? 'noopener noreferrer' : undefined
                      }
                      className="text-sm transition-colors hover:underline"
                      style={{ color: service.accent }}
                    >
                      {service.example} ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div className="bg-bg-elevated border-y border-neutral-dark/20 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How we work with you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Project-Based',
                description:
                  'Fixed scope, fixed timeline, fixed price. Best for well-defined products and features. We quote upfront, you know exactly what you\'re paying.',
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
            ].map((model) => (
              <div
                key={model.title}
                className="bg-bg-card border border-neutral-dark/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-3">{model.title}</h3>
                <p className="text-neutral text-sm leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-neutral text-lg mb-8">
          Tell us what you&apos;re building. We&apos;ll tell you if we&apos;re the right fit — honestly.
        </p>
        <Link
          href="mailto:info@opryon.com"
          className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg"
        >
          Email us →
        </Link>
      </div>
    </div>
  );
}
