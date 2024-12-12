import * as Yup from 'yup'

export const newServiceSchema = Yup.object().shape({
  description: Yup.string()
    .required('Campo obrigatório')
    .min(2, 'O campo deve ter no minimo 2 caracteres'),
  avarageTime: Yup.number()
    .required('Campo obrigatório')
    .min(1, 'O campo deve ter no minimo 1 caracteres'),
  price: Yup.string()
    .required('Campo obrigatório')
    .min(0.01, 'O campo deve ter no minimo R$ 0,01'),
})