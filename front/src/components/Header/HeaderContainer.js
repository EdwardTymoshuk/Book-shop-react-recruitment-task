import React from 'react'
import { connect } from 'react-redux'
import { setBooks, searchBook } from '../../redux/booksReducer'
import Header from './Header'


const HeaderContainer = (props) => {

    const searchBook = (searchingElement) => {
        props.searchBook(searchingElement)
    }

    return (
        <Header cart={props.cart} searchBook={searchBook} />
    )
}

let mapStateToProps = (state) => {
    return {
        cart: state.cartPage.cart
    }
}
export default connect(mapStateToProps, { setBooks, searchBook })(HeaderContainer)