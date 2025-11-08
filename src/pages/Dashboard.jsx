import { useState, useEffect } from 'react'
import { Activity, Server, Zap } from 'lucide-react'
import apiService from '../services/api'

const Dashboard = () => {
  const [apiStatus, setApiStatus] = useState(null)
  const [apiInfo, setApiInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const [healthData, infoData] = await Promise.all([
          apiService.healthCheck(),
          apiService.getApiInfo()
        ])
        setApiStatus(healthData)
        setApiInfo(infoData)
      } catch (error) {
        console.error('Error fetching API data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchApiData()
  }, [])

  if (loading) {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="loading">Loading dashboard...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>API Dashboard</h1>
          <p>Monitor the MoldKit API status and performance</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <Activity size={24} />
            </div>
            <div className="stat-content">
              <h3>API Status</h3>
              <p className={`status ${apiStatus?.status === 'healthy' ? 'healthy' : 'error'}`}>
                {apiStatus?.status || 'Unknown'}
              </p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Server size={24} />
            </div>
            <div className="stat-content">
              <h3>Service</h3>
              <p className="stat-value">Online</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Zap size={24} />
            </div>
            <div className="stat-content">
              <h3>Response Time</h3>
              <p className="stat-value">~2s</p>
            </div>
          </div>
        </div>

        <div className="api-info-section">
          <div className="info-card">
            <h3>API Information</h3>
            {apiInfo ? (
              <div className="info-details">
                <div className="info-item">
                  <span>Status:</span>
                  <span>{apiInfo.status}</span>
                </div>
                <div className="info-item">
                  <span>Message:</span>
                  <span>{apiInfo.message}</span>
                </div>
              </div>
            ) : (
              <p>Unable to fetch API information</p>
            )}
          </div>

          <div className="endpoints-card">
            <h3>Available Endpoints</h3>
            <div className="endpoints-list">
              <div className="endpoint-item">
                <span className="method get">GET</span>
                <span className="path">/</span>
                <span className="description">API root information</span>
              </div>
              <div className="endpoint-item">
                <span className="method get">GET</span>
                <span className="path">/health</span>
                <span className="description">Health check</span>
              </div>
              <div className="endpoint-item">
                <span className="method post">POST</span>
                <span className="path">/predict</span>
                <span className="description">Mold prediction</span>
              </div>
              <div className="endpoint-item">
                <span className="method get">GET</span>
                <span className="path">/docs</span>
                <span className="description">API documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard {
          padding: 15rem 0 2rem 0;
          min-height: calc(100vh - 80px);
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .dashboard-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .dashboard-header p {
          font-size: 1.125rem;
          color: #6B7280;
        }

        .loading {
          text-align: center;
          padding: 4rem;
          font-size: 1.125rem;
          color: #6B7280;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
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

        .stat-content h3 {
          font-size: 0.875rem;
          font-weight: 500;
          color: #6B7280;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1F2937;
          margin: 0;
        }

        .status {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .status.healthy {
          color: #166534;
        }

        .status.error {
          color: #DC2626;
        }

        .api-info-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .info-card,
        .endpoints-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .info-card h3,
        .endpoints-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #1F2937;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #F3F4F6;
        }

        .info-item span:first-child {
          color: #6B7280;
          font-weight: 500;
        }

        .info-item span:last-child {
          color: #1F2937;
          font-weight: 600;
        }

        .endpoints-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .endpoint-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #F9FAFB;
          border-radius: 8px;
        }

        .method {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 50px;
          text-align: center;
        }

        .method.get {
          background: #DBEAFE;
          color: #1E40AF;
        }

        .method.post {
          background: #FEF3C7;
          color: #92400E;
        }

        .path {
          font-family: monospace;
          font-weight: 600;
          color: #1F2937;
          min-width: 80px;
        }

        .description {
          color: #6B7280;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .api-info-section {
            grid-template-columns: 1fr;
          }

          .endpoint-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard