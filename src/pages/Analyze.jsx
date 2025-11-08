import { useState } from 'react'
import { Upload, X, MapPin, Wind, Droplets, AlertTriangle } from 'lucide-react'
import apiService from '../services/api'
import { compressImage, validateImage, generatePreview } from '../utils/imageUtils'
import { useToast } from '../hooks/useToast'
import { useAuth } from '../context/AuthContext'
import AuthModal from '../components/AuthModal'
import './Analyze.css'

const Analyze = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const { success, error } = useToast()
  const { isAuthenticated } = useAuth()
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' })
  const [formData, setFormData] = useState({
    location: '',
    ventilation: 'moderate',
    leak: 'no',
    health: 'no'
  })

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (file) {
      try {
        validateImage(file)
        const compressedFile = await compressImage(file)
        const preview = await generatePreview(compressedFile)
        
        setSelectedFile(compressedFile)
        setPreview(preview)
        success('Image uploaded and compressed successfully')
      } catch (err) {
        error(err.message)
      }
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPG, PNG, BMP)')
        return
      }
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    setPreview(null)
    setResult(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedFile) return
    
    if (!isAuthenticated) {
      error('Please login to analyze images')
      return
    }

    setLoading(true)
    const data = new FormData()
    data.append('file', selectedFile)
    data.append('location', formData.location || '')
    data.append('ventilation', formData.ventilation)
    data.append('leak', formData.leak)
    data.append('health', formData.health)
    
    console.log('Sending data:', {
      fileName: selectedFile.name,
      fileType: selectedFile.type,
      location: formData.location,
      ventilation: formData.ventilation,
      leak: formData.leak,
      health: formData.health
    })

    // Log FormData contents
    for (let [key, value] of data.entries()) {
      console.log(`FormData ${key}:`, value)
    }

    try {
      const response = await apiService.predictMold(data)
      console.log('Full API Response:', JSON.stringify(response, null, 2))
      setResult(response)
      success('Analysis completed successfully!')
    } catch (err) {
      console.error('Error details:', err.response?.data || err.message)
      error(`Prediction failed: ${err.response?.data?.detail || err.message || 'Please try again.'}`)
    } finally {
      setLoading(false)
      setUploadProgress(0)
    }
  }

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
    <div className="analyze">
      <div className="container">
        <div className="analyze-header">
          <h1>Mold Detection Analysis</h1>
          <p>Upload an image and provide environmental details for accurate mold detection</p>
        </div>

        <div className="analyze-content">
          <div className="upload-section">
            <form onSubmit={handleSubmit}>
              <div 
                className="upload-zone"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                {!preview ? (
                  <>
                    <Upload size={48} />
                    <h3>Drop image here or click to browse</h3>
                    <p>Supports JPG, PNG, WebP formats</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="file-input"
                    />
                  </>
                ) : (
                  <div className="preview-container">
                    <img src={preview} alt="Preview" className="preview-image" />
                    <button type="button" onClick={removeFile} className="remove-btn">
                      <X size={20} />
                    </button>
                  </div>
                )}
              </div>

              <div className="form-panel">
                <h3>Environmental Information</h3>
                
                <div className="form-group">
                  <label>
                    <MapPin size={18} />
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="Enter location (e.g., Bathroom, Basement, Kitchen)"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Wind size={18} />
                    Ventilation Quality
                  </label>
                  <select
                    value={formData.ventilation}
                    onChange={(e) => setFormData({...formData, ventilation: e.target.value})}
                  >
                    <option value="good">Good</option>
                    <option value="moderate">Moderate</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.leak === 'yes'}
                      onChange={(e) => setFormData({...formData, leak: e.target.checked ? 'yes' : 'no'})}
                    />
                    <Droplets size={18} />
                    Recent water leaks or moisture issues
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.health === 'yes'}
                      onChange={(e) => setFormData({...formData, health: e.target.checked ? 'yes' : 'no'})}
                    />
                    <AlertTriangle size={18} />
                    Experiencing health symptoms
                  </label>
                </div>

                {isAuthenticated ? (
                  <button 
                    type="submit" 
                    className="btn btn-primary analyze-btn"
                    disabled={!selectedFile || loading}
                  >
                    {loading ? 'Predicting...' : 'Predict'}
                  </button>
                ) : (
                  <div className="login-prompt">
                    <p>Please login to analyze images</p>
                    <div className="login-buttons">
                      <button 
                        onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
                        className="btn btn-primary"
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                        className="btn btn-secondary"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {loading && (
            <div className="loading-overlay">
              <div className="loading-popup">
                <div className="loading-circle"></div>
                <p>Model is loading...</p>
              </div>
            </div>
          )}

          {result && (
            <div className="results-section">
              <div className="result-card">
                <div className="prediction-header">
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(result.prediction) }}
                  >
                    {result.prediction}
                  </div>
                  <div className="confidence">
                    {Math.round(result.confidence * 100)}% Confidence
                  </div>
                </div>

                <div className="risk-indicator">
                  <h4>Risk Status</h4>
                  <div 
                    className="risk-badge"
                    style={{ backgroundColor: getRiskColor(result.risk_status) }}
                  >
                    {result.risk_status}
                  </div>
                </div>

                <div className="details-panel">
                  <h4>Analysis Details</h4>
                  <div className="detail-item">
                    <span>Risk Score:</span>
                    <span>{result.risk_score}/7</span>
                  </div>
                  <div className="detail-item">
                    <span>Weather:</span>
                    <span>{result.weather || 'No weather data'}</span>
                  </div>
                  <div className="detail-item">
                    <span>Confidence:</span>
                    <span>{result.confidence_display}</span>
                  </div>
                </div>

                <div className="message-section">
                  <h4>Analysis Message</h4>
                  <p>{result.message}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        initialMode={authModal.mode}
      />
    </div>
  )
}

export default Analyze