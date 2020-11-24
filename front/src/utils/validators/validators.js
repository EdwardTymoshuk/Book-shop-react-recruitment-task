export const required = value => value ? undefined : 'Wymagany'
export const minLength = min => value =>
  value && value.length < min ? `Powinno być ${min} znaków lub więcej` : undefined
export const maxLength = max => value =>
  value && value.length > max ? `Powinno być ${max} znaków lub więcej` : undefined
export const maxLength15 = maxLength(15)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Nieprawidlowy adress email' : undefined
export const zipCode = value => value && !/^\d{2}(-\d{3})?$/.test(value) ? 'Niewłaściwy kod pocztowy. Podaj kod pocztowy w formacie XX-XXX' : undefined