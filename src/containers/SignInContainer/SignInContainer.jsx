import { signIn } from '@/api/sign-in'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { useAuth } from '@/contexts/AuthContext'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { signInValidationSchema } from './signInSchema'
import { Container, ContainerError, ContainerLoginFormModal, ContentLoginForm, ErrorMsg, LeftContainer, RightContainer, Title } from './styles/SignInContainer.style'

export function SignInContainer() {
  const navigate = useNavigate()
  
  const { setUserData } = useAuth()

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await signIn({ email: values.email, password: values.password })

      setUserData(response)
      setSubmitting(false)

      toast.success('Login efetuado com sucesso.')
      
      navigate('/')
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <Container>
      <LeftContainer />
      <RightContainer>
          <ContainerLoginFormModal>
            <ContentLoginForm>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={signInValidationSchema}
                  onSubmit={handleLogin}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form style={{ width: '100%' }}>
                      <Title>Login</Title>
                      <Field
                        as={Input}
                        name="email"
                        id="email-login"
                        type="text"
                        placeholder="Email"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: errors.email && touched.email ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                      />
                      {errors.email && touched.email && (
                        <ContainerError>
                          <ErrorMsg>{errors.email}</ErrorMsg>
                        </ContainerError>
                      )}
                      
                      <Field
                        as={Input}
                        name="password"
                        id="password-login"
                        type="password"
                        placeholder="Senha"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: errors.password && touched.password ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                      />
                      {errors.password && touched.password && (
                        <ContainerError>
                          <ErrorMsg>{errors.password}</ErrorMsg>
                        </ContainerError>
                      )}
                      
                      <Button
                        id="login-button" 
                        text="Login"
                        type="button"
                        disabled={isSubmitting}
                      />
                    </Form>
                  )}
                </Formik>
            </ContentLoginForm>
          </ContainerLoginFormModal>
      </RightContainer>
    </Container>
  )
}
