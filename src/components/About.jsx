import './About.css'

export default function About() {
  return (
    <div className="about">
      {/* Hero split */}
      <div className="about-hero">
        <div className="about-hero-img">
          <img src="/photos/selfportrait.jpg" alt="Ella Johnson" />
        </div>
        <div className="about-hero-text">
          <span className="about-label">About</span>
          <h2 className="about-heading">Ella Johnson</h2>
          <p className="about-bio">
            I'm an aspiring brand strategist based in New Jersey with a passion
            for public relations, strategic communications, and creative
            storytelling. With experience in university relations, event
            marketing, and digital content creation, I transform ideas into
            meaningful brand experiences.
          </p>
          <p className="about-bio">
            My work spans campaign development, promotional design, press
            writing, visual media, and experimental art. Everything I create is
            guided by a commitment to authentic connection and purposeful
            creativity.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="about-divider" />

      {/* Services */}
      <div className="about-services">
        <span className="about-label">Services</span>

        <div className="services-grid">
          <div className="service">
            <h3 className="service-title">Media Relations</h3>
          </div>
          <div className="service">
            <h3 className="service-title">Crisis Communications</h3>
          </div>
          <div className="service">
            <h3 className="service-title">Content Creation</h3>
          </div>
          <div className="service">
            <h3 className="service-title">Event Planning</h3>
          </div>
          <div className="service">
            <h3 className="service-title">Social Media Management</h3>
          </div>
          <div className="service">
            <h3 className="service-title">Outreach</h3>
          </div>
        </div>
      </div>

    </div>
  )
}
