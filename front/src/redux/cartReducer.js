let initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART/ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.item] }
        case 'CART/GET_CART':
            return {...state, cart: [...state.cart]}
        default:
            return state
    }
}

export const addToCart = (item) => ({type: 'CART/ADD_TO_CART', item})
export const getCart = () => ({type: 'CART/GET_CART'})


export default cartReducer