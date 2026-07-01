"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { LuCheck, LuArrowRight } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Emergency / urgent",
  "Boiler repair or service",
  "Central heating",
  "Leak or pipe repair",
  "Hot water cylinder",
  "Bathroom / install",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const configured =
    site.formspreeId && site.formspreeId !== "YOUR_FORM_ID";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // If Formspree isn't set up yet, open Gmail's compose window in a new tab,
    // pre-filled and addressed to Aspect. This works in the browser even when
    // no desktop mail app is set as the default (unlike a plain mailto: link).
    if (!configured) {
      const subject = encodeURIComponent(
        `Website enquiry — ${data.get("service") || "General"}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        site.email
      )}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-soft">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue-700">
          <LuCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy">Thanks — message sent!</h3>
        <p className="mt-2 text-sm text-slatey">
          Anthony will be in touch shortly. For anything urgent, please call{" "}
          <a href={`tel:${site.phoneIntl}`} className="font-semibold text-blue-700">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-ink placeholder:text-slatey/60 focus:border-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue/20 transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" required type="tel" className={field} placeholder="08X XXX XXXX" />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor="email">
          Email <span className="font-normal text-slatey">(optional)</span>
        </label>
        <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor="service">
          What do you need?
        </label>
        <select id="service" name="service" className={field} defaultValue="">
          <option value="" disabled>
            Choose a service…
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={field}
          placeholder="Tell us what's going on…"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-flame/10 px-4 py-3 text-sm text-flame-600">
          Something went wrong sending your message. Please call {site.phoneDisplay} instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:scale-[1.01] hover:bg-flame-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <LuArrowRight className="h-4 w-4" />}
      </button>

      {!configured && (
        <p className="mt-3 text-center text-xs text-slatey">
          This opens a pre-filled Gmail message in a new tab — just press send.
        </p>
      )}
    </form>
  );
}
