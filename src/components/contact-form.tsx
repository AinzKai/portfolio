"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const inputClasses =
  "w-full rounded-xl border border-border bg-surface-secondary/70 px-4 py-3 text-foreground placeholder-muted transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceInterest: "Business Website",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Your email address is required";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        valid = false;
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are looking to build";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters so I can understand your project";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Honeypot check for bots
    if (formData.website) {
      setState("success");
      return;
    }

    if (!validate()) return;

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        setSubmitError(data.error || "Failed to deliver message. Please reach out directly via email.");
        setState("error");
        return;
      }

      setState("success");
    } catch {
      setSubmitError("Network error. Please email me directly at hello@muhammaduzair.dev.");
      setState("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      serviceInterest: "Business Website",
      message: "",
      website: "",
    });
    setErrors({});
    setState("idle");
    setSubmitError("");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-success/30 bg-success/5 p-8 text-center sm:p-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <Icon name="Check" className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Message Received!
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Thank you for reaching out, <span className="font-semibold text-foreground">{formData.name}</span>.
          I review all incoming inquiries and will reply to <span className="font-semibold text-foreground">{formData.email}</span> within 2 hours during business hours.
        </p>
        <button
          onClick={handleReset}
          className="mt-6 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface-secondary"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={state === "submitting"}
            placeholder="Sarah Jenkins"
            className={cn(inputClasses, errors.name && "border-error focus:ring-error/20")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={state === "submitting"}
            placeholder="sarah@example.com"
            className={cn(inputClasses, errors.email && "border-error focus:ring-error/20")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Business / Company <span className="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={state === "submitting"}
            placeholder="e.g. Acme Hospitality"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="serviceInterest"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Primary Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            disabled={state === "submitting"}
            className={inputClasses}
          >
            <option value="Landing Page">Landing Page ($499+)</option>
            <option value="Business Website">Business Website ($899+)</option>
            <option value="Custom Ordering/Booking">Custom Ordering / Booking System</option>
            <option value="Retention Automation">Customer Retention Automation</option>
            <option value="General Question">General Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Project Details <span className="text-accent">*</span>
          </label>
          <span className="text-[11px] text-muted">
            {formData.message.length} chars
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          disabled={state === "submitting"}
          rows={5}
          placeholder="Tell me about what you're trying to build, your current setup, timeline, or any specific features required..."
          className={cn(
            inputClasses,
            "resize-y",
            errors.message && "border-error focus:ring-error/20",
          )}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-error">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot for spam bots */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {submitError && (
        <div role="alert" className="rounded-xl border border-error/30 bg-error/10 p-3.5 text-xs text-error">
          {submitError}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={state === "submitting"}
        className="w-full sm:w-auto"
      >
        {state === "submitting" ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending Inquiry...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <span>Send Project Inquiry</span>
            <Icon name="ArrowRight" className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
}