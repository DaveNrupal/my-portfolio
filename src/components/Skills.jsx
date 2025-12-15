function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Redux", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 85 },
        { name: "React Testing Library", level: 85 },
        { name: "Cypress", level: 75 },
        { name: "CI/CD", level: 80 }
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
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
