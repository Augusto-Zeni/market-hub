import { api } from '@/lib/axios'

export async function getReviewsProfile({ id }) {
  const response = await api.get(`/reviews/profile-reviews/${id}`)

  return response.data
}