"use client";
import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-50px" });

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

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary glow-input focus:outline-none transition-all duration-300 placeholder-text-muted/30";

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {[
        { id: "name", label: "Name", type: "text" },
        { id: "email", label: "Email", type: "email" },
      ].map((field, i) => (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
        >
          <label htmlFor={field.id} className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required
            className={inputClasses}
            placeholder={`Your ${field.label.toLowerCase()}`}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <label htmlFor="message" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Your message..."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="relative w-full bg-papaya text-bg font-display tracking-wider py-3 rounded-sm hover:bg-papaya/90 disabled:opacity-50 transition-all overflow-hidden group"
          data-cursor="hover"
        >
          {/* Shimmer sweep effect on the button */}
          <span className="absolute inset-0 overflow-hidden">
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                animation: "shimmer-sweep 2s ease-in-out infinite",
              }}
            />
          </span>
          <span className="relative z-10">
            {status === "sending" ? "TRANSMITTING..." : status === "sent" ? "✓ TRANSMISSION SENT" : "SEND TRANSMISSION"}
          </span>
        </button>
      </motion.div>

      {status === "error" && (
        <motion.p
          className="text-red-light text-sm font-mono"
          role="alert"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Failed to send. Please try again or email directly.
        </motion.p>
      )}
      {status === "sent" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          role="status"
          className="text-center"
        >
          <p className="text-green-400 text-sm font-mono">
            Message received. I&apos;ll be in touch.
          </p>
          {/* Success particles */}
          <div className="relative h-8 overflow-hidden mt-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-papaya"
                style={{ left: `${10 + i * 12}%` }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -30, opacity: 0, x: (i % 2 === 0 ? 1 : -1) * 10 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}
