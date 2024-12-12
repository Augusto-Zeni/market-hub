import PropTypes from 'prop-types'
import { Container, InputBox } from './styles/InputIcon.style'

const InputIcon = ({
  id = 'input-icon',
  icon: Icon,
  borderRadius = 35,
  iconSize = 20,
  placeholder = 'Pesquisar',
  style = {},
  fill = '#fff',
  borderColor = '#3b3b3b',
  borderColorHover = '#3b3b3b',
  shadowColor = '',
  ...props
}) => {
  return (
    <Container
      $borderColor={borderColor}
      $borderColorHover={borderColorHover}
      $shadowColor={shadowColor}
      $borderRadius={borderRadius}
      style={style}
    >
      <Icon width={`${iconSize}px`} height={`${iconSize}px`} fill={fill} />
      <InputBox id={id} placeholder={placeholder} {...props} />
    </Container>
  )
}

InputIcon.propTypes = {
  id: PropTypes.string,
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

export default InputIcon
