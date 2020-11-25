import React, { useState } from 'react'
import PageHeader from '../common/PageHeader/PageHeader'
import OrderForm from './OrderForm'
import { reduxForm } from 'redux-form'
import './OrderPage.css'
import { NavLink, Redirect } from 'react-router-dom'

const OrderPage = (props) => {

    const [isOrderSuccess, setIsOrderSuccess] = useState(false)

    let makeAnOrder = (values) => {
        props.makeAnOrder(values)
        setIsOrderSuccess(true)
    }

    if(!!isOrderSuccess) {
        return <Redirect to="/" />
    }
    return (
        <container>
            <PageHeader header="Podsumowanie" />
            {
                props.cart.length
                    ?
                    <section className="order_cart-info jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Zamówiłeś(-aś) {<strong>{props.cart.length}</strong>} książki(-ek)</h1>
                            <p className="lead text-muted">Aby sfinalizować zakup, wypełnij pola poniżej</p>
                        </div>
                    </section>
                    :
                    <section className="cart_list-empty jumbotron jumbotron-fluid">
                        <div className="container">
                            <p className="lead text-muted">Twój koszyk jest pusty. Kliknij przycisk poniżej, aby wybrać coś dla siebie.</p>
                            <NavLink to="/books"><button className="btn">książki</button></NavLink>
                        </div>
                    </section>
            }
            <OrderFormRedux onSubmit={makeAnOrder} cart={props.cart}/>
        </container>
    )
}

const OrderFormRedux = reduxForm({ form: 'order-form' })(OrderForm);

export default OrderPage