import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { profile } from '../data/profile';

type Status = 'idle' | 'sending' | 'sent' | 'error';
const empty = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>('idle');
  const [sentTo, setSentTo] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Submits to Netlify Forms (see the hidden form in index.html).
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const botField = (e.currentTarget.elements.namedItem('bot-field') as HTMLInputElement | null)?.value ?? '';
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', 'bot-field': botField, ...form }).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentTo(form.email);
      setForm(empty);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const channels = [
    { icon: Mail, label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', text: profile.phoneDisplay, href: profile.phoneHref },
    { icon: Linkedin, label: 'LinkedIn', text: profile.linkedinLabel, href: profile.linkedin },
    ...(profile.github
      ? [{ icon: Github, label: 'GitHub', text: profile.github.replace(/^https?:\/\//, ''), href: profile.github }]
      : []),
    { icon: MapPin, label: 'Based in', text: profile.location },
  ];

  return (
    <Section id="contact" title="Contact" lede={profile.availability}>
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <ul className="space-y-5">
            {channels.map(({ icon: Icon, label, text, href }) => (
              <li key={label} className="flex min-w-0 gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-mute">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="block break-words font-medium hover:text-brand"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="font-medium">{text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            name="contact"
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-white p-6 md:p-8"
          >
            <h3 className="text-xl font-bold">Send a message</h3>

            {/* Spam trap: hidden from people, filled in by bots */}
            <p className="hidden">
              <label>
                Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Name</span>
                <input className="field" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Email</span>
                <input className="field" type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium">Subject</span>
              <input className="field" name="subject" value={form.subject} onChange={onChange} required />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium">Message</span>
              <textarea className="field" name="message" rows={5} value={form.message} onChange={onChange} required />
            </label>

            <div aria-live="polite">
              {status === 'sent' && (
                <p className="lightbox-panel mt-4 flex items-start gap-2 rounded-lg bg-gain/10 p-3 text-sm text-gain">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden />
                  Message sent. I'll reply to {sentTo} soon.
                </p>
              )}
              {status === 'error' && (
                <p className="lightbox-panel mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
                  <span>
                    Your message didn't send. Email me at{' '}
                    <a href={`mailto:${profile.email}`} className="font-medium underline">
                      {profile.email}
                    </a>{' '}
                    instead.
                  </span>
                </p>
              )}
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-5 w-full disabled:opacity-70">
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={18} aria-hidden />
                  Send message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
