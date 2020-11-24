import React from 'react'
import PageHeader from '../common/PageHeader/PageHeader'
import OrderForm from './OrderForm'
import { reduxForm } from 'redux-form'
import './OrderPage.css'
import { NavLink } from 'react-router-dom'

const OrderPage = (props) => {

    let makeAnOrder = (values) => {
        props.makeAnOrder(values)
    }

    return (
        <container>
            <PageHeader header="Podsumowanie" />
            {
                props.cart.length
                    ?
                    <section class="order_cart-info jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">Zamówiłeś(-aś) {<strong>{props.cart.length}</strong>} książki(-ek)</h1>
                            <p class="lead text-muted">Aby zfinalizować zakup, wypełnij pola poniżej</p>
                        </div>
                    </section>
                    :
                    <section class="cart_list-empty jumbotron jumbotron-fluid">
                        <div class="container">
                            <p class="lead text-muted">Twój koszyk jest pusty. Kliknij przycisk poniżej, by wybrać coś dla siebie.</p>
                            <NavLink to="/books"><button className="btn">książki</button></NavLink>
                        </div>
                    </section>
            }
            <OrderFormRedux onSubmit={makeAnOrder} />
        </container>
    )
}

const OrderFormRedux = reduxForm({ form: 'order-form' })(OrderForm);

export default OrderPage