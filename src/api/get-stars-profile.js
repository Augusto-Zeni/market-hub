import { api } from '@/lib/axios'

export async function getStarsProfile({ id }) {
  const response = await api.get(`/reviews/profile-stars/${id}`)

  return response.data
}