// src/components/Hero.jsx
// Landing section — name, role, personal detail chips, CTA buttons.
// All content is driven from src/data/personal.js — edit only that file.

import { personal } from "../data/personal.js";

// Animated fade-up helper (inline keyframe via style tag injected once)
const injectAnimation = (() => {
  let injected = false;
  return () => {
    if (injected) return;
    injected = true;
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0);    }
      }
      @keyframes pulseSlow {
        0%, 100% { opacity: .16; }
        50%       { opacity: .26; }
      }
      .hero-fade-1 { animation: fadeUp 0.7s ease both; }
      .hero-fade-2 { animation: fadeUp 0.7s 0.12s ease both; }
      .hero-fade-3 { animation: fadeUp 0.7s 0.24s ease both; }
      .hero-fade-4 { animation: fadeUp 0.7s 0.36s ease both; }
      .hero-fade-5 { animation: fadeUp 0.7s 0.48s ease both; }
      .hero-blob   { animation: pulseSlow 6s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
  };
})();

export default function Hero() {
  injectAnimation();

  // Personal detail chips
  const chips = [
    { label: personal.degree,              color: "#AFA9EC", bg: "rgba(127,119,221,0.12)", border: "rgba(127,119,221,0.35)" },
    { label: personal.university,          color: "#5DCAA5", bg: "rgba(29,158,117,0.12)",  border: "rgba(29,158,117,0.35)"  },
    { label: `Batch of ${personal.batch}`, color: "#FAC775", bg: "rgba(186,117,23,0.12)",  border: "rgba(186,117,23,0.35)"  },
    { label: personal.location,            color: "#ED93B1", bg: "rgba(212,83,126,0.12)",  border: "rgba(212,83,126,0.35)"  },
  ];

  const [firstName, lastName] = personal.name.split(" ");

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2.5rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Background blobs ── */}
      <div
        className="hero-blob"
        style={{
          position: "absolute", borderRadius: "50%", pointerEvents: "none",
          width: 520, height: 520, background: "#7F77DD",
          top: -180, left: -140, opacity: 0.18, filter: "blur(80px)",
        }}
      />
      <div
        className="hero-blob"
        style={{
          position: "absolute", borderRadius: "50%", pointerEvents: "none",
          width: 380, height: 380, background: "#1D9E75",
          bottom: -100, right: -80, opacity: 0.15, filter: "blur(80px)",
          animationDelay: "3s",
        }}
      />
      <div
        className="hero-blob"
        style={{
          position: "absolute", borderRadius: "50%", pointerEvents: "none",
          width: 260, height: 260, background: "#D85A30",
          top: "38%", right: "22%", opacity: 0.1, filter: "blur(60px)",
          animationDelay: "1.5s",
        }}
      />

      {/* ── Avatar (top-right) ── */}
      <div
        style={{
          position: "absolute",
          right: "6%", top: "50%",
          transform: "translateY(-45%)",
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: 200, height: 200, borderRadius: "50%",
            border: "2px solid rgba(127,119,221,0.45)",
            background: "rgba(127,119,221,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}
        >
          {/* outer ring */}
          <div
            style={{
              position: "absolute", inset: -12, borderRadius: "50%",
              border: "0.5px solid rgba(127,119,221,0.18)",
            }}
          />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 56, fontWeight: 800,
              color: "#7F77DD", letterSpacing: -3,
            }}
          >
            {personal.initials}
          </span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          maxWidth: 680,
          position: "relative", zIndex: 10,
          paddingTop: 80,
        }}
      >
        {/* Status badge */}
        <div
          className="hero-fade-1"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(29,158,117,0.12)",
            border: "0.5px solid rgba(29,158,117,0.4)",
            color: "#5DCAA5",
            fontSize: 12, fontWeight: 500,
            padding: "5px 14px", borderRadius: 99,
            marginBottom: "1.5rem", letterSpacing: ".4px",
          }}
        >
          <span
            style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#1D9E75", display: "inline-block",
            }}
          />
          {personal.status}
        </div>

        {/* Name */}
        <h1
          className="hero-fade-2"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(38px, 6.5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.05,
            margin: "0 0 .4rem",
            letterSpacing: "-2px",
          }}
        >
          <span className="text-white">Hey, It's</span>
          <br />
          <span
            style={{
              WebkitTextStroke: "2px #7F77DD",
              color: "transparent",
            }}
          >
            {firstName}&nbsp;
          </span>
          <span style={{ color: "#1D9E75" }}>{lastName}</span>
        </h1>

        {/* Role */}
        <p
          className="hero-fade-3"
          style={{
            fontSize: 15, fontWeight: 600,
            color: "#7F77DD", letterSpacing: ".5px",
            textTransform: "uppercase",
            margin: "0 0 .8rem",
          }}
        >
          {personal.role}
        </p>

        {/* Tagline */}
        <p
          className="hero-fade-3"
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            margin: "0 0 2rem",
            maxWidth: 500,
          }}
        >
          {personal.tagline}
        </p>

        {/* Detail chips */}
        <div
          className="hero-fade-4"
          style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "2.2rem" }}
        >
          {chips.map((c) => (
            <span
              key={c.label}
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "7px 16px", borderRadius: 99,
                fontSize: 13, fontWeight: 500,
                background: c.bg,
                border: `0.5px solid ${c.border}`,
                color: c.color,
                cursor: "default",
                transition: "transform .15s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e)  => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="hero-fade-5"
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              background: "#7F77DD", color: "#fff",
              padding: "13px 30px", borderRadius: 10,
              fontSize: 14, fontWeight: 600,
              textDecoration: "none",
              transition: "background .2s, transform .15s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#534AB7"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={(e)  => { e.currentTarget.style.background = "#7F77DD"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            View Projects →
          </a>

          <a
            href={personal.cvLink}
            download
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "0.5px solid rgba(255,255,255,0.25)",
              padding: "13px 30px", borderRadius: 10,
              fontSize: 14, fontWeight: 500,
              textDecoration: "none",
              transition: "border-color .2s, color .2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={(e)  => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
          >
            Download CV
          </a>

          <a
            href={`mailto:${personal.email}`}
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.45)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              padding: "13px 22px", borderRadius: 10,
              fontSize: 14, fontWeight: 500,
              textDecoration: "none",
              transition: "color .2s, border-color .2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseOut={(e)  => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
          >
            ✉ Email Me
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        style={{
          position: "absolute", bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.22)",
          fontSize: 10, letterSpacing: "2.5px",
          textTransform: "uppercase",
        }}
      >
        <span>scroll</span>
        <div
          style={{
            width: 1, height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)",
          }}
        />
      </div>
    </section>
  );
}