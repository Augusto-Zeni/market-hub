import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { DialogContent } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  BootstrapDialog,
  ContainerImageLoginModal,
  ContainerLoginFormModal,
  ContentLoginForm,
  ContentLoginModal,
  ContentSetarLogin,
  TextSpan,
  Title,
} from './styles/LoginModal.style'

const LoginModal = ({ open, setOpen }) => {
  const [isLogin, setIsLogin] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth="md">
      <DialogContent>
        <ContentLoginModal>
          <ContainerImageLoginModal />
          <ContainerLoginFormModal>
            <ContentLoginForm>
              {isLogin ? (
                <>
                  <Title>Login</Title>
                  <Input
                    id="email-login"
                    type="text"
                    placeholder="Email"
                    borderColor="#44BB01"
                    borderColorHover="#44BB01"
                    shadowColor="#44bb0142"
                    style={{ margin: '1rem 0', height: 40, padding: 5 }}
                    borderRadius={15}
                  />
                  <Input
                    id="password-login"
                    type="password"
                    placeholder="Senha"
                    borderColor="#44BB01"
                    borderColorHover="#44BB01"
                    shadowColor="#44bb0142"
                    style={{ margin: '1rem 0', height: 40, padding: 5 }}
                    borderRadius={15}
                  />
                  <Button id="login-button" text="Login" />
                  <ContentSetarLogin>
                    <span>Não tem uma conta?</span>
                    <TextSpan onClick={() => setIsLogin(false)}>Cadastre-se agora</TextSpan>
                  </ContentSetarLogin>
                </>
              ) : (
                <>
                  <Title>Cadastrar</Title>
                  <Input
                    id="nome-completo-cadastrar"
                    type="text"
                    placeholder="Nome Completo"
                    borderColor="#44BB01"
                    borderColorHover="#44BB01"
                    shadowColor="#44bb0142"
                    style={{ margin: '1rem 0', height: 40, padding: 5 }}
                    borderRadius={15}
                  />
                  <Input
                    id="email-cadastrar"
                    type="text"
                    placeholder="Email"
                    borderColor="#44BB01"
                    borderColorHover="#44BB01"
                    shadowColor="#44bb0142"
                    style={{ margin: '1rem 0', height: 40, padding: 5 }}
                    borderRadius={15}
                  />
                  <Input
                    id="password-cadastrar"
                    type="password"
                    placeholder="Senha"
                    borderColor="#44BB01"
                    borderColorHover="#44BB01"
                    shadowColor="#44bb0142"
                    style={{ margin: '1rem 0', height: 40, padding: 5 }}
                    borderRadius={15}
                  />
                  <Button id="cadastrar-button" text="Cadastrar" style={{ marginTop: '1rem' }} />
                  <ContentSetarLogin>
                    <span>Já possui uma conta?</span>
                    <TextSpan onClick={() => setIsLogin(true)}>Faça login</TextSpan>
                  </ContentSetarLogin>
                </>
              )}
            </ContentLoginForm>
          </ContainerLoginFormModal>
        </ContentLoginModal>
      </DialogContent>
    </BootstrapDialog>
  )
}

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default LoginModal
