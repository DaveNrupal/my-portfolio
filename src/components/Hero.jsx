function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Nrupal Dave</h1>
        <h2 className="hero-role">Web Engineer</h2>
        <p className="hero-description">
          Building responsive, performant, and scalable web applications 
          with 3.5+ years of experience in React.js, TypeScript, and modern 
          front-end technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
        <div className="hero-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Toronto, ON, Canada</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="code-block">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <pre className="code-content">
{`const developer = {
  name: "Nrupal Dave",
  role: "Web Engineer",
  skills: [
    "React.js",
    "TypeScript",
    "JavaScript"
  ],
  passion: "Building 
    great user experiences"
};`}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
