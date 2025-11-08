import axios from 'axios'

const API_BASE_URL = 'https://mold-kit.onrender.com'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
  },
})

// API endpoints
export const apiService = {
  // Health check
  healthCheck: async () => {
    const response = await api.get('/health')
    return response.data
  },

  // Root endpoint
  getApiInfo: async () => {
    const response = await api.get('/')
    return response.data
  },

  // Predict mold
  predictMold: async (formData) => {
    try {
      const response = await api.post('/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        throw new Error('CORS error: The API needs to allow requests from localhost:5173')
      }
      throw error
    }
  },

  // Get OpenAPI schema
  getOpenApiSchema: async () => {
    const response = await api.get('/openapi.json')
    return response.data
  }
}

export default apiService