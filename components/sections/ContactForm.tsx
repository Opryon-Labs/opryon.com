'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    company: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send via EmailJS
      const templateParams = {
        name: formData.firstName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        title: `Contact from ${formData.firstName}`,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Send to Google Sheets (if URL is configured)
      const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
      if (sheetsUrl) {
        const origin = typeof window !== 'undefined' ? window.location.origin : '';
        const params = new URLSearchParams({
          ...formData,
          origin,
        });
        await fetch(sheetsUrl + '?' + params.toString(), {
          method: 'POST',
        });
      }

      // Success!
      setSubmitStatus('success');
      setFormData({
        email: '',
        firstName: '',
        company: '',
        phone: '',
        message: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email and First Name - Side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-neutral-dark/40 rounded-lg text-foreground placeholder:text-neutral/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-neutral-dark/40 rounded-lg text-foreground placeholder:text-neutral/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </motion.div>
      </div>

      {/* Company Name and Phone - Side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-neutral-dark/40 rounded-lg text-foreground placeholder:text-neutral/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
        >
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (WhatsApp)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-neutral-dark/40 rounded-lg text-foreground placeholder:text-neutral/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </motion.div>
      </div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <textarea
          name="message"
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-transparent border border-neutral-dark/40 rounded-lg text-foreground placeholder:text-neutral/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={`w-full px-6 py-3 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
          isSubmitting
            ? 'bg-neutral/50 text-neutral cursor-not-allowed'
            : 'bg-foreground text-background hover:bg-primary hover:text-background'
        }`}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin">⏳</span>
            Sending...
          </>
        ) : (
          <>
            Submit Enquiry
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </>
        )}
      </motion.button>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-center"
        >
          ✅ Thanks! We&apos;ll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-center"
        >
          ❌ Oops! Something went wrong. Please try again or email us directly at info@opryon.com
        </motion.div>
      )}
    </form>
  );
}
