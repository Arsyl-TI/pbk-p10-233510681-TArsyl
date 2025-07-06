import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-real-api.com' 
    : '/api',
  timeout: 5000
})

export default instance