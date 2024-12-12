import { Select } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledSelect = styled(Select)(() => ({
  '& .MuiSelect-outlined': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiInputBase-root': {
    height: '3rem',
    width: '100%',
    borderRadius: '35px',
    fontWeight: '300',
    fontSize: '.8rem',
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    color: '#3b3b3b',
    transition: 'transform 0.3s, box-shadow 0.3s',
    border: '1px solid #44bb01',
  },
}))
