import { cartAPI } from "../api/api"
import { Redirect } from "react-router-dom"

let initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART/ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.item] }
        case 'CART/GET_CART':
            return { ...state, cart: [...state.cart] }
        case 'CART/SET_CART':
            return { ...state, cart: [...action.cart] }
        case 'CART/RESET_CART':
            return { ...state, cart: []}
        default:
            return state
    }
}

export const addToCart = (item) => ({ type: 'CART/ADD_TO_CART', item })
export const setCart = (cart) => ({ type: 'CART/SET_CART', cart })
export const getCart = () => ({ type: 'CART/GET_CART' })
export const resetCart = () => ({ type: 'CART/RESET_CART' })

export const makeAnOrder = (order, customer) => async (dispatch) => {
    await cartAPI.makeAnOrder({ order, ...customer })
    try {
        alert("Dziękujemy za zakup. Twoje zamówienie ruszyło w drogę. Miłego dnia ;)")
        dispatch(resetCart())
    } catch (err) {
        alert({ message: err })
    }
}




export default cartReducer