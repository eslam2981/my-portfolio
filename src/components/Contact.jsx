import { useState, useEffect } from 'react';
import { Copy, Check, Send, ArrowUpRight, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, status } = portfolioData.developer;

  const [copied, setCopied] = useState(false);
  const [isToastClosing, setIsToastClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Auto-hide success message after 4.5s
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setIsToastClosing(false);
    setTimeout(() => {
      setIsToastClosing(true);
      setTimeout(() => {
        setCopied(false);
        setIsToastClosing(false);
      }, 220);
    }, 2200);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or organization.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Open email client with form data
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Eslam,\n\n${formData.message}\n\nFrom: ${formData.name}\nContact Email: ${formData.email}`
    );
    const mailtoUrl = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;

    // Reset form and trigger success banner
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-28 relative bg-[#0A0C10] border-t border-white/[0.08]" aria-label="Contact and Inquiries">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl xl:max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] sm:text-xs text-[#CEFF00] mb-2 uppercase tracking-widest">
              <span>05 // Initiate Dialogue</span>
              <span className="text-[#8E96A7]">—</span>
              <span className="text-[#9BA3B4]">Inquiries & Opportunities</span>
            </div>
            <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Let's build something exceptional.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#9BA3B4] font-normal leading-relaxed">
              Available for full-time frontend engineering roles, freelance opportunities, and impactful collaborations.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-xs font-mono-code text-[#10B981] lg:self-end shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>{status.label}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 text-left items-start">
          
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#10131A] border border-white/10 p-3.5 sm:p-8 space-y-5 sm:space-y-6 shadow-xl">
              <div>
                <span className="font-mono-code text-xs text-[#CEFF00] uppercase tracking-wider block mb-2">
                  Direct Channel
                </span>
                <h3 className="font-display-title text-lg sm:text-2xl font-bold text-white mb-2">
                  Have an open role or project?
                </h3>
                <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
                  I am actively evaluating frontend engineering opportunities, creative developer engagements, and technical collaborations.
                </p>
              </div>

              {/* Email card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A0C10] border border-white/10 space-y-3">
                <span className="text-[11px] font-mono-code text-[#8E96A7] uppercase tracking-wider block">
                  Primary Email Address:
                </span>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 p-2 rounded-xl bg-[#161A23] border border-white/[0.08]">
                  <span className="font-mono-code text-xs sm:text-sm text-white break-all sm:truncate font-medium py-1 px-1">
                    {contact.email}
                  </span>
                  
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0A0C10] border border-white/10 text-[#CEFF00] hover:bg-[#CEFF00] hover:text-[#0A0C10] transition-all flex items-center justify-center gap-1.5 text-xs font-mono-code shrink-0 cursor-pointer"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 pt-1 text-[11px] font-mono-code text-[#9BA3B4]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8E96A7]">Location:</span>
                    <span className="text-white">Alexandria, Egypt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8E96A7]">Phone:</span>
                    <a href="tel:+2001211735629" className="text-[#CEFF00] hover:underline">
                      +20 01211735629
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-[11px] font-mono-code text-[#10B981]">
                  <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span className="break-all">Verified contact: {contact.email}</span>
                </div>
              </div>

              {/* Social profiles */}
              <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono-code text-[#8E96A7] uppercase tracking-wider block">
                  Professional Profiles:
                </span>
                
                <div className="flex flex-col gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-white hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors gap-2"
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <GithubIcon className="w-4 h-4 text-[#CEFF00] shrink-0" />
                      <span className="truncate text-[11px] sm:text-xs">GitHub (@eslam2981)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E96A7] shrink-0" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-white hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors gap-2"
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <LinkedinIcon className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="truncate text-[11px] sm:text-xs">LinkedIn (@eslam-gamil)</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E96A7] shrink-0" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#10131A] border border-white/10 p-3.5 sm:p-8 shadow-xl">
            <div className="mb-6 pb-4 border-b border-white/[0.08]">
              <h3 className="font-display-title text-lg sm:text-xl font-bold text-white mb-1">
                Compose a Message
              </h3>
              <p className="text-xs text-[#9BA3B4] font-mono-code">
                Submissions automatically format a draft in your local email client. No third-party tracking or fake delivery claims.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono-code text-[#F3F5F9] mb-1.5">
                    Your Name / Organization <span className="text-[#CEFF00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="e.g. Sarah Jenkins (Tech Lead)"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0C10] border text-xs sm:text-sm text-white placeholder-[#8E96A7] focus:outline-none focus:border-[#CEFF00] transition-colors ${
                      errors.name ? 'border-red-500/80' : 'border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <span id="name-error" className="text-[11px] font-mono-code text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono-code text-[#F3F5F9] mb-1.5">
                    Your Email Address <span className="text-[#CEFF00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="sarah@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0C10] border text-xs sm:text-sm text-white placeholder-[#8E96A7] focus:outline-none focus:border-[#CEFF00] transition-colors ${
                      errors.email ? 'border-red-500/80' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <span id="email-error" className="text-[11px] font-mono-code text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono-code text-[#F3F5F9] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Frontend Engineer Role / Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0A0C10] border border-white/10 text-xs sm:text-sm text-white placeholder-[#8E96A7] focus:outline-none focus:border-[#CEFF00] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono-code text-[#F3F5F9]">
                    Message Details <span className="text-[#CEFF00]">*</span>
                  </label>
                  <span className="text-[10px] font-mono-code text-[#8E96A7]">
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Share details regarding the role, requirements, or project scope..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0C10] border text-xs sm:text-sm text-white placeholder-[#8E96A7] focus:outline-none focus:border-[#CEFF00] transition-colors resize-y ${
                    errors.message ? 'border-red-500/80' : 'border-white/10'
                  }`}
                />
                {errors.message && (
                  <span id="message-error" className="text-[11px] font-mono-code text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-xs tracking-wider uppercase transition-all hover:bg-[#d8ff33] hover:shadow-[0_0_25px_rgba(206,255,0,0.35)] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft Message via Mail Client</span>
                </button>

                <span className="text-[11px] font-mono-code text-[#8E96A7]">
                  Direct delivery to: {contact.email}
                </span>
              </div>

              {/* Feedback banner */}
              <div
                className="accordion-wrapper"
                data-open={submitted ? 'true' : 'false'}
                aria-hidden={!submitted}
              >
                <div className="accordion-inner">
                  <div className="pt-2">
                    <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-xs font-mono-code text-green-300 flex items-start justify-between gap-3" role="status" aria-live="polite">
                      <p className="leading-relaxed">
                        ✓ Message drafted! Your email client has been summoned with your message. If it didn't open automatically, use the copy button on the left to email directly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="p-1 rounded-md text-green-300 hover:text-white hover:bg-green-500/20 transition-colors shrink-0 cursor-pointer"
                        aria-label="Dismiss confirmation"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>

        </div>

      </div>

      {/* Copied toast */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#161A23] border border-[#CEFF00]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(206,255,0,0.2)] transition-all duration-200 ${
            isToastClosing
              ? 'opacity-0 translate-y-4 scale-95 ease-in pointer-events-none'
              : 'opacity-100 translate-y-0 scale-100 ease-out animate-scale-in'
          }`}
        >
          <div className="w-7 h-7 rounded-lg bg-[#CEFF00]/10 border border-[#CEFF00]/30 flex items-center justify-center text-[#CEFF00] shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono-code font-bold text-white block">Email Copied to Clipboard</span>
            <span className="text-[11px] font-mono-code text-[#9BA3B4] block">{contact.email}</span>
          </div>
        </div>
      )}
    </section>
  );
}
