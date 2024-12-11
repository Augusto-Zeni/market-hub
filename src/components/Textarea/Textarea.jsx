import PropTypes from 'prop-types'
import { TextareaBox } from './styles/Textarea.style'

export function Textarea ({
  id = 'textarea',
  borderRadius = 35,
  placeholder = 'Escreva aqui...',
  style = {},
  borderColor = '#3b3b3b',
  borderColorHover = '#3b3b3b',
  shadowColor = '',
  ...props
}) {
  return (
    <TextareaBox
      id={id}
      placeholder={placeholder}
      $borderColor={borderColor}
      $borderColorHover={borderColorHover}
      $shadowColor={shadowColor}
      $borderRadius={borderRadius}
      style={style}
      {...props}
    />
  )
}

Textarea.propTypes = {
  id: PropTypes.string,
  borderRadius: PropTypes.number,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  shadowColor: PropTypes.string,
}