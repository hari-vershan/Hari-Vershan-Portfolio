"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">Name</label>
        <input id="name" name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary focus:border-papaya focus:outline-none transition-colors" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">Email</label>
        <input id="email" name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary focus:border-papaya focus:outline-none transition-colors" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">Message</label>
        <textarea id="message" name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary focus:border-papaya focus:outline-none transition-colors resize-none" />
      </div>
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full bg-papaya text-bg font-display tracking-wider py-3 rounded-sm hover:bg-papaya/90 disabled:opacity-50 transition-all"
        data-cursor="hover"
      >
        {status === "sending" ? "TRANSMITTING..." : status === "sent" ? "TRANSMISSION SENT" : "SEND TRANSMISSION"}
      </button>
      {status === "error" && (
        <p className="text-red-light text-sm font-mono" role="alert">Failed to send. Please try again or email directly.</p>
      )}
      {status === "sent" && (
        <motion.p className="text-green-400 text-sm font-mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="status">
          Message received. I&apos;ll be in touch.
        </motion.p>
      )}
    </form>
  );
}
