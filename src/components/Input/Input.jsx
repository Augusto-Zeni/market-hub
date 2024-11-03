import PropTypes from 'prop-types'
import { Container, InputBox } from './styles/Input.style'

const Input = ({
  id = 'input',
  borderRadius = 35,
  placeholder = 'Pesquisar',
  style = {},
  borderColor = '#3b3b3b',
  borderColorHover = '#3b3b3b',
  shadowColor = '',
  type = 'text',
}) => {
  return (
    <Container
      $borderColor={borderColor}
      $borderColorHover={borderColorHover}
      $shadowColor={shadowColor}
      $borderRadius={borderRadius}
      style={style}
    >
      <InputBox id={id} type={type} placeholder={placeholder} />
    </Container>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  borderRadius: PropTypes.number,
  fill: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  shadowColor: PropTypes.string,
  type: PropTypes.string,
}

export default Input
