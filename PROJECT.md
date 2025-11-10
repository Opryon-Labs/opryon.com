# Opryon Website - Project Documentation

## Project Overview

**Company Name:** Opryon
**Tagline:** Creating Digital Magic
**Mission:** Web solutions that don't just look good—they work harder for your business

---

## Initial Vision & Goals

### User Experience Flow

1. User lands on the site
2. Sees a beautiful preloader/loading animation
3. Website loads with stunning landing page
4. Minimal yet beautiful design with "we create magic" messaging
5. Beautiful animations running in the background
6. Clear sections explaining what we do, how we do it, and why choose us

### Key Objectives

- Make clients think: "These are THE guys I want to build my website"
- Stand out from competition with premium feel
- Showcase expertise through design quality
- Fast, performant, and scalable codebase

---

## Design Inspiration

**Primary Inspiration:** labs.aeoscompany.com

### Key Takeaways

- Clear 3-step process presentation
- Focus on client value propositions
- Clean, modern aesthetic
- Progressive content reveal
- Strong call-to-action

---

## Technical Stack

### Core Technologies

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Geist Sans & Geist Mono
- **Linting:** ESLint + Prettier

### Development Setup

- **Build Tool:** Turbopack
- **Code Quality:** ESLint + Prettier with auto-formatting
- **TypeScript Paths:** Configured aliases (@/components, @/lib, etc.)
- **Git:** Conventional commits

---

## Brand Identity

### Color Palette

- **Primary:** `#6366f1` (Indigo) - Main brand color
- **Primary Dark:** `#4f46e5` - Darker shade for hovers
- **Accent:** `#8b5cf6` (Purple) - Secondary accent
- **Neutral:** `#64748b` (Slate Gray) - Text and subtle elements
- **Background:** `#ffffff` (Light) / `#0a0a0a` (Dark)
- **Foreground:** `#0a0a0a` (Light) / `#ededed` (Dark)

### Typography

- **Headings:** Geist Sans (Bold)
- **Body:** Geist Sans (Regular)
- **Code/Mono:** Geist Mono

### Animation Principles

- **Smooth & Purposeful:** One focal animation per section
- **Scroll-Triggered:** Progressive reveals as user scrolls
- **Micro-interactions:** Hover effects on buttons and cards
- **Performance First:** Optimized animations, no jank

---

## Website Structure (Implemented)

### 1. Preloader

**Status:** ✅ Complete
**File:** `components/Preloader.tsx`

**Features:**

- 2.5 second elegant loading animation
- OPRYON logo reveal with gradient
- Animated particles (6 dots in circular pattern)
- Progress bar
- Smooth fade-out transition

**Animations:**

- Logo: scale up with fade-in
- Subtitle: delayed fade-in
- Particles: pulsing loop with stagger
- Progress bar: 0-100% fill

---

### 2. Hero Section

**Status:** ✅ Complete
**File:** `components/sections/Hero.tsx`

**Content:**

- **Main Headline:** "We Create Digital Magic"
- **Subheadline:** "Web solutions that don't just look good—they work harder for your business"
- **CTAs:** "Start Your Project" (primary), "View Our Work" (outline)

**Features:**

- Gradient text effect on "Digital Magic"
- Floating geometric shapes (8 animated boxes)
- Gradient orbs with pulsing animation
- Scroll indicator at bottom
- Fully responsive layout

**Background Effects:**

- 2 animated gradient orbs (primary & accent)
- 8 floating geometric shapes with rotation
- Parallax-style movement

---

### 3. What We Do (Services)

**Status:** ✅ Complete
**File:** `components/sections/WhatWeDo.tsx`

**Headline:** "What We Do"
**Subheadline:** "We bring design, development & innovation expertise"

**Services (6 cards):**

1. **Custom Web Development** ⚡
   - Tailored solutions built with modern technology
2. **UI/UX Design** 🎨
   - Beautiful interfaces that users love
3. **E-commerce Solutions** 🛍️
   - Online stores that convert visitors to customers
4. **Web Applications** 🚀
   - Complex platforms, simplified
5. **Performance Optimization** ⚡
   - Lightning-fast experiences for your users
6. **Maintenance & Support** 🛠️
   - We're here for the long run

**Layout:** 3-column grid (responsive to 1-column on mobile)

**Animations:**

- Staggered fade-up on scroll
- Hover: lift effect + background color change
- Border color change on hover

---

### 4. How We Do It (Process)

**Status:** ✅ Complete
**File:** `components/sections/HowWeDoIt.tsx`

**Headline:** "How We Do It"
**Subheadline:** "From idea to launch, we've got you covered"

**3-Step Process:**

**Step 1: Discovery**

- Understand your vision
- Define target audience
- Map user journeys
- Identify opportunities

**Step 2: Design & Development**

- Pixel-perfect designs
- Clean, maintainable code
- Mobile-first approach
- Regular check-ins

**Step 3: Launch & Support**

- Seamless deployment
- Performance testing
- Documentation & training
- Ongoing support

**Layout:** 3-column grid with large step numbers

**Animations:**

