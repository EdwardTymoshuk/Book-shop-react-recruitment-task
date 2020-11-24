import React from 'react'
import OrderPage from './OrderPage'
import { connect } from 'react-redux'
import { makeAnOrder } from '../../redux/cartReducer'

const OrderPageContainer = (props) => {



    let makeAnOrder = (values) => {
        let order = props.cart.reduce((prev, item) => {
            !prev[item.id]
            ?
            prev[item.id] = 1
            :
            prev[item.id] +=1
            return prev
        }, {})

        props.makeAnOrder(Object.entries(order).map((item) => ({id: item[0], quantity: item[1]})), values)
        console.log(Object.entries(order).map((item) => ({id: item[0], quantity: item[1]})))
    }
    return (
        <OrderPage cart={props.cart} makeAnOrder={makeAnOrder}/>
    )
}

let mapStateToProps = (state) => {
    return {
        cart: state.cartPage.cart
    }
}

export default connect(mapStateToProps, {makeAnOrder})(OrderPageContainer)