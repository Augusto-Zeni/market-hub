import PropTypes from 'prop-types'
import { Container, InputBox } from './styles/InputIcon.style'

const InputIcon = ({ icon: Icon, borderRadius, iconSize, placeholder, style, fill, borderColor, borderColorHover, shadowColor }) => {
  return (
    <Container borderColor={borderColor} borderColorHover={borderColorHover} shadowColor={shadowColor} borderRadius={borderRadius} style={style}>
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
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  shadowColor: PropTypes.string,
}

InputIcon.defaultProps = {
  borderRadius: 35,
  iconSize: 20,
  placeholder: 'Pesquisar',
  fill: '#fff',
  style: {},
  borderColor: '#3b3b3b',
  borderColorHover: '#3b3b3b',
  shadowColor: '',
}

export default InputIcon
