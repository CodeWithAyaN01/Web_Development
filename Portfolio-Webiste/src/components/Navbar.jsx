// src/components/Navbar.jsx
// Fixed navbar — transparent at top, glassy on scroll.
// Nav links scroll to each section by id.
// Edit the `navLinks` array to add/remove links.

import { useState, useEffect } from "react";

const navLinks = ["About", "Academics", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        fontFamily: "'DM Sans', sans-serif",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.08)" : "none",
        transition: "background 0.3s ease, border-bottom 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: "#fff",
          letterSpacing: "-0.5px",
        }}
      >
        AyaN<span style={{ color: "#7F77DD" }}>.</span>dev
        {/* ↑ Change "RK" to your initials */}
      </div>

      {/* Nav links — hidden on small screens (add responsive logic if needed) */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                position: "relative",
                paddingBottom: 2,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a
        href="#contact"
        style={{
          background: "#7F77DD",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "none",
          fontFamily: "'DM Sans', sans-serif",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#534AB7")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#7F77DD")}
      >
        Hire Me
      </a>
    </nav>
  );
}