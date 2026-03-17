// src/components/Academics.jsx
// Matches the dark bold theme of the portfolio.
// Bars animate on scroll via IntersectionObserver.
// To add a semester: edit src/data/academics.js only — nothing here changes.

import { useEffect, useRef, useState } from "react";
import { academics } from "../data/academics";

// ── HELPERS ──────────────────────────────────────────────────────────────────

const ORDINALS = ["1st","2nd","3rd","4th","5th","6th","7th","8th"];

function getBarColor(sgpa) {
  if (sgpa >= 9) return { bar: "#1D9E75", glow: "rgba(29,158,117,0.4)"   };
  if (sgpa >= 8) return { bar: "#7F77DD", glow: "rgba(127,119,221,0.4)"  };
  if (sgpa >= 7) return { bar: "#FAC775", glow: "rgba(250,199,117,0.4)"  };
  return              { bar: "#D85A30", glow: "rgba(216,90,48,0.4)"    };
}

function getTrend(cur, prev) {
  if (!prev) return { text: "First semester",   color: "rgba(255,255,255,0.3)" };
  const diff = (cur - prev).toFixed(1);
  if (diff > 0) return { text: `▲ +${diff} from prev`, color: "#5DCAA5" };
  if (diff < 0) return { text: `▼ ${diff} from prev`,  color: "#F09595" };
  return              { text: "→ Same as prev",         color: "rgba(255,255,255,0.35)" };
}

function getCGPALabel(cgpa) {
  if (cgpa >= 9) return "Distinction";
  if (cgpa >= 8) return "First Class";
  if (cgpa >= 7) return "Second Class";
  return "Pass";
}

// ── STAT CARD ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, accent }) {
  return (
    <div
      className="flex-1 rounded-2xl p-6 relative overflow-hidden transition-transform duration-200 hover:-translate-y-1"
      style={{
        minWidth: 140,
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.09)",
      }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: accent }}
      />
      <p
        className="text-xs uppercase tracking-widest mb-2 font-medium"
        style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "2px" }}
      >
        {label}
      </p>
      <p
        className="font-syne font-extrabold leading-none mb-2"
        style={{ fontSize: 38, color: "#fff", letterSpacing: -1 }}
      >
        {value}
      </p>
      <span
        className="inline-block text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: `${accent}22`, color: accent }}
      >
        {sub}
      </span>
    </div>
  );
}

// ── SEMESTER CARD ─────────────────────────────────────────────────────────────

function SemCard({ s, prev, visible, delay }) {
  const { bar, glow } = getBarColor(s.sgpa);
  const pct = ((s.sgpa / 10) * 100).toFixed(1);
  const trend = getTrend(s.sgpa, prev?.sgpa);

  return (
    <div
      className="rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.08)",
        animationDelay: delay,
      }}
    >
      {/* header */}
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-xs uppercase tracking-widest font-medium"
          style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "1.5px" }}
        >
          Sem {ORDINALS[s.sem - 1]}
        </span>
        <span
          className="font-syne font-extrabold"
          style={{ fontSize: 22, color: "#fff" }}
        >
          {s.sgpa.toFixed(1)}
        </span>
      </div>

      {/* progress bar */}
      <div
        className="rounded-full overflow-hidden mb-2"
        style={{ height: 6, background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: visible ? `${pct}%` : "0%",
            background: bar,
            boxShadow: `0 0 8px ${glow}`,
            transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}`,
          }}
        />
      </div>

      {/* trend */}
      <p className="text-xs font-medium mt-1" style={{ color: trend.color }}>
        {trend.text}
      </p>
    </div>
  );
}

// ── MAIN SECTION ──────────────────────────────────────────────────────────────

export default function Academics() {
  const { semesters } = academics;
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Trigger bar animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Computed values
  const cgpa      = (semesters.reduce((a, s) => a + s.sgpa, 0) / semesters.length).toFixed(2);
  const best      = semesters.reduce((a, b) => (b.sgpa > a.sgpa ? b : a));
  const latest    = semesters[semesters.length - 1];
  const prevLast  = semesters[semesters.length - 2];
  const trendUp   = prevLast && latest.sgpa > prevLast.sgpa;

  const statCards = [
    { label: "Cumulative GPA",  value: cgpa,                  sub: getCGPALabel(Number(cgpa)), accent: "#1D9E75" },
    { label: "Best Semester",   value: best.sgpa.toFixed(1),  sub: `${ORDINALS[best.sem - 1]} Semester`,        accent: "#7F77DD" },
    { label: "Semesters Done",  value: semesters.length,      sub: trendUp ? "Trending up ↑" : "Keep going!",   accent: "#FAC775" },
    { label: "Latest SGPA",     value: latest.sgpa.toFixed(1),sub: `Sem ${ORDINALS[latest.sem - 1]}`,           accent: "#ED93B1" },
  ];

  return (
    <section
      id="academics"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        padding: "6rem 2.5rem 5rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 420, height: 420, background: "#1D9E75", top: -120, right: -80, opacity: 0.14, filter: "blur(80px)" }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 340, height: 340, background: "#7F77DD", bottom: -80, left: -60, opacity: 0.14, filter: "blur(70px)" }}
      />

      <div className="relative z-10" style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Section heading */}
        <p className="text-xs font-medium uppercase mb-2" style={{ letterSpacing: "3px", color: "#1D9E75" }}>
          Academic Performance
        </p>
        <h2
          className="font-syne font-extrabold mb-2"
          style={{ fontSize: "clamp(30px, 5vw, 52px)", color: "#fff", letterSpacing: "-1.5px" }}
        >
          My <span style={{ color: "#1D9E75" }}>Grades</span>
        </h2>
        <p className="mb-12" style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>
          Semester-wise performance across my B.E journey
        </p>

        {/* Stat cards row */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {statCards.map((c) => (
            <StatCard key={c.label} {...c} />
          ))}
        </div>

        {/* Semester grid label */}
        <p
          className="text-xs uppercase mb-4"
          style={{ letterSpacing: "2.5px", color: "rgba(255,255,255,0.25)" }}
        >
          Semester Breakdown
        </p>

        {/* Semester cards grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
        >
          {semesters.map((s, i) => (
            <SemCard
              key={s.sem}
              s={s}
              prev={semesters[i - 1]}
              visible={visible}
              delay={`${i * 0.08}s`}
            />
          ))}
        </div>

        {/* Overall CGPA bar */}
        <div
          className="mt-8 rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              Overall CGPA Progress
            </span>
            <span
              className="font-syne font-extrabold"
              style={{ fontSize: 20, color: "#fff" }}
            >
              {cgpa} <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 }}>/ 10</span>
            </span>
          </div>

          <div
            className="rounded-full overflow-hidden"
            style={{ height: 10, background: "rgba(255,255,255,0.07)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: visible ? `${(cgpa / 10) * 100}%` : "0%",
                background: "linear-gradient(90deg, #7F77DD, #1D9E75)",
                boxShadow: "0 0 14px rgba(127,119,221,0.4)",
                transition: "width 1.6s cubic-bezier(.4,0,.2,1)",
              }}
            />
          </div>

          <div className="flex justify-between mt-2">
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>0.0</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>10.0</span>
          </div>
        </div>

      </div>
    </section>
  );
}