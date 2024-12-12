import { api } from '@/lib/axios'

export async function getProfile({ id }) {
  const response = await api.get(`/profile/${id}`)

  return response.data
}