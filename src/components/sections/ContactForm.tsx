"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { services } from "@/data/services";
import { buildWhatsappMessage, CONTACT } from "@/lib/constants";
import type { ContactFormData } from "@/types";

type Errors = Partial<Record<keyof ContactFormData, string>>;

const initialForm: ContactFormData = {
  name: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(data: ContactFormData): Errors {
    const next: Errors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    const phoneDigits = data.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!data.message.trim() || data.message.trim().length < 10) {
      next.message = "Please add a few details (min 10 characters).";
    }
    if (data.message.length > 1000) {
      next.message = "Message is too long (max 1000 characters).";
    }
    return next;
  }

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const foundErrors = validate(form);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setSubmitting(true);
    const encodedMessage = buildWhatsappMessage(form);
    const url = `${CONTACT.whatsappHref}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          maxLength={80}
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-xl border border-border bg-surface-light px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-primary-light focus:outline-none"
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          maxLength={20}
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full rounded-xl border border-border bg-surface-light px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-primary-light focus:outline-none"
          placeholder="+91 XXXXX XXXXX"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-xs text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text">
          Company <span className="text-text-muted">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          maxLength={100}
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="w-full rounded-xl border border-border bg-surface-light px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-primary-light focus:outline-none"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-text">
          Service Interested In <span className="text-text-muted">(optional)</span>
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className="w-full rounded-xl border border-border bg-surface-light px-4 py-3 text-sm text-text focus:border-primary-light focus:outline-none"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Project Details
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={1000}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-xl border border-border bg-surface-light px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-primary-light focus:outline-none"
          placeholder="Tell us about your requirements..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
      </button>

      <p className="text-center text-xs text-text-muted">
        Submitting opens WhatsApp with your details pre-filled — no data is
        stored on our servers.
      </p>
    </form>
  );
}