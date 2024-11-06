import PropTypes from 'prop-types'
import { ButtonComponent } from './styles/Button.style'

const Button = ({ id = 'button', text, style = {} }) => {
  return (
    <ButtonComponent id={id} style={style}>
      {text}
    </ButtonComponent>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Button
