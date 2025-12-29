function Contact() {
  const email = "nrupal0401@gmail.com";
  const subject = "Let's Connect";
  const body =
    "Hello Nrupal,\n\nI came across your portfolio and would like to connect.\n\nThanks,";

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="contact-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to full-time opportunities. If you’d like to talk, the fastest way is email.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            <a className="contact-card" href={mailto}>
              <div className="contact-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <p className="contact-value">{email}</p>
              </div>
              <span className="contact-arrow" aria-hidden="true">→</span>
            </a>

            <a
              className="contact-card"
              href="https://github.com/DaveNrupal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="contact-details">
                <p className="contact-label">GitHub</p>
                <p className="contact-value">github.com/DaveNrupal</p>
              </div>
              <span className="contact-arrow" aria-hidden="true">→</span>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/nrupaldave0405"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="contact-details">
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">linkedin.com/in/nrupaldave0405</p>
              </div>
              <span className="contact-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