- Staggered fade-up per card
- Large numbers (01, 02, 03) in primary/20 opacity

---

### 5. Why Choose Us (Differentiators)

**Status:** ✅ Complete
**File:** `components/sections/WhyChooseUs.tsx`

**Headline:** "Why Choose Us"
**Subheadline:** "We build. Fast & Beautiful."

**4 Key Differentiators:**

1. **Blazing Fast Performance**
   - Metric: < 2s Load Time
   - Your users will thank you for the speed
2. **Modern Tech Stack**
   - Metric: 100% Future Ready
   - Built for today and tomorrow
3. **Code That Scales**
   - Metric: ∞ Scalability
   - From startup to enterprise
4. **Always Experimenting**
   - Metric: 24/7 Innovation
   - We stay ahead of web trends

**Layout:** 4-column grid with gradient backgrounds

**Animations:**

- Scale-up on scroll reveal
- Gradient text for metrics
- Hover: scale-up effect

---

### 6. Work (Portfolio)

**Status:** ✅ Complete (Placeholder Content)
**File:** `components/sections/Work.tsx`

**Headline:** "Our Work"
**Subheadline:** "Projects we're proud of"

**Projects (4 placeholder cards):**

1. **E-commerce Platform**
   - Category: Web Development
   - Tech: Next.js, Stripe, Tailwind
2. **SaaS Dashboard**
   - Category: Web Application
   - Tech: React, TypeScript, D3.js
3. **Portfolio Website**
   - Category: Design & Development
   - Tech: Next.js, Framer Motion, CSS
4. **Booking System**
   - Category: Web Application
   - Tech: Next.js, PostgreSQL, Prisma

**Layout:** 2-column grid

**Animations:**

- Staggered fade-up
- Gradient background reveal on hover
- Lift effect on hover

**TODO:** Replace with real projects, add images

---

### 7. CTA (Call to Action)

**Status:** ✅ Complete
**File:** `components/sections/CTA.tsx`

**Content:**

- **Headline:** "Ready to Create Magic?"
- **Description:** "Let's build something amazing together. Get in touch and bring your vision to life."
- **CTAs:** "Start a Project" (primary), "Schedule a Call" (outline)

**Features:**

- Large gradient background container
- Animated gradient orbs in background
- Centered content with max-width
- Dual CTA buttons

**Background:**

- Gradient: primary/10 → accent/10 → primary/10
- 2 animated pulsing orbs

---

### 8. Footer

**Status:** ✅ Complete
**File:** `components/Footer.tsx`

**Sections:**

1. **About**
   - Opryon branding with gradient
   - Tagline: "We are Opryon, a team that designs and builds digital experiences that matter."
2. **Quick Links**
   - What We Do
   - How We Do It
   - Our Work
   - Contact
3. **Contact**
   - Email: hello@opryon.com
   - Social media icons (Twitter, GitHub, LinkedIn)

**Bottom:**

- Copyright notice
- "Built with magic by Opryon"

**Layout:** 3-column grid, responsive to 1-column

---

## Component Architecture

### Reusable UI Components

**Location:** `components/ui/`

#### Button (`Button.tsx`)

- **Variants:** primary, secondary, outline
- **Sizes:** sm, md, lg
- **Features:** Framer Motion animations (scale on hover/tap)

#### Container (`Container.tsx`)

- **Sizes:** sm (max-w-3xl), md (max-w-5xl), lg (max-w-7xl), full
- **Purpose:** Consistent max-width and padding

#### Section (`Section.tsx`)

- **Props:** id, className, fullHeight
- **Purpose:** Consistent section spacing and structure

---

## Custom Animations

**Location:** `app/globals.css`

### Keyframes Defined

```css
@keyframes fade-up - Fade in with upward motion
@keyframes fade-in - Simple fade in
@keyframes float - Floating animation
@keyframes glow - Pulsing glow effect;
```

### Framer Motion Patterns

- **Scroll-triggered reveals:** `whileInView` with `viewport={{ once: true }}`
- **Staggered animations:** Delay based on index
- **Hover effects:** `whileHover`, `whileTap`
- **Background animations:** Infinite loops with easeInOut

---

## Project File Structure

```
opryon/
├── app/
│   ├── globals.css           # Theme, colors, animations
│   ├── layout.tsx            # Root layout, metadata
│   └── page.tsx              # Main page composition
├── components/
│   ├── ui/                   # Reusable components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── HowWeDoIt.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Work.tsx
│   │   └── CTA.tsx
│   ├── Preloader.tsx
│   └── Footer.tsx
├── lib/                      # Utilities (future)
├── types/                    # TypeScript types (future)
├── public/                   # Static assets
├── .prettierrc               # Prettier config
├── eslint.config.mjs         # ESLint config
├── tsconfig.json             # TypeScript config
├── STRUCTURE.md              # Code structure guide
└── PROJECT.md                # This file
```

---

