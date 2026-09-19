import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CONFIG, PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill mailto link fallback and show confirmation
    const mailto = `mailto:${CONFIG.EMAIL_ADDRESS}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(`Hi Gowtham,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.location.href = mailto;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Open to conversations about analytics consulting, AI engineering, solution architecture, and delivery leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${CONFIG.EMAIL_ADDRESS}`}
                    className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-500 transition-colors"
                  >
                    {CONFIG.EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 block">
                    Professional Network
                  </span>
                  <a
                    href={CONFIG.LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-500 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 block">
                    Technical Repositories
                  </span>
                  <a
                    href={CONFIG.GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-500 transition-colors"
                  >
                    GitHub Portfolio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 block">
                    Base Location
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Availability status badge */}
            <div className="p-5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/30 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-xs text-stone-700 dark:text-stone-300">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Current Status: </span>
                Active Consultant at Tiger Analytics. Welcoming conversations on consulting leadership, AI architecture, and technical speaking.
              </p>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-500" />
                Send a Message
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                Have a question or interested in collaborating? Drop a note below.
              </p>

              {isSent ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 max-w-sm mx-auto">
                    Your email client will open with your pre-filled inquiry. You can also write directly to{' '}
                    <span className="font-mono text-amber-500">{CONFIG.EMAIL_ADDRESS}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Consulting Discussion / AI Solution Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project context, business challenges, or opportunities to collaborate..."
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Gowtham</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
