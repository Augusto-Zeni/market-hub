import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import PerfilContainer from './containers/PerfilContainer/PerfilContainer'
import GlobalStyles from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Header />
    <PerfilContainer />
  </StrictMode>,
)
