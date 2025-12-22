function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js"},
        { name: "TypeScript"},
        { name: "JavaScript (ES6+)"},
        { name: "HTML5"},
        { name: "CSS3"},
        { name: "Redux"},
        { name: "Next.js"},
        { name: "Tailwind CSS"}
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js"},
        { name: "Express.js"},
        { name: "RESTful APIs"},
        { name: "MongoDB"},
        { name: "PostgreSQL"}
      ]
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Git & GitHub"},
        { name: "Webpack"},
        { name: "Jest"},
        { name: "React Testing Library"},
        { name: "Cypress"},
        { name: "CI/CD"}
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
