

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>About MoldKit</h1>
          <p>AI-powered mold detection service using computer vision and environmental analysis</p>
        </div>

        <div className="about-us-section">
          <h2>About Us</h2>
          <div className="about-content">
            <p>MoldKit was created to make mold detection accessible and affordable for everyone. We understand that mold can be a serious health hazard and property concern, but traditional detection methods are often expensive and time-consuming.</p>
            
            <p>Our mission is to provide instant, reliable mold detection using cutting-edge artificial intelligence technology. By simply uploading a photo, users can get immediate insights into potential mold presence without the need for costly professional inspections or lab tests.</p>
            
            <p>We believe in preventive health measures and early detection. Our service helps homeowners, renters, and property managers identify potential mold issues before they become major problems, protecting both health and property value.</p>
            
            <p>Built with modern web technologies and powered by machine learning, MoldKit represents the future of accessible environmental health monitoring.</p>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How MoldKit Works</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Image Upload</h3>
              <p>Upload images in JPG, PNG, or BMP format of suspected mold areas</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>AI Detection</h3>
              <p>Computer vision model analyzes the image to detect mold presence with confidence scores</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Environmental Factors</h3>
              <p>Considers location, ventilation quality, water leaks, and health symptoms</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Risk Assessment</h3>
              <p>Generates risk scores (1-7 scale), weather data, and comprehensive analysis</p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>API Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Machine Learning Detection</h3>
              <p>Binary classification model that identifies mold vs clean surfaces with confidence percentages</p>
            </div>
            <div className="feature-item">
              <h3>Multi-Factor Analysis</h3>
              <p>Combines image analysis with environmental data: location, ventilation, leaks, and health symptoms</p>
            </div>
            <div className="feature-item">
              <h3>Risk Scoring System</h3>
              <p>7-point risk scale with status levels from Very Low to Very High based on multiple factors</p>
            </div>
            <div className="feature-item">
              <h3>Weather Integration</h3>
              <p>Fetches real-time weather data including temperature and humidity for location-based analysis</p>
            </div>
            <div className="feature-item">
              <h3>Image Format Support</h3>
              <p>Accepts JPG, JPEG, PNG, and BMP image files via multipart form data upload</p>
            </div>
            <div className="feature-item">
              <h3>Environmental Parameters</h3>
              <p>Optional inputs for location, ventilation quality, water leaks, and health symptoms</p>
            </div>
            <div className="feature-item">
              <h3>Comprehensive Response</h3>
              <p>Returns prediction, confidence score, risk status, weather data, and detailed analysis message</p>
            </div>
            <div className="feature-item">
              <h3>REST API Architecture</h3>
              <p>Built with FastAPI framework providing three main endpoints for health, root info, and prediction</p>
            </div>
          </div>
        </div>

        <div className="accuracy-section">
          <h2>Technical Specifications</h2>
          <div className="accuracy-stats">
            <div className="stat">
              <div className="stat-value">REST</div>
              <div className="stat-label">API Architecture</div>
            </div>
            <div className="stat">
              <div className="stat-value">3</div>
              <div className="stat-label">Endpoints</div>
            </div>
            <div className="stat">
              <div className="stat-value">7-Point</div>
              <div className="stat-label">Risk Scale</div>
            </div>
          </div>
          <p className="accuracy-note">
            Built with FastAPI, the service provides real-time mold detection with comprehensive 
            environmental analysis and weather data integration.
          </p>
        </div>

        <div className="limitations-section">
          <h2>API Response Format</h2>
          <div className="limitations-grid">
            <div className="limitation-item">
              <h4>Supported Formats</h4>
              <p>Accepts JPG, JPEG, PNG, and BMP image files via multipart/form-data</p>
            </div>
            <div className="limitation-item">
              <h4>Response Fields</h4>
              <p>Returns prediction, confidence, risk_status, weather, risk_score, and analysis message</p>
            </div>
            <div className="limitation-item">
              <h4>Environmental Parameters</h4>
              <p>Optional: location, ventilation (good/moderate/poor), leak (yes/no), health (yes/no)</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 130rem 0 2rem 0;
          min-height: calc(100vh - 100px);
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .about-header p {
          font-size: 1.125rem;
          color: #6B7280;
        }

        .about-us-section {
          background: white;
          border-radius: 12px;
          padding: 3rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .about-us-section h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #1F2937;
          text-align: center;
        }

        .about-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #4B5563;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .about-content p:last-child {
          margin-bottom: 0;
        }

        .how-it-works {
          margin-bottom: 4rem;
        }

        .how-it-works h2 {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          color: #1F2937;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .process-step {
          text-align: center;
          padding: 2rem;
        }

        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #166534;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 auto 1rem;
        }

        .process-step h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1F2937;
        }

        .process-step p {
          color: #6B7280;
          line-height: 1.6;
        }

        .features-section {
          margin-bottom: 4rem;
        }

        .features-section h2 {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          color: #1F2937;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-height: 600px;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .features-list::-webkit-scrollbar {
          width: 8px;
        }

        .features-list::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .features-list::-webkit-scrollbar-thumb {
          background: #166534;
          border-radius: 4px;
        }

        .feature-item {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #166534;
        }

        .feature-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .feature-item p {
          color: #6B7280;
          line-height: 1.6;
        }

        .accuracy-section {
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin-bottom: 4rem;
          text-align: center;
        }

        .accuracy-section h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #1F2937;
        }

        .accuracy-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #166534;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #6B7280;
          font-weight: 500;
        }

        .accuracy-note {
          color: #6B7280;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .limitations-section h2 {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          color: #1F2937;
        }

        .limitations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .limitation-item {
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .limitation-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #DC2626;
        }

        .limitation-item p {
          color: #7F1D1D;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr;
          }

          .accuracy-stats {
            grid-template-columns: repeat(3, 1fr);
          }

          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default About