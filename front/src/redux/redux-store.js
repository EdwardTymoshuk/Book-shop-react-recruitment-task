import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import booksReducer from './booksReducer'
import cartReducer from './cartReducer'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers ({
    booksPage: booksReducer,
    cartPage: cartReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;