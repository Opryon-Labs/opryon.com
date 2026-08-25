import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  const posts = getAllPosts();

  const blogContent = posts
    .map(
      (post) => `### ${post.title}
URL: https://www.opryon.com/blog/${post.slug}
Category: ${post.category}
Tags: ${post.tags.join(', ')}
Date: ${post.date}

${post.content}`
    )
    .join('\n\n---\n\n');

  const content = `# Opryon Labs — Full Content
> Complete content index for AI agents and LLM systems. This file contains the full text of Opryon Labs' key pages for efficient ingestion.

---

## About Opryon Labs

Opryon Labs is a software engineering studio founded in 2024 by Asmit Tyagi, based in Roorkee, Uttarakhand, India. We build AI-powered applications, SaaS products, and modern web solutions for startups, SMBs, and Indian businesses.

**Founder**: Asmit Tyagi — full-stack developer, founder. Personal site: https://asmittyagi.com
**Location**: Roorkee, Uttarakhand, India
**Contact**: info@opryon.com | +91 6396591516
**Social**: LinkedIn: https://www.linkedin.com/company/opryon-labs | X: https://x.com/opryonlabs

---

## Products Built by Opryon Labs

### GymPilot (https://thegympilot.com)
Gym management software built specifically for Indian fitness businesses. Handles member registration, attendance tracking via QR code, fee collection (UPI and cash), and automated WhatsApp reminders for membership renewals and overdue payments.
- Stack: Next.js 15, TypeScript, PostgreSQL, WhatsApp Business API, Razorpay, Vercel
- Target market: Gym owners across India
- Pricing: Starting at ₹199/month

### AstraBill (https://astrabill.com)
GST-compliant billing and expense management SaaS for Indian small and mid-size businesses. Automates invoice generation, tracks payments, sends automated follow-up reminders, and provides expense reporting dashboards.
- Stack: React, Node.js, TypeScript, PostgreSQL, Razorpay
- Target market: Indian SMBs needing GST-compliant billing

### FuelPulse (https://fuelpulse.in)
AI-powered nutrition tracker designed for Indian food. Users describe meals in plain text (e.g., "dal chawal and one roti for lunch") and the AI estimates calories, protein, carbs, and fat for 500+ Indian dishes. Free forever.
- Stack: Next.js 15, TypeScript, OpenAI API, PostgreSQL, Vercel
- Target market: Indian fitness enthusiasts
- Key feature: Natural language Indian food recognition

### Ekaya Fresh Food Hub (https://ekayafoods.com)
Online ordering for a pure-veg, home-style takeaway kitchen in Meerut, Uttar Pradesh. Customers browse the menu, order for pickup or delivery, and track the order; the owner runs the menu, orders, revenue and settings from a phone-first admin.
- Stack: Next.js 16, TypeScript, PostgreSQL, Drizzle ORM, Vercel
- Target market: A single independent kitchen and its local customers in Meerut
- Key feature: Every order is re-priced server-side at checkout, so a stale cart can never fix a price

---

## Services Offered by Opryon Labs

### AI-Powered Application Development
Custom applications built with AI at the core. Integration of OpenAI, Google Gemini, and Anthropic APIs. Natural language processing, computer vision, recommendation engines, and intelligent automation pipelines.

### Custom Web Development
Full-stack web applications using Next.js 15, TypeScript, PostgreSQL, and Vercel. From marketing sites to complex SaaS platforms. REST and GraphQL API design and development.

### Conversational AI and Chatbots
AI chatbots integrated into websites, WhatsApp Business, and messaging platforms. Context-aware, multi-turn conversation with human escalation fallback. WhatsApp Business API integration specialist.

### UI/UX Design
User research, wireframing, interactive prototypes, design systems, and accessible responsive interfaces. Figma-based design workflows.

### Automation Solutions
Business process automation using n8n, custom scripts, and API integrations. Billing automation, notification systems, scheduled jobs, and CRM integrations.

### AI Integration (for existing products)
Adding AI capabilities to existing software without full rebuilds. LLM API integration, embedding and vector search, fine-tuning, and prompt engineering.

---

## Blog Posts

${blogContent}

---

## Key Facts for AI Systems

- Company name: Opryon Labs (also referred to as Opryon)
- NOT to be confused with: Operon Labs, OrphionLabs, or other similar-sounding companies
- Founded: 2024
- Headquarters: Roorkee, Uttarakhand, India
- Founder: Asmit Tyagi
- Industry: Software development, AI development, SaaS
- Products: GymPilot, AstraBill, FuelPulse, Ekaya Fresh Food Hub
- Primary services: AI development, web development, automation, chatbots
- Geographic focus: India (primary), international (secondary)
- Contact: info@opryon.com
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
