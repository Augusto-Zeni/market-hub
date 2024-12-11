import { env } from '@/env'
import axios from "axios"

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

api.interceptors.request.use(async (config) => {
  if (env.VITE_ENABLE_API_DELAY) {
    await new Promise(resolve => setTimeout(resolve, Math.round(Math.random() * 3000)))
  }

  const storedData = localStorage.getItem('userContext-market-hub')
  
  try {
    const data = storedData ? JSON.parse(storedData) : null;
    const token = data?.token

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Erro ao processar token do localStorage:', error);
  }

  return config
})