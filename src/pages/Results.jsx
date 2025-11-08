import { useState, useEffect } from 'react'
import { Calendar, MapPin, TrendingUp } from 'lucide-react'

const Results = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    // Mock data - in real app, fetch from API
    const mockResults = [
      {
        id: 1,
        date: '2024-01-15',
        location: 'Bathroom',
        prediction: 'MOLD',
        confidence: 0.92,
        risk_level: 'High',
        risk_score: 6
      },
      {
        id: 2,
        date: '2024-01-14',
        location: 'Kitchen',
        prediction: 'CLEAN',
        confidence: 0.88,
        risk_level: 'Low',
        risk_score: 2
      },
      {
        id: 3,
        date: '2024-01-13',
        location: 'Basement',
        prediction: 'MOLD',
        confidence: 0.95,
        risk_level: 'Very High',
        risk_score: 7
      }
    ]
    setResults(mockResults)
  }, [])

  const getStatusColor = (prediction) => {
    return prediction === 'MOLD' ? '#EF4444' : '#10B981'
  }

  const getRiskColor = (risk) => {
    const colors = {
      'Very Low': '#10B981',
      'Low': '#84CC16',
      'Moderate': '#F59E0B',
      'High': '#EF4444',
      'Very High': '#DC2626'
    }
    return colors[risk] || '#6B7280'
  }

  return (
    <div className="results">
      <div className="container">
        <div className="results-header">
          <h1>Analysis History</h1>
          <p>View your previous mold detection analyses and track patterns over time</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <h3>Total Analyses</h3>
              <p className="stat-number">{results.length}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon mold">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <h3>Mold Detected</h3>
              <p className="stat-number">{results.filter(r => r.prediction === 'MOLD').length}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon clean">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <h3>Clean Areas</h3>
              <p className="stat-number">{results.filter(r => r.prediction === 'CLEAN').length}</p>
            </div>
          </div>
        </div>

        <div className="results-list">
          {results.length === 0 ? (
            <div className="empty-state">
              <h3>No analyses yet</h3>
              <p>Start by analyzing your first image to see results here</p>
            </div>
          ) : (
            results.map((result) => (
              <div key={result.id} className="result-item">
                <div className="result-header">
                  <div className="result-info">
                    <div className="result-date">
                      <Calendar size={16} />
                      {new Date(result.date).toLocaleDateString()}
                    </div>
                    <div className="result-location">
                      <MapPin size={16} />
                      {result.location}
                    </div>
                  </div>
                  <div 
                    className="result-status"
                    style={{ backgroundColor: getStatusColor(result.prediction) }}
                  >
                    {result.prediction}
                  </div>
                </div>

                <div className="result-details">
                  <div className="detail-item">
                    <span>Confidence:</span>
                    <span>{Math.round(result.confidence * 100)}%</span>
                  </div>
                  <div className="detail-item">
                    <span>Risk Level:</span>
                    <span 
                      className="risk-level"
                      style={{ color: getRiskColor(result.risk_level) }}
                    >
                      {result.risk_level}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span>Risk Score:</span>
                    <span>{result.risk_score}/7</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .results {
          padding: 15rem 0 2rem 0;
          min-height: calc(100vh - 80px);
        }

        .results-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .results-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .results-header p {
          font-size: 1.125rem;
          color: #6B7280;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #F0FDF4;
          color: #166534;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon.mold {
          background: #FEF2F2;
          color: #EF4444;
        }

        .stat-icon.clean {
          background: #F0FDF4;
          color: #10B981;
        }

        .stat-content h3 {
          font-size: 0.875rem;
          font-weight: 500;
          color: #6B7280;
          margin-bottom: 0.25rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #1F2937;
          margin: 0;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .empty-state h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1F2937;
        }

        .empty-state p {
          color: #6B7280;
        }

        .result-item {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .result-info {
          display: flex;
          gap: 1.5rem;
        }

        .result-date,
        .result-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6B7280;
          font-size: 0.875rem;
        }

        .result-status {
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .result-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
        }

        .detail-item span:first-child {
          color: #6B7280;
          font-size: 0.875rem;
        }

        .detail-item span:last-child {
          font-weight: 600;
          color: #1F2937;
        }

        .risk-level {
          font-weight: 600 !important;
        }

        @media (max-width: 768px) {
          .result-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .result-info {
            flex-direction: column;
            gap: 0.5rem;
          }

          .result-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Results