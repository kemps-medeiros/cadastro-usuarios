import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'é inválido',
    required: '*Campo obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}',
    typeError: 'deve ser um número',
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: '*Formato de email inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo',
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro',
  },
});

export default Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  emaillogin: Yup.string().email(),
  emailRegister: Yup.string().email(),
  cpf: Yup.number().typeError('*Deve ser um numero').required(),
  cep: Yup.string().required(),
  rua: Yup.string().required(),
  bairro: Yup.string().required(),
  numero: Yup.number().required(),
  cidade: Yup.string().required(),
  passwordRegister: Yup.string().min(4),
});
