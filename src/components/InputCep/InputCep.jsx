import PropTypes from 'prop-types'
import { Container, InputMaskStyled } from './styles/InputCep.style'

export function InputCep({
  id = 'input',
  borderRadius = 35,
  placeholder = 'Pesquisar',
  style = {},
  borderColor = '#3b3b3b',
  borderColorHover = '#3b3b3b',
  shadowColor = '',
  type = 'text',
  ...props
}) {
  return (
    <Container
      $borderColor={borderColor}
      $borderColorHover={borderColorHover}
      $shadowColor={shadowColor}
      $borderRadius={borderRadius}
      style={style}
    >
      <InputMaskStyled
        id={id}
        type={type}
        mask="99999-999"
        placeholder={placeholder}
        {...props}
      />
    </Container>
  )
}

InputCep.propTypes = {
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
