"use client";

import { useState } from "react";
import { analytics } from "@/lib/analytics";
import { contactFormCopy } from "@/data/contactPage";

type FormState = "idle" | "loading" | "success" | "error";

/*
  Architecture note: this form POSTs to /api/contact when wired up.
  To connect to Resend: create app/api/contact/route.ts, install resend,
  and call resend.emails.send() with the form data.
  The form structure intentionally matches what Resend expects.
*/
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      /*
        Wire up: POST to /api/contact
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("Failed");
      */

      /* Simulated success until API is wired */
      await new Promise((r) => setTimeout(r, 800));
      analytics.contactSubmit();
      setState("success");
    } catch {
      setState("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-(--color-bg-elevated) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) text-sm transition-all duration-250 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-0 focus-visible:border-(--color-accent) hover:border-(--color-border-bright)";

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-(--color-bg-surface) border border-(--color-border) text-center min-h-[400px]">
        <span className="text-5xl" aria-hidden="true">✓</span>
        <h3 className="text-xl font-bold text-(--color-text-primary)">{contactFormCopy.successTitle}</h3>
        <p className="text-(--color-text-secondary) text-sm max-w-sm leading-relaxed">{contactFormCopy.successBody}</p>
        <button
          onClick={() => { setState("idle"); setFormData({ name: "", email: "", company: "", budget: "", message: "" }); }}
          className="text-sm text-(--color-accent) hover:underline mt-2 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-(--color-bg-surface) border border-(--color-border)"
      aria-label="Contact form"
      noValidate
    >
      <h2 className="text-lg font-bold text-(--color-text-primary)">{contactFormCopy.formTitle}</h2>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Name <span className="text-(--color-accent)" aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contactFormCopy.placeholders.name}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Email <span className="text-(--color-accent)" aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={contactFormCopy.placeholders.email}
            className={inputBase}
          />
        </div>
      </div>

      {/* Company + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder={contactFormCopy.placeholders.company}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="">Select a range</option>
            <option value="under-5k">Under $5k</option>
            <option value="5k-15k">$5k – $15k</option>
            <option value="15k-50k">$15k – $50k</option>
            <option value="50k-plus">$50k+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
          What are you working on? <span className="text-(--color-accent)" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
            placeholder={contactFormCopy.placeholders.message}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Error */}
      {state === "error" && (
        <p role="alert" className="text-sm text-(--color-error)">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full px-6 py-3 rounded-lg bg-(--color-accent) text-(--color-text-inverse) font-semibold text-sm shadow-[0_0_20px_var(--color-accent-glow)] hover:bg-(--color-accent-dim) hover:shadow-[0_0_28px_rgba(0,200,255,0.2)] transition-all duration-250 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
        aria-describedby={state === "error" ? "form-error" : undefined}
      >
        {state === "loading" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-(--color-text-muted) text-center">
        No spam. No newsletters unless you ask. Just a reply.
      </p>
    </form>
  );
}
