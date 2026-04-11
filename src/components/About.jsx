import './About.css'

export default function About() {
  return (
    <div className="about">
      {/* Hero split */}
      <div className="about-hero">
        <div className="about-hero-img">
          <img src="/photos/arcosanti.jpg" alt="Ella Johnson" />
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
            <h3 className="service-title">Photography</h3>
            <p className="service-desc">
              Portrait, event, landscape, and editorial photography.
              Available for commissioned work and personal projects.
            </p>
          </div>
          <div className="service">
            <h3 className="service-title">Creative Direction</h3>
            <p className="service-desc">
              Visual strategy and art direction for brands, campaigns,
              and editorial projects.
            </p>
          </div>
          <div className="service">
            <h3 className="service-title">Photo Editing</h3>
            <p className="service-desc">
              Retouching, color grading, and post-production for
              individual photos or full shoots.
            </p>
          </div>
          <div className="service">
            <h3 className="service-title">Prints</h3>
            <p className="service-desc">
              Limited edition archival prints available for purchase.
              Custom sizing and framing on request.
            </p>
          </div>
        </div>
      </div>

      {/* Second image section */}
      <div className="about-feature">
        <img src="/photos/baby.jpg" alt="Portfolio sample" />
        <div className="about-feature-caption">
          <span className="about-label">Process</span>
          <p>
            Every shoot starts with observation. Before I pick up the camera,
            I try to understand what a place wants to say — and then I listen.
          </p>
        </div>
      </div>
    </div>
  )
}
