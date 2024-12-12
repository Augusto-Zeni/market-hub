import PropTypes from 'prop-types'
import { ButtonComponent } from './styles/Button.style'

const Button = ({ id = 'button', text, disabled = false, style = {}, ...props }) => {
  return (
    <ButtonComponent id={id} style={style} disabled={disabled} {...props}>
      {text}
    </ButtonComponent>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

export default Button
