import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CartPage from './CartPage'
import { getCart, setCart } from '../../redux/cartReducer'


const CartPageContainer = (props) => {

    useEffect(() => props.getCart(), [])

    const deleteBookFromCart = (bookId) => {
        let arr = props.cart.filter(item => item ? item._id !== bookId : '')
        console.log(props.cart)
        props.setCart(arr)
    }

    return (
        <CartPage cart={props.cart} deleteBookFromCart={deleteBookFromCart} />
    )
}

let mapStateToProps = (state) => {
    return {
        cart: state.cartPage.cart
    }

}

export default connect(mapStateToProps, { getCart, setCart })(CartPageContainer)