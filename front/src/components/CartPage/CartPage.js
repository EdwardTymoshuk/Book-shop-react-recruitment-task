import React from 'react'
import PageHeader from '../common/PageHeader/PageHeader'
import './CartPage.css'
import { NavLink } from 'react-router-dom'

const CartPage = (props) => {

    let totalPrice = 0

    props.cart.forEach(item => totalPrice += item.price)

    const deleteBookFromCart = (value) => {
        // return props.deleteBookFromCart(bookId)
        console.log(value)
    }

    return (
        <container className="cart">
            <PageHeader header="Koszyk" />
            <article className="cart_list">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="cart_list-left-block ">
                    <span>Okładka</span>
                    <span>Nazwa</span>
                    <span>Autor</span>
                    </div>
                    <div className="cart_list-rigth-block mx-auto">
                    <p>Cena/szt</p>
                    <span> </span>
                    </div>
                </li>
                {
                    !!props.cart.length
                    ?
                    props.cart.map((item, i) => {
                        
                        console.log(item._id)
                        return <li className="list-group-item" key={item._id}>
                        <div className="cart_list-left-block">
                        <img src={item.cover_url} alt="Okładka książki" />
                    <span>{item.title}</span>
                    <span>{item.author}</span>
                        </div>
                        <div className="cart_list-rigth-block ml-auto">
                    <p>{item.price} {item.currency} </p>
                    <button onClick={() => deleteBookFromCart(item._id)}>X</button>
                        </div>
                    </li>
                    })
                    :
                <div class="cart_list-empty jumbotron jumbotron-fluid">
  <div class="container">
                <p class="lead text-muted">Twój koszyk jest pusty. Kliknij przycisk poniżej, by wybrać coś dla siebie.</p>
                <NavLink to="/books"><button className="btn" >książki</button></NavLink>
  </div>
</div>
                }
            </ul>
            </article>
            <article className="cart_checkout-block ml-auto">
            <span>Do zapłaty: {totalPrice} PLN</span>
            {
                props.cart.length
                ?
            <NavLink to="/order"><button className="btn">DALEJ</button></NavLink>
            :
            <NavLink to="/order"><button className="btn disabled" disabled>DALEJ</button></NavLink>
}
            </article>
        </container>
    )
}

export default CartPage