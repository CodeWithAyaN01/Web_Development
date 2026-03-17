// src/components/Projects.jsx
// Shows: Project name, description, tech stack, GitHub link, Live link
// Edit src/data/projects.js only — never touch this file

import { useRef, useEffect, useState } from "react";
import { projects } from "../data/projects";

// ── PROJECT CARD ──────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `0.5px solid ${hovered ? "rgba(127,119,221,0.6)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 16,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "transform .22s ease, border-color .22s ease",
      }}
    >
      {/* top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "#7F77DD",
        borderRadius: "16px 16px 0 0",
        opacity: hovered ? 1 : 0.3,
        transition: "opacity .22s",
      }}/>

      {/* Project title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 20, fontWeight: 800,
        color: "#fff", letterSpacing: "-0.5px",
        margin: 0,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 14,
        color: "rgba(255,255,255,0.5)",
        lineHeight: 1.75,
        margin: 0,
        flexGrow: 1,
      }}>
        {project.description}
      </p>

      {/* Tech stack pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontSize: 11, fontWeight: 500,
            padding: "4px 10px", borderRadius: 99,
            background: "rgba(127,119,221,0.12)",
            border: "0.5px solid rgba(127,119,221,0.35)",
            color: "#AFA9EC",
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links row */}
      <div style={{ display: "flex", gap: 8 }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, textAlign: "center",
              padding: "9px", borderRadius: 10,
              fontSize: 13, fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              transition: "background .18s, color .18s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={(e)  => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
          >
            ⌥ GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, textAlign: "center",
              padding: "9px", borderRadius: 10,
              fontSize: 13, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              background: "#7F77DD",
              color: "#fff",
              transition: "opacity .18s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseOut={(e)  => (e.currentTarget.style.opacity = "1")}
          >
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

// ── MAIN SECTION ──────────────────────────────────────────────────────────────
export default function Projects() {
  const sectionRef            = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        padding: "6rem 2.5rem 5rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity .6s ease, transform .6s ease",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", borderRadius: "50%", pointerEvents: "none",
        width: 420, height: 420, background: "#7F77DD",
        top: -100, right: -80, opacity: 0.11, filter: "blur(90px)",
      }}/>
      <div style={{
        position: "absolute", borderRadius: "50%", pointerEvents: "none",
        width: 320, height: 320, background: "#1D9E75",
        bottom: -80, left: -60, opacity: 0.11, filter: "blur(70px)",
      }}/>

      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 10 }}>

        {/* Section label */}
        <p style={{
          fontSize: 11, letterSpacing: "3px",
          textTransform: "uppercase", color: "#7F77DD",
          marginBottom: 8, fontWeight: 500,
        }}>
          What I've Built
        </p>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(30px, 5vw, 52px)",
          fontWeight: 800, color: "#fff",
          letterSpacing: "-1.5px", marginBottom: 6,
        }}>
          My <span style={{ color: "#7F77DD" }}>Projects</span>
        </h2>
        <p style={{
          fontSize: 15, color: "rgba(255,255,255,0.4)",
          marginBottom: "3rem",
        }}>
          Things I've designed, built, and shipped — {projects.length} projects so far
        </p>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 18,
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}