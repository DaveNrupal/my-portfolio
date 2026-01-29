function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">React • Full-Stack • Toronto</p>

        <h1 className="hero-title">
          Clean frontend architecture. Robust backend logic. Software that
          scales.
        </h1>

        <p className="hero-description">
          I design maintainable React systems and dependable APIs with a strong
          testing mindset. I integrate AI into my workflow to accelerate
          delivery while keeping architecture and quality standards high.
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
