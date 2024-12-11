import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('userContext - market hub')
    return storedData ? JSON.parse(storedData) : null
  })

  const getUserId = useMemo(() => userData?.id, [userData])

  const getUserType = useMemo(() => userData?.user_type, [userData])

  useEffect(() => {
    console.log('userData', userData)

    localStorage.setItem('userContext - market hub', JSON.stringify({
      id: userData?.id,
      user_type: userData?.user_type,
      token: userData?.access_token || userData?.token
    }))
  }, [userData])

  return (
    <AuthContext.Provider value={{ userData, setUserData, getUserId, getUserType }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(AuthContext);