"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface A11ySettings {
  fontSize: number; // 0 = default, 1 = large, 2 = extra large
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
}

const defaultSettings: A11ySettings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  reduceMotion: false,
};

const fontSizes = ["16px", "18px", "20px"];
const fontLabels = ["Default", "Large", "Extra Large"];

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);
  const { theme, toggleTheme } = useTheme();

  // Apply settings to document
  const applySettings = useCallback((s: A11ySettings) => {
    const html = document.documentElement;
    html.style.setProperty("--base-font-size", fontSizes[s.fontSize]);
    html.classList.toggle("high-contrast", s.highContrast);
    html.classList.toggle("grayscale", s.grayscale);
    html.classList.toggle("highlight-links", s.highlightLinks);
    html.classList.toggle("readable-font", s.readableFont);
    html.classList.toggle("reduce-motion", s.reduceMotion);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("a11y");
    if (stored) {
      const parsed = JSON.parse(stored);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, [applySettings]);

  const update = (partial: Partial<A11ySettings>) => {
    const next = { ...settings, ...partial };
    setSettings(next);
    applySettings(next);
    localStorage.setItem("a11y", JSON.stringify(next));
  };

  const resetAll = () => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem("a11y");
  };

  const hasChanges =
    settings.fontSize !== 0 ||
    settings.highContrast ||
    settings.grayscale ||
    settings.highlightLinks ||
    settings.readableFont ||
    settings.reduceMotion;

  return (
    <>
      {/* Trigger button — fixed left side */}
      <button
        onClick={() => setOpen(!open)}
        className="a11y-link fixed left-4 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group"
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          boxShadow: "var(--card-shadow)",
        }}
        aria-label="Accessibility settings"
        title="Accessibility settings"
      >
        <svg
          className="a11y-icon w-5 h-5 group-hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "var(--text-muted)" }}
        >
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v6" />
          <path d="M8 21l2.5-7h3L16 21" />
          <path d="M6 12h12" />
        </svg>
        {hasChanges && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent-blue" />
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[59] bg-black/20 dark:bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="fixed left-4 top-1/2 z-[60] w-72 rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
              }}
              initial={{ opacity: 0, x: -20, y: "-50%" }}
              animate={{ opacity: 1, x: 0, y: "-50%" }}
              exit={{ opacity: 0, x: -20, y: "-50%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="font-display text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Accessibility
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-70 transition-opacity"
                  style={{ background: "var(--bg-tertiary)" }}
                  aria-label="Close"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-4 flex flex-col gap-3">
                {/* Theme Toggle */}
                <ToggleRow
                  label="Dark Mode"
                  icon={
                    theme === "dark" ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                    )
                  }
                  active={theme === "dark"}
                  onToggle={toggleTheme}
                />

                {/* Font Size */}
                <div
                  className="rounded-xl p-3"
                  style={{ background: "var(--bg-tertiary)" }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <svg className="a11y-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-muted)" }}><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>
                    <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                      Font Size: {fontLabels[settings.fontSize]}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {fontLabels.map((label, i) => (
                      <button
                        key={label}
                        onClick={() => update({ fontSize: i })}
                        className="flex-1 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200"
                        style={{
                          background: settings.fontSize === i ? "#2563eb" : "var(--bg-secondary)",
                          color: settings.fontSize === i ? "#ffffff" : "var(--text-muted)",
                          border: `1px solid ${settings.fontSize === i ? "#2563eb" : "var(--border)"}`,
                        }}
                      >
                        {["Aa", "Aa+", "Aa++"][i]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggle options */}
                <ToggleRow
                  label="High Contrast"
                  icon={<svg className="a11y-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 010 20V2z" fill="currentColor" /></svg>}
                  active={settings.highContrast}
                  onToggle={() => update({ highContrast: !settings.highContrast })}
                />
                <ToggleRow
                  label="Grayscale"
                  icon={<svg className="a11y-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 3v18" /><path d="M3 12h9" /></svg>}
                  active={settings.grayscale}
                  onToggle={() => update({ grayscale: !settings.grayscale })}
                />
                <ToggleRow
                  label="Highlight Links"
                  icon={<svg className="a11y-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>}
                  active={settings.highlightLinks}
                  onToggle={() => update({ highlightLinks: !settings.highlightLinks })}
                />
                <ToggleRow
                  label="Readable Font"
                  icon={<svg className="a11y-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></svg>}
                  active={settings.readableFont}
                  onToggle={() => update({ readableFont: !settings.readableFont })}
                />
                <ToggleRow
                  label="Reduce Motion"
                  icon={<svg className="a11y-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>}
                  active={settings.reduceMotion}
                  onToggle={() => update({ reduceMotion: !settings.reduceMotion })}
                />

                {/* Reset */}
                {hasChanges && (
                  <button
                    onClick={resetAll}
                    className="mt-1 w-full py-2 rounded-xl text-xs font-medium transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "var(--bg-tertiary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Reset All Settings
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ToggleRow({
  label,
  icon,
  active,
  onToggle,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="a11y-link w-full flex items-center gap-3 rounded-xl p-3 transition-all duration-200"
      style={{
        background: active ? "var(--accent-glow)" : "var(--bg-tertiary)",
        border: `1px solid ${active ? "#2563eb40" : "transparent"}`,
      }}
    >
      <span style={{ color: active ? "#2563eb" : "var(--text-muted)" }}>
        {icon}
      </span>
      <span
        className="text-xs font-medium flex-1 text-left"
        style={{ color: active ? "#2563eb" : "var(--text-secondary)" }}
      >
        {label}
      </span>
      {/* Toggle switch */}
      <div
        className="w-9 h-5 rounded-full relative transition-colors duration-200"
        style={{ background: active ? "#2563eb" : "var(--border)" }}
      >
        <motion.div
          className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm"
          animate={{ left: active ? 18 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </button>
  );
}
