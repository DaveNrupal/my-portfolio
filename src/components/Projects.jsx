import { useEffect, useState } from 'react'

function Projects() {
  const projects = [
    {
      title: "DineSmart Food Ordering Platform",
      description: "A full-stack food ordering web application with real-time menu updates and order status tracking. Features seamless payment integration and state management.",
      technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Stripe"],
      github: "https://github.com/DaveNrupal/DineSmart",
      highlights: [
        "Real-time order status",
        "Stripe payment integration",
        "Redux state management"
      ]
    },
    {
      title: "Job Tracker",
      description: "A MERN Stack Application designed to help users track job applications. Features include user authentication, job application management, and analytics dashboard.",
      technologies: ["React.js", "Mongo DB", "NodeJs", "ExpressJS", "REST APIs"],
      github: "https://github.com/DaveNrupal/Job-Tracker",
      highlights: [
        "Add Job Applications",
        "Manage Job Applications",
        "Browse Jobs"
      ]
    },
     {
      title: "Random Password Generator",
      description: "Full-stack app that generates random passwords, stores them encrypted, and decrypts on demand.",
      technologies: ["React.js", "Mongo DB", "NodeJs", "ExpressJS", "REST APIs"],
      github: "https://github.com/DaveNrupal/RandomPasswordGenerator",
      highlights: [
        "Generate Random Passwords",
        "Store Encrypted Passwords",
        "Decrypt Passwords on Demand"
      ]
    },
    {
      title: "Corporate Security Enhancement",
      description: "An IoT-based security monitoring system integrating ReactJS and IoT devices. Implemented API integrations for real-time data tracking and analysis with optimized front-end experience.",
      technologies: ["React.js", "IoT", "Webpack", "Bootstrap", "REST APIs"],
      highlights: [
        "Real-time data tracking",
        "IoT device integration",
        "Responsive design"
      ]
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalProjects = projects.length

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalProjects)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused, totalProjects])

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Some of the projects I've worked on
        </p>
        <div
          className="projects-slider"
          aria-live="polite"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="projects-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
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
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="projects-dots" role="tablist" aria-label="Project navigation">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`project-dot${index === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${project.title}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
