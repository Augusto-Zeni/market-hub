import { api } from '@/lib/axios'

export async function uploadImgService({ id, formData }) {
  const response = await api.post(`/services/${id}/upload-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return response.data.data
}
