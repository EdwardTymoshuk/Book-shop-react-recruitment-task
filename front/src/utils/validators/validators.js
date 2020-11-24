export const required = value => value ? undefined : 'Pole wymagane'
export const minLength = min => value =>
  value && value.length < min ? `Minimalna liczba znaków: ${min}` : undefined
export const maxLength = max => value =>
  value && value.length > max ? `Maksymalna liczba znaków: ${max}` : undefined
export const maxLength15 = maxLength(15)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Niewłaściwy adress email' : undefined
export const zipCode = value => value && !/^\d{2}(-\d{3})?$/.test(value) ? 'Niewłaściwy kod pocztowy. Podaj kod pocztowy w formacie XX-XXX' : undefined