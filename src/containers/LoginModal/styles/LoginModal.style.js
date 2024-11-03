import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import style from 'styled-components'

export const ContentLoginModal = style.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`

export const ContainerImageLoginModal = style.div`
  width: 27rem;
  background-image: url('../../../../public/login-modal-img.png');
  background-size: cover;
  background-position: center;
`

export const ContainerLoginFormModal = style.div`
  flex: 1;
  color: #3b3b3b;
`

export const ImageLoginModal = style.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Title = style.h1`
  width: 100%;
  color: #3b3b3b;
  font-weight: 400;
  padding-bottom: 1rem;
`

export const ContentLoginForm = style.div`
  align-content: center;
  justify-items: center;
  height: 100%;
  padding: 1rem 3rem;
`

export const ContentSetarLogin = style.div`
  display: flex;
  width: 100%;
  font-size: 0.75rem;
  padding-top: 1rem;
`

export const TextSpan = style.span`
  padding-left: 5px;
  color: #44bb01;
  cursor: pointer;

  &:hover,
  &:focus-within {
    text-decoration: underline;
  }
`

export const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialogContent-root': {
    padding: 0,
    borderRadius: 0,
  },
  '& .MuiDialog-paper': {
    borderRadius: 0,
    padding: 0,
    overflow: 'unset',
    height: '30rem',
  },
}))
