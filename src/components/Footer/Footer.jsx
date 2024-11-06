import GreenLogoIcon from '@/assets/icons/LogoIcon/GreenLogoIcon'
import { Container, ContainerCopy, ContainerLogo, LogoIcon, LogoText, Text } from './styles/Footer.style'

const HomeContainer = () => {
  return (
    <Container>
      <ContainerLogo href="/">
        <LogoIcon size={60}>
          <GreenLogoIcon width="60" height="60" />
        </LogoIcon>
        <LogoText>MarketHub</LogoText>
      </ContainerLogo>

      <Text>
        No MarketHub, entendemos os desafios que muitos prestadores de serviços enfrentam na divulgação e gestão de seus negócios.
        Muitas vezes, a falta de ferramentas adequadas dificulta a promoção eficaz dos serviços e o acompanhamento dos resultados
        das campanhas de marketing. Por isso, desenvolvemos uma solução que simplifica esse processo, permitindo que nossos
        clientes criem campanhas promocionais, gerenciem leads e analisem o desempenho de forma intuitiva e eficiente. Com uma
        interface amigável e acessível via web, o MarketHub oferece tudo o que você precisa para expandir sua visibilidade e
        otimizar suas estratégias de marketing.
      </Text>

      <ContainerCopy>
        <span>© 2024 MarketHub. Todos os direitos reservados.</span>
      </ContainerCopy>
    </Container>
  )
}

export default HomeContainer
