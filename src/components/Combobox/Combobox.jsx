import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import PropTypes from 'prop-types'
import { StyledSelect } from './styles/Combobox.style'

export function Combobox({ value = '', onChange, itens }) {
  return (
    <StyledSelect
      displayEmpty
      value={value}
      onChange={onChange}
      input={<OutlinedInput />}
      inputProps={{ 'aria-label': 'Without label' }}
      sx={{
        height: '2.6rem',
        width: '100%',
        borderRadius: '15px',
        fontWeight: '300',
        fontSize: '.8rem',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        color: '#3b3b3b',
        transition: 'transform 0.3s, box-shadow 0.3s',
        border: '1px solid #44bb01',
      }}
    >
      <MenuItem disabled value=''>
        <em>Selecione uma categoria</em>
      </MenuItem>
      {itens?.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </StyledSelect>
  )
}

Combobox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  itens: PropTypes.any,
}
