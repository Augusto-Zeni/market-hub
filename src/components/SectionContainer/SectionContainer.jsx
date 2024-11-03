import PropTypes from 'prop-types'
import { Container } from './styles/SectionContainer.style'

const SectionContainer = ({ children, id, style = {} }) => {
  return (
    <Container id={id} style={style}>
      {children}
    </Container>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default SectionContainer
