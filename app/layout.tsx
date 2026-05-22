import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.opryon.com'),
  title: {
    default: 'Opryon Labs — AI Development & Web Solutions',
    template: '%s | Opryon Labs',
  },
  description:
    'Opryon Labs is an engineering team building AI-powered apps and web solutions. We ship GymPilot, AstraBill & FuelPulse. Based in Roorkee, India.',
  keywords: [
    'opryon labs',
    'opryon',
    'AI development India',
    'AI solutions',
    'AI integration',
    'machine learning',
    'web development',
    'SaaS development India',
    'UI/UX design',
    'automation',
    'custom web development',
    'AI powered applications',
    'intelligent automation',
    'AI development agency Roorkee',
    'web development Uttarakhand',
    'Next.js development',
  ],
  authors: [{ name: 'Asmit Tyagi', url: 'https://asmittyagi.com' }],
  creator: 'Opryon Labs',
  publisher: 'Opryon Labs',
  alternates: {
    canonical: 'https://www.opryon.com',
  },
  icons: {
    icon: '/Favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.opryon.com',
    title: 'Opryon Labs — AI Development & Web Solutions',
    description:
      'Opryon Labs builds AI-powered apps and modern web solutions. We ship GymPilot, AstraBill & FuelPulse. Engineering team based in Roorkee, India.',
    siteName: 'Opryon Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Opryon Labs — AI Development & Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opryon Labs — AI Development & Web Solutions',
    description:
      'Opryon Labs builds AI-powered apps and web solutions. Based in Roorkee, India.',
    images: ['/og-image.png'],
    site: '@opryonlabs',
    creator: '@opryonlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0QH4KTEW1S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0QH4KTEW1S');
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.opryon.com/#organization",
                  "name": "Opryon Labs",
                  "alternateName": "Opryon",
                  "url": "https://www.opryon.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.opryon.com/logo-square.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Opryon Labs is an engineering team that designs and builds AI-powered applications, custom web solutions, and intelligent automation. Based in Roorkee, India.",
                  "foundingDate": "2024",
                  "founder": {
                    "@type": "Person",
                    "name": "Asmit Tyagi",
                    "url": "https://asmittyagi.com"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Roorkee",
                    "addressRegion": "Uttarakhand",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "info@opryon.com",
                    "contactType": "customer service"
                  },
                  "areaServed": "Worldwide",
                  "knowsAbout": ["AI Development", "Machine Learning", "Web Development", "UI/UX Design", "Automation", "Custom Software Development"],
                  "sameAs": [
                    "https://www.linkedin.com/company/opryon-labs",
                    "https://x.com/opryonlabs",
                    "https://github.com/Opryon-Labs"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.opryon.com/#website",
                  "url": "https://www.opryon.com/",
                  "name": "Opryon Labs",
                  "description": "Opryon Labs — AI Development & Web Solutions",
                  "publisher": { "@id": "https://www.opryon.com/#organization" }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.opryon.com/#service",
                  "name": "Opryon Labs",
                  "url": "https://www.opryon.com",
                  "image": "https://www.opryon.com/og-image.png",
                  "description": "AI-powered application development, custom web solutions, conversational AI, and intelligent automation services.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Roorkee",
                    "addressRegion": "Uttarakhand",
                    "addressCountry": "IN"
                  },
                  "areaServed": "Worldwide",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered Application Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversational AI & Chatbots" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation Solutions" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Integration" } }
                    ]
                  }
                }
              ]
            }
          `}
        </Script>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
