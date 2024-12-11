import { api } from '@/lib/axios'

export async function getFeedHome() {
  const response = await api.get('/feed', {
    params: {
      page: 1,
      per_page: 12
    }
  })

  return response.data
}