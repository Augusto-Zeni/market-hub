import PropTypes from 'prop-types'
import { Button } from './styles/Button.style'

const Input = ({ id = 'button', text }) => {
  return <Button id={id}>{text}</Button>
}

Input.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Input
