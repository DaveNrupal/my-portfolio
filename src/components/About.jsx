function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Full-Stack Developer</strong> with 3.5+ years of experience
              building scalable, high-performance web applications across both frontend and backend.
              I specialize in React.js, TypeScript, and modern JavaScript on the frontend, along with
              Node.js and RESTful APIs on the backend.
            </p>
            <p>
              I have worked on end-to-end application development, from designing reusable UI
              components and optimizing rendering performance to implementing secure APIs,
              integrating databases, and handling authentication and business logic.
              My experience includes e-commerce and fintech platforms where reliability,
              performance, and scalability are critical.
            </p>
            <p>
              I follow best practices such as clean architecture, accessibility (WCAG 2.0 AA),
              testing, and CI/CD workflows. I enjoy collaborating with cross-functional teams
              and take ownership of features from concept to deployment, always aiming to
              write clean, maintainable, and efficient code.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">3.5+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">Full</span>
                <span className="highlight-text">Stack Coverage</span>
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
