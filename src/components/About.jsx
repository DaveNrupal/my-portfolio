function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-header">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-content">
          {/* Left: checklist */}
          <div className="about-card">
            <h3 className="about-card-title">What I do</h3>

            <ul className="about-list">
              <li>
                <span className="about-checkbox" aria-hidden="true"></span>
                <span className="about-item-text">
                  3.5+ years building scalable web applications across frontend
                  and backend
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true"></span>
                <span className="about-item-text">
                  React.js, TypeScript, Node.js and REST API design
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true"></span>
                <span className="about-item-text">
                  Performance optimization and maintainable component
                  architecture
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true"></span>
                <span className="about-item-text">
                  Authentication, database design, and CI/CD workflows
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true"></span>
                <span className="about-item-text">
                  Experience in e-commerce and fintech products
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true"></span>
                <span className="about-item-text">
                  Accessibility (WCAG) and testing mindset
                </span>
              </li>
            </ul>
          </div>

          {/* Right: metrics */}
          <div className="about-card about-metrics">
            <h3 className="about-card-title">Highlights</h3>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">3.5+</span>
                <span className="highlight-text">Years experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">Full</span>
                <span className="highlight-text">Stack coverage</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">22%</span>
                <span className="highlight-text">Perf improvement</span>
              </div>
            </div>

            <div className="about-note">
              <span className="about-note-label">Open to:</span>
              Full-time roles (React / Frontend / Full-stack)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
