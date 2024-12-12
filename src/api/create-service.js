import { api } from '@/lib/axios'

export async function createService({
  id,
  description,
  category,
  price,
  avarageTime,
}) {
  const response = await api.post('/services', {
    user_id: id,
    description,
    category,
    price_per_hour: price,
    average_time_duration: avarageTime
  })

  return response.data.data
}