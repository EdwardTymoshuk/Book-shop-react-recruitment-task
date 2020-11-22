import React from 'react'
import PageHeader from '../common/PageHeader/PageHeader'
import OrderForm from './OrderForm'
import { reduxForm } from 'redux-form'

const OrderPage = () => {
    return (
        <container>
            <PageHeader header="order"/>
            <OrderFormRedux />
        </container>
    )
}

const OrderFormRedux = reduxForm({ form: 'order-form' })(OrderForm);

export default OrderPage