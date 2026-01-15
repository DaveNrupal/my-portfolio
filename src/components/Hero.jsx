function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">React • Full-Stack • Toronto</p>

        <h1 className="hero-title">
          Full-stack developer bridging the gap between rapid feature shipping and
          long-term architectural stability, informed by experience in tech hubs.
        </h1>

        <p className="hero-description">
          Modern web development is complex; I use AI to simplify the process
          while keeping quality high.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-wrap">
          <img src="formalImage.png" alt="Nrupal Dave" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
