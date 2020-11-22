import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CartPage from './CartPage'
import { getCart } from '../../redux/cartReducer'


const CartPageContainer = (props) => {

    useEffect(() => props.getCart(), [])

    return (
        <CartPage cart={props.cart}/>
    )
}

let mapStateToProps = (state) => {
    return {
        cart: state.cartPage
    }
    
}
export default connect(mapStateToProps,{getCart})(CartPageContainer)