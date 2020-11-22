import React, { useState } from 'react'
import PageHeader from '../common/PageHeader/PageHeader'
import './CartPage.css'
import { NavLink } from 'react-router-dom'

const CartPage = (props) => {

    let totalPrice = 0
    props.cart.cart.forEach((item) => totalPrice += item.price)

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
                    <div className="cart_list-rigth-block ml-auto">
                    <p>Cena/szt</p>
                    </div>
                </li>
                {
                    !!props.cart.cart.length
                    ?
                    props.cart.cart.map(item => {
                        return <li className="list-group-item">
                        <div className="cart_list-left-block">
                        <img src={item.cover_url} alt="Okładka książki" />
                    <span>{item.title}</span>
                    <span>{item.author}</span>
                        </div>
                        <div className="cart_list-rigth-block ml-auto">
                    <p>{item.price} zł</p>
                        </div>
                    </li>
                    })
                    :
                    console.log('Zalupa')
                }
            </ul>
            </article>
            <article className="cart_checkout-block ml-auto">
            <span>Do zapłaty: {totalPrice} zł</span>
                <button><NavLink to="/order">DALEJ</NavLink></button>
            </article>
        </container>
    )
}

export default CartPage