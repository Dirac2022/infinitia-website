import { useState, useEffect, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';
import { Button } from './ui/Button';

import type { Props, FormState } from '../types/types';

type Status = 'idle' | 'sending' | 'success' | 'error';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export function ContactModal({ open, onClose }: Props) {
  const { lang } = useLang();
  const t = content[lang].contact;

  const [form, setForm]     = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm({ name: '', email: '', message: '' });
        setStatus('idle');
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          to_email:     'gino.janampa@infinitia.io',
          reply_to:     form.email,
        },
        PUBLIC_KEY,
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'sending') return;
    onClose();
  };

  if (!open && !visible) return null;

  return (
    <div
      className={[
        'fixed inset-0 z-[200] flex items-center justify-center p-4',
        'transition-opacity duration-200',
        visible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div
        className={[
          'relative w-full max-w-md',
          'bg-[rgba(16,16,24,0.88)] backdrop-blur-2xl',
          'border border-border-subtle rounded-2xl p-8',
          'shadow-[0_0_0_1px_rgba(108,99,255,0.15),0_32px_80px_rgba(0,0,0,0.7)]',
          'transition-all duration-200',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        ].join(' ')}
      >
        <button
          onClick={handleClose}
          disabled={status === 'sending'}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-fg-muted hover:text-fg-primary hover:bg-node transition-all duration-150 cursor-pointer disabled:opacity-40"
          aria-label="Cerrar"
        >
          <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            <span className="font-mono text-[10px] text-fg-muted uppercase tracking-[0.1em]">
              {lang === 'es' ? 'Disponibles' : 'Available'}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-fg-primary tracking-[-0.02em]">{t.title}</h2>
          <p className="text-sm text-fg-secondary mt-1 leading-relaxed">{t.subtitle}</p>
        </div>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-success/10 border border-success/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="#00E5A0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <p className="text-fg-primary font-medium mb-1">
                {lang === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
              </p>
              <p className="text-sm text-fg-secondary">
                {lang === 'es'
                  ? 'Te respondemos en menos de 24 hs.'
                  : 'We\'ll get back to you within 24 hours.'}
              </p>
            </div>
            <Button variant="ghost" onClick={handleClose} className="mt-2">
              {lang === 'es' ? 'Cerrar' : 'Close'}
            </Button>
          </div>
        ) : (
          /* Formulario */
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-fg-muted uppercase tracking-[0.08em]">
                {t.name}
              </label>
              <input
                required
                disabled={status === 'sending'}
                className="contact-input"
                placeholder={t.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-fg-muted uppercase tracking-[0.08em]">
                {t.email}
              </label>
              <input
                required
                type="email"
                disabled={status === 'sending'}
                className="contact-input"
                placeholder={t.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-fg-muted uppercase tracking-[0.08em]">
                {t.message}
              </label>
              <textarea
                required
                rows={4}
                disabled={status === 'sending'}
                className="contact-input"
                placeholder={t.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
            </div>

            {status === 'error' && (
              <p className="text-[13px] text-danger">
                {lang === 'es'
                  ? 'Hubo un error al enviar. Intentá de nuevo.'
                  : 'Something went wrong. Please try again.'}
              </p>
            )}

            <Button
              variant="primary"
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? (lang === 'es' ? 'Enviando...' : 'Sending...')
                : t.submit}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
