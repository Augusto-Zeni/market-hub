import PropTypes from 'prop-types'
import { HiddenInput, LabelUploadImg } from './style/ImageInput.style'

export function ImageInput({ onChange = () => {}, fileName, setFileName }) {
  const handleChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFileName(file.name)
      onChange(file)
    }
  }

  return (
    <div>
      <LabelUploadImg htmlFor="imageUpload">
        <HiddenInput
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <div style={{ paddingLeft: '.6rem' }}>
          {fileName}
        </div>
      </LabelUploadImg>
    </div>
  )
}

ImageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  fileName: PropTypes.string,
  setFileName: PropTypes.func,
}
