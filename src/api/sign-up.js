import { api } from '@/lib/axios'

export async function signUp({ name, email, password, userType }) {
  const response = await api.post('/register', {
    name,
    email,
    password,
    user_type: userType
  })

  return response.data.data
}