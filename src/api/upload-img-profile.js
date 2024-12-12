import { api } from '@/lib/axios'

export async function uploadImgProfile({ id, formData }) {
  const response = await api.post(`/profile/${id}/upload-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return response.data.data
}
