import { api } from '@/lib/axios'

export async function createProfile({
  userId,
  about,
  jobRole,
  zipCode,
  phone,
}) {
  const response = await api.post('/profile', {
    user_id: userId,
    about,
    job_role: jobRole,
    zipcode: zipCode,
    phone,
  })

  return response.data.data
}