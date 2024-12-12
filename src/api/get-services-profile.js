import { api } from '@/lib/axios'

export async function getServicesProfile({ id }) {
  const response = await api.get(`/user/${id}/services`)

  return response.data
}