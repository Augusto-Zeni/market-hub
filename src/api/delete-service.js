import { api } from '@/lib/axios'

export async function deleteService({ id }) {
  const response = await api.delete(`/services/${id}`)

  return response.data.data
}
