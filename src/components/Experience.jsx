function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          3.5+ years of professional experience building scalable web
          applications
        </p>

        <div className="experience-timeline">
          {/* Experience 1 */}
          <div className="experience-item">
            <div className="experience-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 3h-8v4h8V3z"></path>
              </svg>
            </div>

            <div className="experience-details">
              <span className="experience-company">
                Trailblazer Solution
              </span>
              <span className="experience-duration">May 2025 - Sep 2025</span>
              <h3 className="experience-role">Full Stack Developer</h3>

              <ul>
                <li>
                  Developed responsive features using <strong>React.js</strong>{" "}
                  and <strong>TypeScript</strong>, improving load speed by{" "}
                  <strong>22%</strong>
                </li>
                <li>
                  Integrated <strong>Node.js</strong> &{" "}
                  <strong>MongoDB</strong> APIs, reducing response time by{" "}
                  <strong>17%</strong>
                </li>
                <li>
                  Implemented automated testing using{" "}
                  <strong>Jest</strong> and{" "}
                  <strong>Playwright</strong>
                </li>
                <li>
                  Resolved production issues, reducing user-reported bugs by{" "}
                  <strong>32%</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience-item">
            <div className="experience-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 3h-8v4h8V3z"></path>
              </svg>
            </div>

            <div className="experience-details">
              <span className="experience-company">
                Sysbioz Solutions
              </span>
              <span className="experience-duration">June 2021 - July 2024</span>
              <h3 className="experience-role">MERN Stack Developer</h3>

              <ul>
                <li>
                  Led frontend development for <strong>e-commerce</strong> and{" "}
                  <strong>fintech</strong> platforms
                </li>
                <li>
                  Built scalable UI architecture with modular components and
                  lazy loading
                </li>
                <li>
                  Defined RESTful API contracts with backend teams
                </li>
                <li>
                  Created unit & integration tests ensuring high reliability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
