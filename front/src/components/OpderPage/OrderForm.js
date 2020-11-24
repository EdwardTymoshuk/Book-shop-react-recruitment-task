import React from 'react'
import './OrderForm.css'
import { required, zipCode } from '../../utils/validators/validators'
import { Input } from '../common/FormControls/FormControls'
import { Field } from 'redux-form'

const OrderForm = (props) => {

    return (
        <form className="order-form mx-auto" onSubmit={props.handleSubmit}>
                <label for="first_name">Imię</label>
                <Field name="first_name" id="first_name" validate={[required]} type="text" class="form-control" placeholder="Podaj swoje imię" component={Input}/>
                <label for="last_name">Nazwisko</label>
                <Field name="last_name" id="last_name" validate={[required]} type="text" class="form-control" placeholder="Podaj swoje nazwisko" component={Input}/>
                <label for="city">Miejscowość</label>
                <Field name="city" id="city" validate={[required]} type="text" class="form-control" placeholder="Podaj swoją miejscowość" component={Input}/>
                <label for="zip_code">Kod pocztowy</label>
                <Field name="zip_code" id="zip_code" validate={[required, zipCode]} type="text"  inputmode="numeric" class="form-control" placeholder="Podaj swój kod pocztowy" component={Input}/>
            <button type="submit" class="btn btn-primary" disabled={props.submitting} onClick={() => {}}>zamawiam i płacę</button>
        </form>
    )
}

export default OrderForm