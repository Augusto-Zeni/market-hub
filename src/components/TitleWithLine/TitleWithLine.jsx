import PropTypes from 'prop-types'
import { Line, Title, TitleContainer } from './styles/TitleWithLine.style'

const TitleWithLine = ({ title, styleContainer = {}, fontSize = '2.5rem' }) => {
  return (
    <TitleContainer style={styleContainer}>
      <Title $fontSize={fontSize}>{title}</Title>
      <Line />
    </TitleContainer>
  )
}

TitleWithLine.propTypes = {
  title: PropTypes.string.isRequired,
  styleContainer: PropTypes.object,
  fontSize: PropTypes.string,
}

export default TitleWithLine
