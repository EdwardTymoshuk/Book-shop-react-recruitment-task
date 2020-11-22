import React from 'react'
import './OrderForm.css'
import { required, postalCode } from '../../utils/validators/validators'
import { Input } from '../common/FormControls/FormControls'
import { Field } from 'redux-form'

const OrderForm = (props) => {

    return (
        <form className="order-form mx-auto" onSubmit={props.handleSubmit}>
                <label for="firstName">Imię</label>
                <Field name="firstName" id="firstName" validate={[required]} type="text" class="form-control" placeholder="Podaj swoje imię" component={Input}/>
                <label for="secondName">Nazwisko</label>
                <Field name="secondName" id="secondName" validate={[required]} type="text" class="form-control" placeholder="Podaj swoje nazwisko" component={Input}/>
                <label for="city">Miejscowość</label>
                <Field name="city" id="city" validate={[required]} type="text" class="form-control" placeholder="Podaj swoją miejscowość" component={Input}/>
                <label for="postalCode">Kod pocztowy</label>
                <Field name="postalCode" id="postalCode" validate={[required, postalCode]} type="text" class="form-control" placeholder="Podaj swój kod pocztowy" component={Input}/>
            <button type="submit" class="btn btn-primary" disabled={props.submitting}>zamawiam i płacę</button>
        </form>
    )
}

export default OrderForm