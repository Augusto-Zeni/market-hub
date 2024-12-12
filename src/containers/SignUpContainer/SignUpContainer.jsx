import { createProfile } from '@/api/create-profile'
import { signUp } from '@/api/sign-up'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { InputCep } from '@/components/InputCep/InputCep'
import { InputPhone } from '@/components/InputPhone/InputPhone'
import { Textarea } from '@/components/Textarea/Textarea'
import { useAuth } from '@/contexts/AuthContext'
import { Checkbox } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { signupValidationSchema } from './signUpSchema'
import { Container, ContainerError, ContainerLoginForm, ContentLoginForm, ErrorMsg, FormControlLabelStyled, LeftContainer, RightContainer, Title } from './styles/SignUpContainer.style'

export function SignUpContainer() {
  const [isMerchant, setIsMerchant] = useState(false)
  const navigate = useNavigate()
  
  const { setUserData } = useAuth()

  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      const response = await signUp({
        name: values.fullName,
        email: values.email,
        password: values.password,
        cellphone: values.cellphone?.replace(/\D/g, ''),
        about: values.about,
        userType: isMerchant ? 'MERCHANT' : 'CONSUMER'
      })

      setUserData(response)

      setTimeout(async () => {
        await createProfile({
          name: values.fullName,
          email: values.email,
          userId: response.id,
          about: values.about,
          jobRole: values.job,
          zipCode: values.zipcode.replace(/\D/g, ''),
          phone: values.cellphone?.replace(/\D/g, ''),
        })

        setSubmitting(false)

        toast.success('Conta criada com sucesso.')

        navigate('/')
      }, [500])
    } catch {
      toast.error('Ops! Algo de errado aconteceu, tente novamente.')
    }
  }

  const handleChangeIsMerchant = (event) => {
    setIsMerchant(event.target.checked)
  }

  return (
    <Container>
      <LeftContainer />
      <RightContainer>
          <ContainerLoginForm>
            <ContentLoginForm>
                <Formik
                  initialValues={{ fullName: '', email: '', password: '' }}
                  validationSchema={signupValidationSchema}
                  onSubmit={handleSignUp}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form style={{ width: '100%' }}>
                      <Title>Cadastrar</Title>
                      <Field
                        as={Input}
                        name="fullName"
                        id="nome-completo-cadastrar"
                        type="text"
                        placeholder="Nome Completo"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: errors.fullName && touched.fullName ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                      />
                      {errors.fullName && touched.fullName && <ErrorMsg>{errors.fullName}</ErrorMsg>}
                      
                      <Field
                        as={Input}
                        name="email"
                        id="email-cadastrar"
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
                        as={InputPhone}
                        name="cellphone"
                        id="cellphone-cadastrar"
                        type="text"
                        placeholder="Telefone"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: errors.cellphone && touched.cellphone ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                      />
                      {errors.cellphone && touched.cellphone && (
                        <ContainerError>
                          <ErrorMsg>{errors.cellphone}</ErrorMsg>
                        </ContainerError>
                      )}
                      
                      <Field
                        as={Input}
                        name="password"
                        id="password-cadastrar"
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

                      <Field
                        as={InputCep}
                        name="zipcode"
                        id="zipcode-cadastrar"
                        type="text"
                        placeholder="CEP"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: errors.zipcode && touched.zipcode ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                        maxlength="9"
                      />
                      {errors.zipcode && touched.zipcode && (
                        <ContainerError>
                          <ErrorMsg>{errors.zipcode}</ErrorMsg>
                        </ContainerError>
                      )}

                      <Field
                        as={Textarea}
                        name="about"
                        id="about-cadastrar"
                        type="text"
                        placeholder="Comente algo sobre você ou seu serviço"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        borderRadius={15}
                        rows="3"
                        cols="50"
                      />
                      {errors.about && touched.about && (
                        <ContainerError>
                          <ErrorMsg>{errors.about}</ErrorMsg>
                        </ContainerError>
                      )}

                      <Field
                        as={Input}
                        name="job"
                        id="job-cadastrar"
                        type="text"
                        placeholder="Profissão"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: errors.job && touched.job ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                      />
                      {errors.job && touched.job && (
                        <ContainerError>
                          <ErrorMsg>{errors.job}</ErrorMsg>
                        </ContainerError>
                      )}

                      <div>
                        <FormControlLabelStyled
                          control={
                            <Checkbox
                              checked={isMerchant}
                              onChange={handleChangeIsMerchant}
                              inputProps={{ 'aria-label': 'controlled' }}
                              sx={{
                                color: '#44bb01',
                                fontWeight: 300,
                                '&.Mui-checked': {
                                  color: '#44bb01',
                                },
                              }}
                            />
                          }
                          label="Sou um prestador de serviços"
                        />
                      </div>
                      
                      <Button 
                        id="cadastrar-button" 
                        text="Cadastrar" 
                        type="submit"
                        disabled={isSubmitting}
                        style={{ marginTop: '1rem' }} 
                      />
                    </Form>
                  )}
                </Formik>
            </ContentLoginForm>
          </ContainerLoginForm>
      </RightContainer>
    </Container>
  )
}
