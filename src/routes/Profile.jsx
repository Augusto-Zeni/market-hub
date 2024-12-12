import { getProfile } from "@/api/get-profile"
import { getReviewsProfile } from "@/api/get-reviews-profile"
import { getStarsProfile } from "@/api/get-stars-profile"
import PerfilContainer from "@/containers/PerfilContainer/PerfilContainer"
import { useAuth } from "@/contexts/AuthContext"
import { useQuery } from "@tanstack/react-query"

const Profile = () => {
  const { getUserId } = useAuth()

  const { data: profileResult } = useQuery({
    queryKey: ['profile', getUserId],
    queryFn: () => getProfile({ id: getUserId }),
  })

  const { data: starsResults } = useQuery({
    queryKey: ['stars-profile', getUserId],
    queryFn: () => getStarsProfile({ id: getUserId }),
  })

  const { data: reviewsResults } = useQuery({
    queryKey: ['reviews-profile', getUserId],
    queryFn: () => getReviewsProfile({ id: getUserId }),
  })

  return (
    <PerfilContainer
      profile={profileResult?.data}
      stars={starsResults?.data}
      reviews={reviewsResults?.data}
    />
  )
}

export default Profile