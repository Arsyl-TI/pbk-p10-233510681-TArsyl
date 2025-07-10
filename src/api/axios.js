import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://fake-json-chi.vercel.app/posts' 
    : '/api',
  timeout: 5000
})

export default instance