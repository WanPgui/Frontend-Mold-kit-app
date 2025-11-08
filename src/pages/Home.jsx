import { Link } from 'react-router-dom'
import { Shield, Zap, Target } from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      <section className="hero gradient-bg">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">AI-Powered Mold Detection</h1>
            <p className="hero-subtitle">
              Advanced machine learning technology to detect mold in your environment with high accuracy and instant results
            </p>
            <Link to="/analyze" className="btn btn-primary hero-cta">
              Analyze Image
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose MoldKit?</h2>
          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>No Lab Required</h3>
              <p>Skip expensive lab tests - just upload a photo and get instant mold detection results</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">
                <Target size={32} />
              </div>
              <h3>Save Money</h3>
              <p>Avoid costly professional inspections for preliminary screening - detect issues early</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Protect Your Family</h3>
              <p>Quick identification of potential mold helps prevent respiratory problems and allergies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload Image</h3>
              <p>Take a photo of the suspected area and upload it to our platform</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Add Details</h3>
              <p>Provide location, ventilation info, and environmental conditions</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p>Receive instant analysis with confidence scores and risk assessment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Trusted Detection Service</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">Instant</div>
              <div className="stat-label">Results</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7-Point</div>
              <div className="stat-label">Risk Scale</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Weather</div>
              <div className="stat-label">Integration</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Check for Mold?</h2>
            <p>Upload your first image and get instant results with our AI-powered detection system</p>
            <Link to="/analyze" className="btn btn-primary cta-button">
              Start Detection Now
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 25rem 0 6rem 0;
          color: white;
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          animation: slideInLeft 1.2s ease-out 0.3s both;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
          animation: slideInRight 1.2s ease-out 0.6s both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-cta {
          font-size: 1.125rem;
          padding: 16px 32px;
          animation: bounceIn 1s ease-out 0.9s both;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .features {
          padding: 50rem 0 6rem 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1F2937;
        }

        .feature-card {
          text-align: center;
          animation: fadeInUp 0.8s ease-out;
        }

        .feature-card:nth-child(1) { animation-delay: 0.2s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.6s; }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: #F0FDF4;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          color: #166534;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .feature-card p {
          color: #6B7280;
          line-height: 1.6;
        }

        .how-it-works {
          padding: 6rem 0;
          background: white;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .step {
          text-align: center;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: #166534;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .step h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .step p {
          color: #6B7280;
          line-height: 1.6;
        }

        .stats-section {
          padding: 6rem 0;
          background: #F9FAFB;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #166534;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #6B7280;
          font-weight: 500;
        }

        .cta-section {
          padding: 6rem 0;
          background: #166534;
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .cta-content p {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          color: #166534;
          font-size: 1.125rem;
          padding: 16px 32px;
        }

        .cta-button:hover {
          background: #F3F4F6;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .hero {
            padding: 4rem 0;
          }

          .features, .how-it-works, .stats-section, .cta-section {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Home