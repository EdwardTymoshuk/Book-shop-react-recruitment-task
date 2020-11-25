import React from 'react'
import './OrderForm.css'
import { required, zipCode, maxLength, minLength } from '../../utils/validators/validators'
import { Input } from '../common/FormControls/FormControls'
import { Field } from 'redux-form'

const OrderForm = (props) => {

    const minLength4 = minLength(4)
    const minLength5 = minLength(5)
    const maxLength50 = maxLength(50)

    return (
        <form className="order-form mx-auto" onSubmit={props.handleSubmit}>
            <label for="first_name">Imię</label>
            <Field name="first_name" id="first_name" validate={[required, minLength4, maxLength50]} type="text" class="form-control" placeholder="Podaj swoje imię" component={Input} />
            <label for="last_name">Nazwisko</label>
            <Field name="last_name" id="last_name" validate={[required, minLength5, maxLength50]} type="text" class="form-control" placeholder="Podaj swoje nazwisko" component={Input} />
            <label for="city">Miejscowość</label>
            <Field name="city" id="city" validate={[required]} type="text" class="form-control" placeholder="Podaj swoją miejscowość" component={Input} />
            <label for="zip_code">Kod pocztowy</label>
            <Field name="zip_code" id="zip_code" validate={[required, zipCode]} type="text" inputmode="numeric" class="form-control" placeholder="Podaj swój kod pocztowy (w formacie XX-XXX)" component={Input} />
            {
                    props.cart.length
                        ?
                        <button className="btn">zamawiam i płacę</button>
                        :
                        <button className="btn disabled" disabled>Zamawiam i płacę</button>
                }
        </form>
    )
}

export default OrderForm