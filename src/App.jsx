import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { api } from './lib/axios'

function App() {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      response => response,
      error => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('sign-in', { replace: true })
          } else {
            throw error
          }
        }
      }
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <Footer />}
    </>
  )
}

export default App
