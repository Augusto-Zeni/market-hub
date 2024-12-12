import { api } from '@/lib/axios'

export async function getFeedHome({ page, search }) {
  const response = await api.get('/feed', {
    params: {
      page,
      search,
      per_page: 12
    }
  })

  return response.data
}