## Development Workflow

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting
```

### Git Workflow

**Branch:** main
**Commit Style:** Conventional commits (feat:, fix:, refactor:, etc.)

### Commits Made

1. ✅ `feat: initial website setup with hero section and preloader`
2. ✅ `feat: add all website sections with modular structure`

---

## Current Status

### ✅ Completed

- [x] Project setup and configuration
- [x] TypeScript path aliases
- [x] Tailwind CSS custom theme
- [x] Framer Motion integration
- [x] ESLint + Prettier setup
- [x] Preloader component
- [x] Hero section
- [x] What We Do section
- [x] How We Do It section
- [x] Why Choose Us section
- [x] Work/Portfolio section
- [x] CTA section
- [x] Footer
- [x] Responsive design (all sections)
- [x] Scroll animations (all sections)
- [x] Project documentation (STRUCTURE.md, PROJECT.md)

---

## Next Steps (Planned)

### Content Refinement

- [ ] Update service descriptions with more detail
- [ ] Refine process steps with actual workflow
- [ ] Add real metrics/stats to "Why Choose Us"
- [ ] Write authentic company "About" text

### Portfolio Section

- [ ] Add real project screenshots/images
- [ ] Write detailed case studies
- [ ] Add project links (live sites, case study pages)
- [ ] Consider filtering by category

### Functionality

- [ ] Make CTAs functional (contact form or calendar integration)
- [ ] Add email integration (hello@opryon.com)
- [ ] Connect social media links
- [ ] Add analytics (Google Analytics, Plausible, etc.)

### Visual Enhancements

- [ ] Add project images/screenshots
- [ ] Consider adding client logos
- [ ] Add custom icons instead of emojis
- [ ] Explore 3D elements for hero (Three.js/React Three Fiber)
- [ ] Add more sophisticated background animations

### Features

- [ ] Dark mode toggle (theme already supports it)
- [ ] Navigation bar (sticky header)
- [ ] Smooth scroll to sections
- [ ] Page transitions between routes (if multi-page)
- [ ] Blog section (future)
- [ ] Testimonials section (future)

### Performance

- [ ] Image optimization (add Next.js Image component)
- [ ] Lazy load below-fold content
- [ ] Code splitting for heavy sections
- [ ] Lighthouse audit and optimization
- [ ] SEO optimization (meta tags, structured data)

### Deployment

- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain
- [ ] Configure environment variables
- [ ] Set up CI/CD pipeline

---

## Design Decisions

### Why Next.js 15?

- Latest version with App Router
- Server Components by default (better performance)
- Built-in optimization (images, fonts, scripts)
- Turbopack for faster builds
- Great developer experience

### Why Tailwind CSS v4?

- Latest version with improved performance
- Utility-first for rapid development
- Consistent design system
- Responsive design made easy
- Small bundle size

### Why Framer Motion?

- Industry-standard animation library
- Declarative animations
- Scroll-triggered animations
- Smooth 60fps animations
- Great TypeScript support

### Modular Architecture

- Each section is self-contained
- Easy to edit individual sections
- Reusable UI components
- Scalable structure for future growth
- Clean separation of concerns

---

## Key Differentiators (Opryon Website vs Others)

1. **Loading Experience:** Custom preloader sets premium tone
2. **Smooth Animations:** Professional Framer Motion animations throughout
3. **Modern Tech Stack:** Next.js 15, TypeScript, Tailwind v4
4. **Performance First:** Fast loading, optimized animations
5. **Clean Code:** Modular, maintainable, well-documented
6. **Attention to Detail:** Micro-interactions, hover effects, gradient text
7. **Fully Responsive:** Mobile-first design approach

---

## Lessons Learned & Notes

- **Keep it simple:** Don't over-animate; one focal point per section
- **Mobile-first:** Design for mobile, enhance for desktop
- **Scroll animations:** Use `viewport={{ once: true }}` to prevent re-triggers
- **Gradients:** Subtle gradients add depth without overwhelming
- **TypeScript:** Strict typing catches bugs early
- **Prettier:** Auto-formatting saves time and ensures consistency

---

## Future Considerations

### Scalability

- When adding 3+ custom hooks → create `hooks/` directory
- When adding React Context → create `contexts/` directory
- When adding API routes → create `api/` directory
- Consider internationalization (i18n) if going global

### Testing

- Unit tests for components (Jest + React Testing Library)
- E2E tests for critical user flows (Playwright)
- Visual regression tests (Percy, Chromatic)

### Analytics & Tracking

- User behavior analytics
- Performance monitoring (Vercel Analytics, Sentry)
- Conversion tracking for CTAs

---

## Questions to Address

1. **Content:**
   - What specific services do we want to highlight?
   - Do we have real projects to showcase?
   - What's our actual process (3 steps accurate)?

2. **Contact:**
   - Use contact form or calendar booking?
   - What's the real contact email?
   - Social media handles?

3. **About:**
   - Team info to include?
   - Company location/timezone?
   - Years of experience?

4. **Functionality:**
   - Need a blog?
   - Client portal?
   - Case studies as separate pages?

---

## Resources & References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Inspiration: labs.aeoscompany.com](https://labs.aeoscompany.com)
- [STRUCTURE.md](./STRUCTURE.md) - Code structure and conventions

---

**Last Updated:** 2025-11-08
**Status:** Initial version complete, ready for refinement
