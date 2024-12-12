import { api } from '@/lib/axios'

export async function createProfile({
  name,
  email,
  userId,
  about,
  jobRole,
  zipCode,
  phone,
}) {
  const response = await api.post('/profile', {
    name,
    email,
    user_id: userId,
    about,
    job_role: jobRole,
    zipcode: zipCode,
    phone,
  })

  return response.data.data
}