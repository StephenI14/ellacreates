import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry')
    const body = encodeURIComponent(
      `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`mailto:ellacorrin@icloud.com?subject=${subject}&body=${body}`, '_self')
    setSent(true)
  }

  return (
    <div className="contact">
      <div className="contact-header">
        <span className="contact-label">Contact</span>
        <h2 className="contact-heading">Get in touch</h2>
        <p className="contact-sub">
          Available for commissions, collaborations, and inquiries.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="contact-info-block">
            <span className="info-label">Email</span>
            <span className="info-value">ellacorrin@icloud.com</span>
          </div>
          <div className="contact-info-block">
            <span className="info-label">Based in</span>
            <span className="info-value">New Jersey, USA</span>
          </div>
          <div className="contact-info-block">
            <span className="info-label">Instagram</span>
            <span className="info-value">@xxellajohnson / @xxellacreates</span>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-sent">
              <span className="sent-icon">✓</span>
              <p>Message sent. I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Commission / Collaboration / Print / Other"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
