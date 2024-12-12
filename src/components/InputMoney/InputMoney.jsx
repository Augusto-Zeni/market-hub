import PropTypes from 'prop-types'
import { Container, InputStyled } from './styles/InputMoney.style'

export function InputMoney({
  id = 'input',
  borderRadius = 35,
  placeholder = 'Pesquisar',
  style = {},
  borderColor = '#3b3b3b',
  borderColorHover = '#3b3b3b',
  shadowColor = '',
  value,
  onChange,
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
      <InputStyled
        id={id}
        placeholder={placeholder || 'Digite um valor'}
        defaultValue={0}
        decimalsLimit={2}
        onValueChange={(value, name, values) => onChange(value, name, values)}
        value={value}
        decimalSeparator=","
        groupSeparator="."
        prefix="R$"
        {...props}
      />
    </Container>
  )
}

InputMoney.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any,
  borderRadius: PropTypes.number,
  fill: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  shadowColor: PropTypes.string,
  onChange: PropTypes.func,
}
