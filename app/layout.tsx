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
  title: 'Opryon - Creating Digital Magic',
  description:
    "Web solutions that don't just look good—they work harder for your business. Custom web development, UI/UX design, and e-commerce solutions.",
  keywords: ['web development', 'UI/UX design', 'e-commerce solutions', 'custom web design', 'digital agency', 'web design agency'],
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
    title: 'Opryon - Creating Digital Magic',
    description: "Web solutions that don't just look good—they work harder for your business. Custom web development, UI/UX design, and e-commerce solutions.",
    siteName: 'Opryon',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Opryon Labs - Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opryon - Creating Digital Magic',
    description: "Web solutions that don't just look good—they work harder for your business.",
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
              "url": "https://www.opryon.com",
              "logo": "https://www.opryon.com/logo-square.png",
              "description": "Web solutions that don't just look good—they work harder for your business. Custom web development, UI/UX design, and e-commerce solutions.",
              "foundingDate": "2024",
              "sameAs": []
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
