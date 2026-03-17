// src/data/skills.js
// ================================================================
//   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR SKILLS
// ================================================================
//
//  HOW TO ADD A LANGUAGE:
//    Copy any object in `languages` and change name/icon/colors
//
//  HOW TO ADD A TECH ITEM to an existing group:
//    Find the group in `tech` and add a string to its `items` array
//    e.g.  items: ["React", "Next.js", "Vite"]  ← just add "Vite"
//
//  HOW TO ADD A NEW TECH CATEGORY:
//    Copy any object in `tech`, change category/accent/items
//
// ================================================================

export const skills = {

  // ── LANGUAGES ─────────────────────────────────────────────────
  // icon  : 2-char label shown inside the badge
  // color : text color
  // bg    : card background (low opacity rgba)
  // border: card border     (medium opacity rgba)
  languages: [
    {
      name:   "JavaScript",
      icon:   "JS",
      color:  "#FAC775",
      bg:     "rgba(250,199,117,0.12)",
      border: "rgba(250,199,117,0.35)",
    },
    {
      name:   "Java",
      icon:   "Java",
      color:  "#ED93B1",
      bg:     "rgba(212,83,126,0.12)",
      border: "rgba(212,83,126,0.35)",
    },
    {
      name:   "TypeScript",
      icon:   "TS",
      color:  "#378ADD",
      bg:     "rgba(55,138,221,0.12)",
      border: "rgba(55,138,221,0.35)",
    },
    {
      name:   "HTML",
      icon:   "HT",
      color:  "#F0997B",
      bg:     "rgba(216,90,48,0.12)",
      border: "rgba(216,90,48,0.35)",
    },
    {
      name:   "CSS",
      icon:   "CS",
      color:  "#85B7EB",
      bg:     "rgba(55,138,221,0.10)",
      border: "rgba(55,138,221,0.28)",
    },
    {
      name: "ReactJs",
      icon: "JSX",
      color: "#378ADD",
      bg:     "rgba(212,83,126,0.12)",
      border: "rgba(212,83,126,0.35)", 
    },
    {
      name: "C",
      icon: "C",
      color: "#00599C",
      bg: "rgba(0,89,156,0.12)",
      border: "rgba(0,89,156,0.35)",
    },
    {
      name: "Python",
      icon: "Py",
      color: "#3776AB",
      bg: "rgba(55,118,171,0.12)",
      border: "rgba(55,118,171,0.35)",
    },
    // ↓ Add more languages here — just copy the block above
    // {
    //   name:   "Rust",
    //   icon:   "Rs",
    //   color:  "#F0997B",
    //   bg:     "rgba(216,90,48,0.12)",
    //   border: "rgba(216,90,48,0.35)",
    // },
  ],

  // ── TECH STACK ────────────────────────────────────────────────
  // category : group name shown on card header
  // accent   : theme color for the whole card
  // items    : array of tech names shown as pills
  //            ← just add a string to add a new tech item
  tech: [
    {
      category: "Frontend",
      accent:   "#1D9E75",
      items:    ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
      category: "Backend",
      accent:   "#7F77DD",
      items:    ["Node.js", "Express.js", "REST APIs", "JWT Auth & Tokens", "Zod Validation"],
    },
    {
      category: "Database",
      accent:   "#FAC775",
      items:    ["MongoDB", "Mongoose", "PostgreSQL", "Drizzle", "Prisma"],
    },
    {
      category: "Full Stack",
      accent:   "#ED93B1",
      items:    ["MERN Stack", "MVC Pattern", "Monorepo"],
    },
    {
      category: "Tools & DevOps",
      accent:   "#5DCAA5",
      items:    ["Git", "GitHub", "VS Code", "Postman",],
    },
    // ↓ Add a new category here — just copy the block above
    // {
    //   category: "Mobile",
    //   accent:   "#378ADD",
    //   items:    ["React Native", "Expo"],
    // },
  ],

};