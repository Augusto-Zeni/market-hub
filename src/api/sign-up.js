import { api } from '@/lib/axios'

export async function signUp({
  name,
  email,
  cellphone,
  city,
  state,
  about,
  password,
  userType
}) {
  const response = await api.post('/register', {
    name,
    email,
    cellphone,
    city,
    state,
    about,
    password,
    user_type: userType
  })

  return response.data.data
}