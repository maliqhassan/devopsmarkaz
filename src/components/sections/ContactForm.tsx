"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { services, site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const budgets = ["< $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-brand-2/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-brand-2/10";

/** Delivers the message to site.email through Web3Forms — no mail server needed. */
async function sendViaWeb3Forms(data: Record<string, FormDataEntryValue>, services: string[]) {
  if (data.company_website) return; // honeypot filled: silently drop bots
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: site.web3formsKey,
      subject: `New project inquiry from ${data.name}`,
      from_name: `${site.name} Website`,
      name: data.name,
      email: data.email,
      phone: data.phone || "—",
      budget: data.budget || "—",
      services: services.length ? services.join(", ") : "—",
      message: data.message,
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.success) throw new Error("We couldn't send your message right now.");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("loading");
    setError("");
    try {
      if (site.web3formsKey) {
        await sendViaWeb3Forms(data, selected);
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, services: selected }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      setSelected([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const toggle = (s: string) => setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
              className="grid size-20 place-items-center rounded-full bg-emerald-400/10 text-emerald-400"
            >
              <CircleCheck className="size-10" />
            </motion.div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">Message sent!</h3>
            <p className="mt-3 max-w-sm text-muted">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            {/* Honeypot for bots */}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <input id="name" name="name" required minLength={2} placeholder="John Doe" className={inputClass} />
              </Field>
              <Field label="Email address" htmlFor="email">
                <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClass} />
              </Field>
              <Field label="Phone (optional)" htmlFor="phone">
                <input id="phone" name="phone" type="tel" placeholder="+92 300 0000000" className={inputClass} />
              </Field>
              <Field label="Budget" htmlFor="budget">
                <select id="budget" name="budget" defaultValue="" className={clsx(inputClass, "appearance-none")}>
                  <option value="" disabled className="bg-surface">
                    Select a range
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-surface">
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-medium text-zinc-300">I&apos;m interested in…</legend>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => {
                  const on = selected.includes(s.title);
                  return (
                    <motion.button
                      key={s.slug}
                      type="button"
                      whileTap={{ scale: 0.94 }}
                      onClick={() => toggle(s.title)}
                      aria-pressed={on}
                      className={clsx(
                        "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                        on
                          ? "border-brand-2/60 bg-brand-2/15 text-brand-2"
                          : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white",
                      )}
                    >
                      {s.title}
                    </motion.button>
                  );
                })}
              </div>
            </fieldset>

            <Field label="Project details" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell us about your project, goals and timeline…"
                className={clsx(inputClass, "resize-none")}
              />
            </Field>

            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  role="alert"
                >
                  {error} You can also email us directly at{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-3 via-brand-2 to-brand-3 bg-[length:200%_auto] px-6 py-4 text-sm font-semibold text-ink transition-[background-position] duration-700 hover:bg-right disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      {children}
    </div>
  );
}
