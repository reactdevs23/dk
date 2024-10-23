export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dalim Kumar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I do Convert
            <br /> Figma to react js
          </p>
        </div>
        <a
          href="https://www.facebook.com/dalimkumardas2"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary button"
        >
          Get In Touch
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
