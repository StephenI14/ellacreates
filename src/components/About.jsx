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
            Photographer and creative based in Arizona. I make pictures of the
            world as I find it — desert landscapes, quiet architecture, and the
            small moments between.
          </p>
          <p className="about-bio">
            My work lives at the intersection of observation and feeling.
            I'm drawn to stillness, texture, and light that tells the truth.
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
        <img src="/photos/boyce_thompson.jpg" alt="Portfolio sample" />
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
