import { useMemo, useState } from "react";

function Skills() {
  const skillCategories = useMemo(
    () => [
      {
        title: "Frontend",
        subtitle: "UI engineering & client-side architecture",
        skills: [
          "React.js",
          "CSS Architecture",
          "TypeScript",
          "JavaScript (ES6+)",
          "State Management (Redux, Mobex, Context API)",
          "Code Splitting and Lazy Loading",
        ],
      },
      {
        title: "Backend",
        subtitle: "APIs, data, and server-side development",
        skills: [
          "Node.js",
          "Express.js",
          "Python",
          "REST APIs",
          "GraphQL",
          "PHP",
          "MongoDB",
          "PostgreSQL",
        ],
      },
      {
        title: "Tools & Testing",
        subtitle: "Tooling, quality, delivery",
        skills: [
          "Git & GitHub",
          "Vite",
          "Figma",
          "Webpack",
          "Jest",
          "React Testing Library",
          "Cypress",
          "CI/CD",
          "Netlify",
        ],
      },
    ],
    []
  );

  const filters = ["All", ...skillCategories.map((c) => c.title)];
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleCategories =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeFilter);

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies I use to ship production-ready web apps
          </p>
        </div>

        {/* Filter tabs (optional but recommended) */}
        <div
          className="skills-filters"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`skills-filter ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
              role="tab"
              aria-selected={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-category"
              style={{ "--delay": `${index * 80}ms` }}
            >
              <div className="category-head">
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-subtitle">{category.subtitle}</p>
                </div>
              </div>

              <div
                className="skill-chips"
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip" tabIndex={0}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
