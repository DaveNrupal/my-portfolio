function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="experience-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            3.5+ years building production web applications across React and backend services
          </p>
        </div>

        <div className="experience-timeline">
          {/* Experience 1 */}
          <article className="experience-item">
            <div className="experience-rail" aria-hidden="true">
              <span className="experience-dot"></span>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div className="experience-meta">
                  <span className="experience-company">Trailblazer Solution</span>
                  <span className="experience-sep">•</span>
                  <span className="experience-duration">May 2025 – Sep 2025</span>
                </div>

                <div className="experience-role-row">
                  <h3 className="experience-role">Full Stack Developer</h3>

                  <div className="experience-tags" aria-label="Tech stack">
                    <span className="experience-tag">React</span>
                    <span className="experience-tag">TypeScript</span>
                    <span className="experience-tag">Node.js</span>
                    <span className="experience-tag">MongoDB</span>
                    <span className="experience-tag">Jest</span>
                    <span className="experience-tag">Playwright</span>
                  </div>
                </div>
              </div>

              <ul className="experience-points">
                <li>
                  Delivered responsive UI features in <strong>React</strong> +{" "}
                  <strong>TypeScript</strong>, improving load speed by{" "}
                  <strong>22%</strong>.
                </li>
                <li>
                  Integrated <strong>Node.js</strong> services with{" "}
                  <strong>MongoDB</strong>, reducing API response time by{" "}
                  <strong>17%</strong>.
                </li>
                <li>
                  Implemented automated test coverage using <strong>Jest</strong>{" "}
                  and <strong>Playwright</strong> to reduce regressions.
                </li>
                <li>
                  Resolved production issues and improved stability, reducing
                  user-reported bugs by <strong>32%</strong>.
                </li>
              </ul>
            </div>
          </article>

          {/* Experience 2 */}
          <article className="experience-item">
            <div className="experience-rail" aria-hidden="true">
              <span className="experience-dot"></span>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div className="experience-meta">
                  <span className="experience-company">Sysbioz Solutions</span>
                  <span className="experience-sep">•</span>
                  <span className="experience-duration">Jun 2021 – Jul 2024</span>
                </div>

                <div className="experience-role-row">
                  <h3 className="experience-role">MERN Stack Developer</h3>

                  <div className="experience-tags" aria-label="Tech stack">
                    <span className="experience-tag">React</span>
                    <span className="experience-tag">JavaScript</span>
                    <span className="experience-tag">Node.js</span>
                    <span className="experience-tag">REST APIs</span>
                    <span className="experience-tag">PostgreSQL</span>
                    <span className="experience-tag">MongoDB</span>
                  </div>
                </div>
              </div>

              <ul className="experience-points">
                <li>
                  Led frontend delivery for <strong>e-commerce</strong> and{" "}
                  <strong>fintech</strong> dashboards with scalable UI components.
                </li>
                <li>
                  Improved performance with modular architecture, lazy loading,
                  and reusable components.
                </li>
                <li>
                  Defined REST API contracts and collaborated closely with backend teams.
                </li>
                <li>
                  Built unit and integration tests to improve reliability and reduce defects.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
