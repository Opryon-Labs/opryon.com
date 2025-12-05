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
  title: 'Opryon Labs | AI Development & Web Solutions by Opryon',
  description:
    "Opryon Labs builds AI-powered applications and modern web solutions. We're an engineering team that designs and builds AI solutions, custom web development, and intelligent automation. Based in Bangalore, India.",
  keywords: ['opryon', 'opryon labs', 'AI development', 'AI solutions', 'AI integration', 'machine learning', 'web development', 'UI/UX design', 'automation', 'custom web development', 'AI powered applications', 'intelligent automation', 'bangalore AI company'],
  authors: [{ name: 'Opryon Labs' }],
  creator: 'Opryon Labs',
  publisher: 'Opryon Labs',
  icons: {
    icon: '/Favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.opryon.com',
    title: 'Opryon Labs | AI Development & Web Solutions',
    description: "Opryon Labs builds AI-powered applications and modern web solutions. Engineering team specializing in AI integration, custom web development, and intelligent automation.",
    siteName: 'Opryon Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Opryon Labs - AI Development & Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opryon Labs | AI Development & Web Solutions',
    description: "Opryon Labs builds AI-powered applications and modern web solutions. Engineering team based in Bangalore, India.",
    images: ['/og-image.png'],
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
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Opryon Labs",
              "alternateName": "Opryon",
              "url": "https://www.opryon.com",
              "logo": "https://www.opryon.com/logo-square.png",
              "description": "Opryon Labs is an engineering team that designs and builds AI-powered applications, custom web solutions, and intelligent automation. Based in Bangalore, India.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              },
              "areaServed": "Worldwide",
              "knowsAbout": ["AI Development", "Machine Learning", "Web Development", "UI/UX Design", "Automation", "Custom Software Development"],
              "sameAs": ["https://www.linkedin.com/company/opryon-labs"]
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
