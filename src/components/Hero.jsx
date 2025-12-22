function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Nrupal Dave</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <p className="hero-description">
           Delivering high-performance, scalable web applications with React, Node.js, and modern JavaScript. Specialized in responsive UI design, RESTful APIs, database optimization, and CI/CD workflows.
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
    </section>
  )
}

export default Hero
