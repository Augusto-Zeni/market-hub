import { api } from '@/lib/axios'

export async function getCategories() {
  const response = await api.get('/services/categories')

  return response.data.data
}