import { api } from '@/lib/axios'

export async function updateProfile({
  id,
  job,
  name,
  email,
  zipcode,
  about,
  phone
}) {
  const response = await api.patch(`/profile/${id}`, {
    job_role: job,
    name,
    email,
    zipcode,
    about,
    phone,
  })

  return response.data.data
}