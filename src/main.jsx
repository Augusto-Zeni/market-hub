import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { queryClient } from './lib/react-query'
import Home from './routes/Home'
import Profile from './routes/Profile'
import { SignIn } from './routes/SignIn'
import { SignUp } from './routes/SignUp'
import GlobalStyles from './styles/GlobalStyles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  }
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider future={{ v7_startTransition: true }} router={router} />
      </AuthProvider>
      <Toaster
        richColors
        toastOptions={{
          style: {
            padding: '1.2rem 1rem',
          }
        }}
      />
    </QueryClientProvider>
    <GlobalStyles />
  </StrictMode>,
)
