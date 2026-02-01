function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-header">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-content">
          {/* LEFT: Principles */}
          <div className="about-card">
            <h3 className="about-card-title">How I Work</h3>

            <ul className="about-list">
              <li>
                <span className="about-checkbox" aria-hidden="true" />
                <span className="about-item-text">
                  <strong>Product-first thinking:</strong> I don’t just build features, I dig into the
                  “why” and translate technical requirements into intuitive UX.
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true" />
                <span className="about-item-text">
                  <strong>Engineering for growth:</strong> I design modular systems that support rapid iteration
                  without accumulating unnecessary technical debt.
                </span>
              </li>

              <li>
                <span className="about-checkbox" aria-hidden="true" />
                <span className="about-item-text">
                  <strong>Full-cycle ownership:</strong> From database schema to final UI polish, I’m comfortable
                  owning the whole lifecycle - APIs, performance, and frontend details.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Highlights */}
          <div className="about-card">
            <h3 className="about-card-title">What you can expect</h3>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">3.5+</span>
                <span className="highlight-text">Years Experience</span>
              </div>

              <div className="highlight">
                <span className="highlight-number">React</span>
                <span className="highlight-text">UI Architecture</span>
              </div>

              <div className="highlight">
                <span className="highlight-number">APIs</span>
                <span className="highlight-text">Performance + Reliability</span>
              </div>
            </div>

            <p className="about-note">
              <span className="about-note-label">Working style:</span>
              I communicate early, document decisions, and prefer small iterative releases over “big bang” changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
