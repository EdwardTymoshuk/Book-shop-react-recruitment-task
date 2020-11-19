import React from 'react'
import BooksPage from './BooksPage'

const BooksPageContainer = () => {
    return (
        <BooksPage books={props.books}/>
    )
}

let mapStateToProps = (state) => {
    books: state.books
}
export default connect(mapStateToProps)(BooksPageContainer)