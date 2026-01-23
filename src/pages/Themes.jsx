/*import "./Themes.css";

function Themes() {
  return (
    <section className="themes">
      <h1>Themes</h1>
      <p>Event themes go here</p>
    </section>
  );
}

export default Themes;*/

import React from "react";
import "./themes.css";

/* ===============================
   THEMES DATA
================================ */
const themes = [
  {
    id: 1,
    title: "EdTech",
    tagline: "Innovate solutions to transform learning",
    description:
      "Build technology-driven solutions that improve education, learning experiences, accessibility, and skill development.",
    icon: "📘",
    variant: "theme-card--shadow",
    bgImage: "/images/themes/Bg_image.jpeg"
  },
  {
    id: 2,
    title: "Blockchain & Web3",
    tagline: "Innovate with blockchain and Web3 technologies",
    description:
      "Create decentralized applications, smart contracts, secure systems, and next-generation Web3 solutions.",
    icon: "⛓️",
    variant: "theme-card--crimson",
    bgImage: "/images/themes/Bg_image.jpeg"
  },
  {
    id: 3,
    title: "HealthTech",
    tagline: "Wellness Through Technology",
    description:
      "Develop innovative solutions for healthcare, fitness, mental well-being, diagnostics, and medical accessibility.",
    icon: "🩺",
    variant: "",
    bgImage: "/images/themes/Bg_image.jpeg"
  },
  {
    id: 4,
    title: "Sustainability",
    tagline: "Create tech for a sustainable planet",
    description:
      "Design solutions focused on climate action, renewable energy, waste management, and environmental protection.",
    icon: "🌱",
    variant: "theme-card--shadow",
    bgImage: "/images/themes/Bg_image.jpeg"
  },
  {
    id: 5,
    title: "Open Innovation",
    tagline: "Explore ideas beyond boundaries",
    description:
      "Work on any innovative idea that does not fit into other categories. Creativity and originality are encouraged.",
    icon: "✨",
    variant: "theme-card--crimson",
    bgImage: "/images/themes/Bg_image.jpeg"
  },
];

/* ===============================
   COMPONENT
================================ */
const Themes = () => {
  return (
    <section className="themes" id="themes">
      {/* Header */}
      <div className="themes__header">
        <h2 className="themes__title">
          Hackathon Themes <span style={{ color: "#b3001b" }}>影</span>
        </h2>
        <p className="themes__subtitle">
          Choose your path. Every shadow tells a story.
        </p>
      </div>

      {/* Themes Grid */}
      <div className="themes__grid">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`theme-card ${theme.variant}`}
          >
            {/* BACKGROUND IMAGE LAYER */}
            <div 
              className="theme-card__bg" 
              style={{ backgroundImage: `url(${theme.bgImage})` }}
            ></div>

            {/* Always visible content */}
            <div className="theme-card__icon">
              {theme.icon}
            </div>

            <h3 className="theme-card__title">
              {theme.title}{" "}
              <span style={{ color: "#b3001b" }}>影</span>
            </h3>

            {/* Revealed on hover */}
            <div className="theme-card__content">
              <p className="theme-card__tagline">
                {theme.tagline}
              </p>
              <p className="theme-card__desc">
                {theme.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
