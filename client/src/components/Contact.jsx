import React, { useState } from 'react';
import { CONTACT } from '../config';
import Reveal from './Reveal';

const initialForm = { name: '', email: '', subject: '', message: '' };

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder-slate-600';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === 'sending') return;

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch(`${CONTACT.apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: '' }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus('error');
        setFeedback(data.error || 'Could not send your message. Please try again.');
        return;
      }

      setStatus('success');
      setFeedback('Message sent. I will get back to you shortly.');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setFeedback('Network error. Please check your connection, or email me directly.');
    }
  };

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                <i className="fa-solid fa-paper-plane"></i> Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Let&apos;s build something awesome together.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am currently open to data analyst, machine learning, and full-stack engineering roles,
                internships, and research collaborations. Send a message and I&apos;ll get back to you promptly.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
                    <i className="fa-regular fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">EMAIL ME</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors break-all">
                      {CONTACT.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:border-sky-400/50 transition-colors">
                    <i className="fa-solid fa-phone text-lg"></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">CALL / MOBILE</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      {CONTACT.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/50 transition-colors">
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">WHATSAPP</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      +91 8600619076 (Chat directly)
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">LOCATION</div>
                    <div className="text-sm font-semibold text-slate-200">Pune, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-2">
                      YOUR NAME
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={80}
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-2">
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={120}
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="Data Analyst Opportunity"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    maxLength={5000}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Hello Gaurav, I'd like to talk about..."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>

                {/* Honeypot: hidden from users, catches naive bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all glow-cyan flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Sending</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div aria-live="polite">
                  {status === 'success' && (
                    <div className="flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-3">
                      <i className="fa-solid fa-circle-check text-emerald-400"></i>
                      <span className="text-sm text-emerald-300">{feedback}</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3">
                      <i className="fa-solid fa-circle-exclamation text-rose-400 mt-0.5"></i>
                      <div>
                        <span className="text-sm text-rose-300 block">{feedback}</span>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="text-xs text-rose-200/80 underline hover:text-rose-100 mt-1 inline-block"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
