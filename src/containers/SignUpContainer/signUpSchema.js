import * as Yup from 'yup';

const telefoneValidator = (value) => {
  // Expressão regular para validar um número de telefone no formato (99) 99999-9999 ou (99) 9999-9999
  const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return telefoneRegex.test(value);
}

export const signupValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nome completo é obrigatório')
    .min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória'),
  about: Yup.string()
    .required('Sobre é obrigatório')
    .min(15, 'Sobre deve ter no mínimo 15 caracteres'),
  city: Yup.string()
    .required('Cidade é obrigatório')
    .min(3, 'Cidade deve ter no mínimo 3 caracteres'),
  state: Yup.string()
    .required('Cidade é obrigatório')
    .min(2, 'Estado deve ter 2 caracteres')
    .max(2, 'Estado deve ter 2 caracteres'),
  cellphone: Yup.string()
    .required('Telefone é obrigatório')
    .test('isValidTelefone', 'Telefone inválido', telefoneValidator)
    .min(14, 'Máximo 10 caracteres'),
  zipcode: Yup.string()
    .required('CEP é obrigatório')
    .min(9, 'CEP deve ter 8 caracteres')
    .max(9, 'CEP deve ter 8 caracteres'),
  job: Yup.string()
    .required('Profissão é obrigatório')
    .min(2, 'Profissão deve ter no mínimo 2 caracteres'),
})