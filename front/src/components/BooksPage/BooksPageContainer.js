import React, { useEffect, useState } from 'react'
import BooksPage from './BooksPage'
import { connect } from 'react-redux'
import { getBooks } from '../../redux/booksReducer'
import { addToCart } from '../../redux/cartReducer'

const BooksPageContainer = (props) => {

    useEffect(() => props.getBooks(), [])
    
    const addToCart = (item) => {
        props.addToCart(item)
    }

    return (
        <BooksPage books={props.books.books} addToCart={addToCart}/>
    )
}

let mapStateToProps = (state) => {
    return {
        books: state.booksPage,
    }
    
}
export default connect(mapStateToProps,{getBooks, addToCart})(BooksPageContainer)