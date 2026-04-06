import './Resume.css'

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <h2 className="resume-title">Resume</h2>
        <a className="resume-download" href="/resume.pdf" download>
          ↓ Download PDF
        </a>
      </div>
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="resume-iframe"
      />
    </div>
  )
}
