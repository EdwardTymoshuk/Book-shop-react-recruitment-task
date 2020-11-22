import React, { useEffect, useState, useMemo } from 'react'
import { connect } from 'react-redux'
import { setBooks, searchBook } from '../../redux/booksReducer'
import Header from './Header'


const HeaderContainer = (props) => {

    // const setBooks = (el) => {
    //     !el
    //     ?   
    //     props.getBooks()
    //     :
    //     console.log(props.books.books.length , el, booksArr.books)
    //     props.books.books.length ? props.setBooks(props.books.books.filter(item => item.title.toLowerCase().includes(el))) : el && props.setBooks(booksArr.books.filter(item => item.title.toLowerCase().includes(el)))
    // }
   const searchBook = (searchingElement) => {
        props.searchBook(searchingElement)
      }

    return (
        <Header books={props.books} searchBook={searchBook}/>
    )
}

let mapStateToProps = (state) => {
    return {
        books: state.booksPage
    }
    
}
export default connect(mapStateToProps, {setBooks, searchBook})(HeaderContainer)