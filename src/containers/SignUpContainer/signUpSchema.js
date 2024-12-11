import * as Yup from 'yup'

export const signupValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nome completo é obrigatório')
    .min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
})