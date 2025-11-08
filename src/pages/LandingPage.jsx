import { Link } from 'react-router-dom'
import { Microscope, Shield, Zap, Target, ArrowRight } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="container">
          <div className="hero-content">
            <div className="brand-logo">
              <Microscope size={64} />
              <h1>Mold-Kit</h1>
            </div>
            <h2>AI-Powered Mold Detection</h2>
            <p>Advanced machine learning technology to detect mold in your environment with high accuracy and instant results</p>
            
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary hero-btn">
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="btn btn-secondary hero-btn">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-features">
        <div className="container">
          <h3>Why Choose Mold-Kit?</h3>
          <div className="features-grid">
            <div className="feature-item">
              <Zap size={32} />
              <h4>No Lab Required</h4>
              <p>Skip expensive lab tests - just upload a photo and get instant results</p>
            </div>
            <div className="feature-item">
              <Target size={32} />
              <h4>Save Money</h4>
              <p>Avoid costly professional inspections for preliminary screening</p>
            </div>
            <div className="feature-item">
              <Shield size={32} />
              <h4>Protect Your Family</h4>
              <p>Quick identification helps prevent respiratory problems and allergies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-cta">
        <div className="container">
          <h3>Ready to Detect Mold?</h3>
          <p>Join thousands of users protecting their homes and health</p>
          <Link to="/signup" className="btn btn-primary cta-btn">
            Start Free Analysis
          </Link>
        </div>
      </div>

      <style jsx>{`
        .landing {
          min-height: 100vh;
          background: linear-gradient(135deg, #166534 0%, #14532D 100%);
          color: white;
        }

        .landing-hero {
          padding: 8rem 0 6rem 0;
          text-align: center;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .brand-logo h1 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0;
        }

        .hero-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 16px 32px;
          font-size: 1.125rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-secondary:hover {
          background: white;
          color: #166534;
        }

        .landing-features {
          padding: 6rem 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .landing-features h3 {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 3rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .feature-item svg {
          margin-bottom: 1rem;
          color: #BBF7D0;
        }

        .feature-item h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .feature-item p {
          opacity: 0.9;
          line-height: 1.6;
        }

        .landing-cta {
          padding: 6rem 0;
          text-align: center;
        }

        .landing-cta h3 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .landing-cta p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-btn {
          padding: 16px 32px;
          font-size: 1.125rem;
          background: white;
          color: #166534;
        }

        .cta-btn:hover {
          background: #F3F4F6;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .landing-hero {
            padding: 6rem 0 4rem 0;
          }

          .brand-logo h1 {
            font-size: 2.5rem;
          }

          .hero-content h2 {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default LandingPage