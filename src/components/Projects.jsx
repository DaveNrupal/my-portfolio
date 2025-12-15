function Projects() {
  const projects = [
    {
      title: "Corporate Security Enhancement",
      description: "An IoT-based security monitoring system integrating ReactJS and IoT devices. Implemented API integrations for real-time data tracking and analysis with optimized front-end experience.",
      technologies: ["React.js", "IoT", "Webpack", "Bootstrap", "REST APIs"],
      highlights: [
        "Real-time data tracking",
        "IoT device integration",
        "Responsive design"
      ]
    },
    {
      title: "DineSmart Food Ordering Platform",
      description: "A full-stack food ordering web application with real-time menu updates and order status tracking. Features seamless payment integration and state management.",
      technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Stripe"],
      highlights: [
        "Real-time order status",
        "Stripe payment integration",
        "Redux state management"
      ]
    },
    {
      title: "E-commerce Platform",
      description: "Led front-end development for a scalable e-commerce platform using modern architecture patterns. Implemented lazy loading, code splitting, and modular components.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Express.js"],
      highlights: [
        "Scalable architecture",
        "Performance optimization",
        "WCAG 2.0 AA accessible"
      ]
    },
    {
      title: "Fintech Dashboard",
      description: "Developed a responsive fintech dashboard with complex data visualization and real-time updates. Focused on accessibility and SEO optimization.",
      technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
      highlights: [
        "Data visualization",
        "SEO optimized",
        "Pixel-perfect UI"
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Some of the projects I've worked on
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <svg className="project-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
