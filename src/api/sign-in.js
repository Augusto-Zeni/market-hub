import { api } from '@/lib/axios'

export async function signIn({ email, password }) {
  const response = await api.post('/login', { email, password })

  return response.data.data
}