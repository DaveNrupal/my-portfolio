function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">React • Full-Stack • Toronto</p>

        <h1 className="hero-title">
          Building modern web applications with clean UI and reliable APIs.
        </h1>

        <p className="hero-description">
          I’m Nrupal Dave - a full-stack developer focused on React interfaces,
          performance, and maintainable code. I enjoy shipping polished
          experiences that work well across devices.
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

      {/* RIGHT CONTENT – AVATAR */}
      <div className="hero-visual">
        <img
          src="avatar2.png"
          alt="Illustrated portrait of Nrupal Dave"
          className="hero-blend-avatar"
        />
      </div>
    </section>
  );
}

export default Hero;
