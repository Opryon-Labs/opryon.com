import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service | Opryon Labs',
  description: 'Terms of Service for Opryon Labs and GymPilot - Read our terms and conditions for using our services.',
};

export default function TermsOfService() {
  return (
    <main className="bg-background min-h-screen">
      <div className="bg-bg-elevated border-b border-neutral-dark/20">
        <Container size="md">
          <div className="py-8">
            <Link href="/" className="text-primary hover:text-primary-dark transition-colors text-sm">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Terms of Service</h1>
            <p className="text-neutral mt-2">Last updated: February 26, 2026</p>
          </div>
        </Container>
      </div>

      <Container size="md">
        <div className="py-12 prose prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-neutral leading-relaxed mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Opryon Labs
              (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) concerning your access to and use of our services, including
              the GymPilot application, website (opryon.com), and related services.
            </p>
            <p className="text-neutral leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
              Terms, you must not access or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-neutral leading-relaxed mb-4">
              Opryon Labs provides software development services and operates GymPilot, a fitness management platform.
              Our services may include:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li>Web and mobile application development</li>
              <li>AI-powered solutions and integrations</li>
              <li>GymPilot fitness management platform</li>
              <li>WhatsApp Business messaging services</li>
              <li>Customer support and communication services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. User Accounts</h2>

            <h3 className="text-lg font-medium text-foreground mb-3">3.1 Account Registration</h3>
            <p className="text-neutral leading-relaxed mb-4">
              To access certain features of our services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-3">3.2 Account Responsibility</h3>
            <p className="text-neutral leading-relaxed">
              You are responsible for all activities that occur under your account. We reserve the right to suspend
              or terminate accounts that violate these Terms or for any other reason at our discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-neutral leading-relaxed mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Send spam or unsolicited communications</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Collect user data without proper authorization</li>
              <li>Use automated systems to access our services without permission</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. WhatsApp Business Services</h2>
            <p className="text-neutral leading-relaxed mb-4">
              When using our WhatsApp Business integration, you also agree to comply with:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2 mb-4">
              <li>Meta&apos;s Terms of Service and Platform Policies</li>
              <li>WhatsApp Business Terms of Service</li>
              <li>Applicable messaging and communication laws</li>
            </ul>
            <p className="text-neutral leading-relaxed">
              You consent to receive service-related messages from us via WhatsApp. You may opt out of promotional
              messages at any time by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>

            <h3 className="text-lg font-medium text-foreground mb-3">6.1 Our Intellectual Property</h3>
            <p className="text-neutral leading-relaxed mb-4">
              All content, features, and functionality of our services, including but not limited to text, graphics,
              logos, icons, images, software, and code, are owned by Opryon Labs and are protected by intellectual
              property laws.
            </p>

            <h3 className="text-lg font-medium text-foreground mb-3">6.2 Limited License</h3>
            <p className="text-neutral leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to access and use our services for
              their intended purpose. This license does not include the right to modify, distribute, or create
              derivative works from our content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. User Content</h2>
            <p className="text-neutral leading-relaxed mb-4">
              By submitting content to our services, you grant us a worldwide, non-exclusive, royalty-free license
              to use, reproduce, modify, and display such content in connection with our services.
            </p>
            <p className="text-neutral leading-relaxed">
              You represent that you own or have the necessary rights to submit such content and that it does not
              violate any third-party rights or applicable laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Payment Terms</h2>
            <p className="text-neutral leading-relaxed mb-4">
              For paid services:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li>All fees are quoted in the agreed currency and are non-refundable unless otherwise stated</li>
              <li>Payment is due according to the agreed payment schedule</li>
              <li>We reserve the right to modify pricing with reasonable notice</li>
              <li>Failure to pay may result in suspension or termination of services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-neutral leading-relaxed mb-4">
              OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-neutral leading-relaxed">
              We do not warrant that our services will be uninterrupted, error-free, or secure, or that any defects
              will be corrected.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
            <p className="text-neutral leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPRYON LABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-neutral leading-relaxed">
              Our total liability for any claim arising from these Terms or our services shall not exceed the amount
              you paid to us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Indemnification</h2>
            <p className="text-neutral leading-relaxed">
              You agree to indemnify, defend, and hold harmless Opryon Labs and its officers, directors, employees,
              and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising
              from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Termination</h2>
            <p className="text-neutral leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any
              reason, including breach of these Terms. Upon termination:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li>Your right to use our services will cease immediately</li>
              <li>We may delete your account and associated data</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Modifications to Terms</h2>
            <p className="text-neutral leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by
              posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Your continued use
              of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">14. Governing Law</h2>
            <p className="text-neutral leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard
              to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the
              exclusive jurisdiction of the courts in Bangalore, India.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">15. Dispute Resolution</h2>
            <p className="text-neutral leading-relaxed">
              Any dispute arising from these Terms or our services shall first be attempted to be resolved through
              good faith negotiations. If the dispute cannot be resolved informally, it shall be submitted to
              binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">16. Severability</h2>
            <p className="text-neutral leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
              limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain
              in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">17. Entire Agreement</h2>
            <p className="text-neutral leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and
              Opryon Labs regarding our services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">18. Contact Information</h2>
            <p className="text-neutral leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="text-neutral">
              <p><strong className="text-foreground">Opryon Labs</strong></p>
              <p>Email: <a href="mailto:info@opryon.com" className="text-primary hover:text-primary-dark">info@opryon.com</a></p>
              <p>Phone: <a href="tel:+916396591516" className="text-primary hover:text-primary-dark">+91 6396591516</a></p>
              <p>Location: Bangalore, India</p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
