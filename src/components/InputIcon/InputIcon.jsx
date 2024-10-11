import PropTypes from 'prop-types'
import { Container, InputBox } from './styles/InputIcon.style'

const InputIcon = ({ icon: Icon, borderRadius, iconSize, placeholder, style, fill }) => {
  return (
    <Container borderRadius={borderRadius} style={style}>
      <Icon width={`${iconSize}px`} height={`${iconSize}px`} fill={fill} />
      <InputBox placeholder={placeholder} />
    </Container>
  )
}

InputIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  borderRadius: PropTypes.number,
  iconSize: PropTypes.number,
  fill: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
}

InputIcon.defaultProps = {
  borderRadius: 35,
  iconSize: 20,
  placeholder: 'Pesquisar',
  fill: '#fff',
  style: {},
}

export default InputIcon
