import { useState } from 'react'
import { Mail, MessageSquare, Send, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have questions about MoldKit? We're here to help with support and feedback</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <Mail size={24} />
              <h3>Email Support</h3>
              <p>Get help with technical issues or general questions</p>
              <a href="mailto:support@moldkit.ai" className="contact-link">
                support@moldkit.ai
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="info-card">
              <MessageSquare size={24} />
              <h3>Feedback</h3>
              <p>Share your experience and help us improve MoldKit</p>
              <a href="mailto:feedback@moldkit.ai" className="contact-link">
                feedback@moldkit.ai
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="info-card">
              <ExternalLink size={24} />
              <h3>API Documentation</h3>
              <p>Integrate MoldKit into your applications</p>
              <a 
                href="https://mold-kit.onrender.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                View API Docs
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send us a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="api-question">API Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How accurate is the mold detection?</h4>
              <p>Our AI model achieves 95%+ accuracy, trained on thousands of mold samples across various environments.</p>
            </div>
            <div className="faq-item">
              <h4>What image formats are supported?</h4>
              <p>We support JPG, PNG, and WebP formats. For best results, use clear, well-lit images.</p>
            </div>
            <div className="faq-item">
              <h4>Is my data secure?</h4>
              <p>Yes, we prioritize data security. Images are processed securely and not stored permanently.</p>
            </div>
            <div className="faq-item">
              <h4>Can I use the API commercially?</h4>
              <p>Yes, our API is available for commercial use. Contact us for pricing and integration details.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 2rem 0;
          height: calc(100vh - 100px);
          overflow-y: auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .contact-header p {
          font-size: 1.125rem;
          color: #6B7280;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .contact-content::-webkit-scrollbar {
          width: 8px;
        }

        .contact-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .contact-content::-webkit-scrollbar-thumb {
          background: #166534;
          border-radius: 4px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .info-card svg {
          color: #166534;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1F2937;
        }

        .info-card p {
          color: #6B7280;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #166534;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #14532D;
        }

        .contact-form-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          height: fit-content;
        }

        .contact-form h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #1F2937;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #374151;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #166534;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          justify-content: center;
          font-size: 1.125rem;
        }

        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 8px;
          color: #166534;
          text-align: center;
        }

        .faq-section {
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          max-height: 60vh;
          overflow-y: auto;
        }

        .faq-section::-webkit-scrollbar {
          width: 8px;
        }

        .faq-section::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .faq-section::-webkit-scrollbar-thumb {
          background: #166534;
          border-radius: 4px;
        }

        .faq-section h2 {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          color: #1F2937;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .faq-item {
          padding: 1.5rem;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
        }

        .faq-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1F2937;
        }

        .faq-item p {
          color: #6B7280;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact