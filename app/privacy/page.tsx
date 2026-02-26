import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy | Opryon Labs',
  description: 'Privacy Policy for Opryon Labs and GymPilot - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-background min-h-screen">
      <div className="bg-bg-elevated border-b border-neutral-dark/20">
        <Container size="md">
          <div className="py-8">
            <Link href="/" className="text-primary hover:text-primary-dark transition-colors text-sm">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Privacy Policy</h1>
            <p className="text-neutral mt-2">Last updated: February 26, 2026</p>
          </div>
        </Container>
      </div>

      <Container size="md">
        <div className="py-12 prose prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-neutral leading-relaxed mb-4">
              Opryon Labs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the GymPilot application and related services.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
              services, including our website, mobile applications, and WhatsApp Business integration.
            </p>
            <p className="text-neutral leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

            <h3 className="text-lg font-medium text-foreground mb-3">2.1 Personal Information</h3>
            <p className="text-neutral leading-relaxed mb-4">
              We may collect personally identifiable information that you voluntarily provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials</li>
              <li>Billing and payment information</li>
              <li>Profile information and preferences</li>
              <li>Communication history through WhatsApp and other channels</li>
              <li>Fitness and health-related data (for GymPilot users)</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-neutral leading-relaxed mb-4">
              When you access our services, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2 mb-4">
              <li>Device information (type, operating system, unique identifiers)</li>
              <li>IP address and location data</li>
              <li>Browser type and settings</li>
              <li>Usage data and interaction with our services</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-3">2.3 WhatsApp Data</h3>
            <p className="text-neutral leading-relaxed">
              When you interact with us through WhatsApp, we may collect your WhatsApp phone number, profile name,
              message content, and any media shared through the platform in accordance with Meta&apos;s platform policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-neutral leading-relaxed mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>To send administrative information, updates, and promotional materials</li>
              <li>To respond to your comments, questions, and customer service requests</li>
              <li>To communicate with you via WhatsApp for service-related notifications</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-neutral leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li><strong className="text-foreground">Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong className="text-foreground">With Your Consent:</strong> When you have given us explicit permission</li>
            </ul>
            <p className="text-neutral leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-neutral leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-neutral leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need
              your data, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
            <p className="text-neutral leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li><strong className="text-foreground">Access:</strong> Request access to your personal information</li>
              <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information</li>
              <li><strong className="text-foreground">Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong className="text-foreground">Opt-out:</strong> Opt out of marketing communications</li>
              <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-neutral leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:info@opryon.com" className="text-primary hover:text-primary-dark">info@opryon.com</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Data Deletion Instructions</h2>
            <p className="text-neutral leading-relaxed mb-4">
              If you wish to delete your account and associated data, you can:
            </p>
            <ul className="list-disc pl-6 text-neutral space-y-2">
              <li>Send an email to <a href="mailto:info@opryon.com" className="text-primary hover:text-primary-dark">info@opryon.com</a> with the subject &quot;Data Deletion Request&quot;</li>
              <li>Include your registered email address or phone number for verification</li>
              <li>We will process your request within 30 days and confirm deletion</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
            <p className="text-neutral leading-relaxed">
              Your information may be transferred to and maintained on servers located outside your country of residence.
              By using our services, you consent to the transfer of your information to countries that may have different
              data protection laws than your jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-neutral leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If we learn that we have collected such information, we will take
              steps to delete it as soon as possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Third-Party Services</h2>
            <p className="text-neutral leading-relaxed">
              Our services may contain links to third-party websites or integrate with third-party services
              (including WhatsApp/Meta). We are not responsible for the privacy practices of these third parties.
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-neutral leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
              new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this
              Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-neutral leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-neutral">
              <p><strong className="text-foreground">Opryon Labs</strong></p>
              <p>Email: <a href="mailto:info@opryon.com" className="text-primary hover:text-primary-dark">info@opryon.com</a></p>
              <p>Phone: <a href="tel:+916396591516" className="text-primary hover:text-primary-dark">+91 6396591516</a></p>
              <p>Location: Roorkee, Uttarakhand, India</p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
