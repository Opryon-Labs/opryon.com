import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Opryon Labs
> Opryon Labs is an engineering team that designs, builds, and ships AI-powered applications and modern web solutions. Founded by Asmit Tyagi in 2024, based in Roorkee, Uttarakhand, India.

## About Opryon Labs
Opryon Labs is a software development studio specializing in AI-powered application development, custom web development, SaaS product engineering, and intelligent automation. We build for startups, SMBs, and Indian businesses that need engineering expertise without a full in-house team.

Founder: Asmit Tyagi (https://asmittyagi.com)
Location: Roorkee, Uttarakhand, India
Email: info@opryon.com
Founded: 2024

## Our Products
- [GymPilot](https://thegympilot.com): Gym management software with WhatsApp automation for Indian fitness businesses. Handles member tracking, attendance, fee collection (UPI + cash), and automated renewal reminders.
- [AstraBill](https://astrabill.com): GST-compliant billing and expense management SaaS for Indian small and mid-size businesses. Automates invoicing, payment follow-up, and expense reporting.
- [FuelPulse](https://fuelpulse.in): AI-powered nutrition and habit tracker built for Indian food. Users log meals in plain text and the AI estimates calories, protein, and macros for Indian dishes like dal, biryani, and sabzi.

## Services
- [AI-Powered Application Development](/services): We integrate AI and LLM APIs (OpenAI, Google Gemini, Anthropic) into custom applications — recommendation engines, chatbots, semantic search, automation pipelines.
- [Custom Web Development](/services): Full-stack web development using Next.js 15, TypeScript, PostgreSQL, and Vercel. From marketing sites to complex SaaS platforms.
- [Conversational AI & Chatbots](/services): AI chatbots integrated into websites and WhatsApp Business API. Multi-turn conversation, context-aware responses, human escalation fallback.
- [UI/UX Design](/services): User research, wireframing, design systems, and accessible, responsive interface design.
- [Automation Solutions](/services): Business process automation — billing, notifications, reporting, and workflow automation.
- [AI Integration](/services): Adding AI capabilities to existing systems without full rebuilds. LLM API integration, embedding and vector search, prompt engineering.

## Case Studies & Work
- [Our Work](/work): Full case studies for GymPilot, AstraBill, and FuelPulse including problem, solution, and outcomes.
- [Blog](/blog): Engineering notes, case studies, and product stories from the Opryon Labs team.

## Blog Posts
- [How We Built GymPilot](/blog/how-we-built-gympilot): Case study on building a WhatsApp-integrated gym management SaaS for Indian fitness businesses.
- [Why Opryon Labs Builds Every Product on Next.js 15](/blog/why-we-chose-nextjs-for-every-product): Engineering rationale for standardizing on Next.js 15, TypeScript, and Vercel.
- [How Small Businesses in India Can Use AI Without a Big Budget](/blog/ai-integration-for-small-business-india): Practical guide to AI integration for Indian SMBs covering customer support automation, content generation, and reporting.

## Contact
- Website: https://www.opryon.com
- Email: info@opryon.com
- Phone: +91 6396591516
- LinkedIn: https://www.linkedin.com/company/opryon-labs
- X (Twitter): https://x.com/opryonlabs
- GitHub: https://github.com/Opryon-Labs

## Optional: Full Content
For complete page content, see /llms-full.txt
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
