# Opryon Project Structure

## Overview

This document outlines the project structure and conventions for the Opryon website. Follow these guidelines to maintain clean, scalable, and maintainable code.

## Directory Structure

```
opryon/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles, theme variables, animations
│   ├── layout.tsx           # Root layout (metadata, fonts)
│   └── page.tsx             # Home page
│
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Button component (3 variants, animated)
│   │   ├── Container.tsx    # Responsive container wrapper
│   │   ├── Section.tsx      # Section wrapper component
│   │   └── index.ts         # Barrel exports for clean imports
│   │
│   ├── sections/            # Page sections (Hero, Services, etc.)
│   │   └── Hero.tsx         # Homepage hero section
│   │
│   └── Preloader.tsx        # Loading animation component
│
├── lib/                     # Utility functions, helpers, hooks
│   └── (utilities go here)
│
├── types/                   # TypeScript type definitions
│   └── (type definitions go here)
│
├── public/                  # Static assets
│   └── (images, fonts, icons)
│
└── [config files]           # Root config files
```

## Component Guidelines

### UI Components (`components/ui/`)

- **Purpose**: Reusable, atomic UI components
- **Examples**: Button, Input, Card, Container
- **Rules**:
  - Keep them generic and reusable
  - Use TypeScript interfaces for props
  - Include variants and sizes where applicable
  - Add micro-animations for better UX

### Section Components (`components/sections/`)

- **Purpose**: Page-specific sections
- **Examples**: Hero, Services, Portfolio, Contact
- **Rules**:
  - Each section is self-contained
  - Use 'use client' directive if using client-side features
  - Import UI components from `@/components/ui`
  - Wrap content in `<Section>` and `<Container>` for consistency

### Standalone Components (`components/`)

- **Purpose**: Shared components that don't fit in ui/ or sections/
- **Examples**: Preloader, Navigation, Footer
- **Rules**:
  - Use descriptive names
  - Keep them modular and reusable

## Import Aliases

Use TypeScript path aliases for cleaner imports:

```typescript
// ✅ Good
import { Button, Container } from '@/components/ui';
import Hero from '@/components/sections/Hero';
import { formatDate } from '@/lib/utils';

// ❌ Avoid
import { Button } from '../../../components/ui/Button';
```

Available aliases:

- `@/*` - Root directory
- `@/components/*` - Components directory
- `@/lib/*` - Library/utilities
- `@/types/*` - Type definitions
- `@/app/*` - App directory

## Styling Conventions

### Tailwind CSS

- Use Tailwind utility classes for styling
- Custom theme values defined in `app/globals.css`
- Responsive design: mobile-first approach

### CSS Variables (defined in globals.css)

- `--primary` - Main brand color (Indigo)
- `--primary-dark` - Darker primary shade
- `--accent` - Accent color (Purple)
- `--neutral` - Neutral gray
- `--section-padding` - Standard section padding

### Custom Animations

Available keyframes:

- `fade-up` - Fade in with upward motion
- `fade-in` - Simple fade in
- `float` - Floating animation
- `glow` - Pulsing glow effect

## Animation Guidelines

### Framer Motion

- Use for complex animations and interactions
- Keep animations smooth and purposeful
- Don't over-animate - one focal animation per section

### Best Practices

- Use `initial`, `animate`, `exit` props for page transitions
- Add `transition` for timing control
- Use `whileHover` and `whileTap` for interactive elements
- Stagger animations for list items

## File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `Hero.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `api.ts`)
- **Types**: PascalCase with `.d.ts` or `.ts` (e.g., `User.ts`)
- **Config files**: lowercase with dash (e.g., `next.config.ts`)

## Code Organization Best Practices

### 1. Component Structure

```typescript
// Imports
import {} from 'library';
import {} from '@/components';

// Types/Interfaces
interface ComponentProps {
  // ...
}

// Component
export default function Component({ props }: ComponentProps) {
  // Hooks
  // Handlers
  // Render
}
```

### 2. Keep Components Small

- One component per file
- Max ~200 lines per component
- Extract complex logic into custom hooks in `lib/`

### 3. TypeScript

- Always use TypeScript
- Define interfaces for all props
- Avoid `any` type
- Use proper return types for functions

### 4. Client vs Server Components

- Default to Server Components
- Use `'use client'` only when needed:
  - useState, useEffect, event handlers
  - Browser-only APIs
  - Framer Motion animations

## Future Scalability

### When to create new directories:

- `hooks/` - When you have 3+ custom hooks
- `contexts/` - For React Context providers
- `api/` - For API route handlers
- `utils/` - For helper functions (can start in `lib/`)
- `constants/` - For app-wide constants
- `styles/` - If you need component-specific CSS modules

### Performance Considerations

- Lazy load heavy components
- Optimize images (use Next.js Image component)
- Code split large sections
- Use dynamic imports for below-fold content

## Git Workflow

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates

### Commit Messages

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `style:` - Formatting, styling
- `docs:` - Documentation
- `chore:` - Maintenance tasks

## Testing (Future)

When adding tests:

- Unit tests: `__tests__/` next to components
- Integration tests: `tests/` at root
- Use Jest + React Testing Library

## Questions?

Refer to this document when adding new features. Keep it updated as the project evolves.
