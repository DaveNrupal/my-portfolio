function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Web Engineer</strong> with 3.5 years of experience 
              building responsive, performant, and scalable web applications. I specialize 
              in React.js, TypeScript, and Redux, with a strong focus on creating reusable 
              UI components and optimizing rendering performance.
            </p>
            <p>
              My journey in web development has taken me through exciting projects in 
              e-commerce and fintech platforms, where I've architected scalable frontend 
              systems with modular components, lazy loading, and code splitting.
            </p>
            <p>
              I'm experienced in modern front-end development practices, including testing, 
              accessibility (WCAG 2.0 AA), and CI/CD workflows. I believe in writing clean, 
              maintainable code and collaborating effectively with cross-functional teams.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">3.5+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">22%</span>
                <span className="highlight-text">Performance Improvement</span>
              </div>
            </div>
          </div>
          <div className="about-education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Ontario Graduate Certificate</h4>
              <p className="school">Conestoga College</p>
              <p className="period">Sep 2024 - April 2025</p>
              <p className="course">Computer Application Development</p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Engineering</h4>
              <p className="school">Gujarat Technological University</p>
              <p className="period">Jun 2019 - April 2022</p>
              <p className="course">Information Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
