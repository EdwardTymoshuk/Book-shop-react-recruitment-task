import { booksAPI } from "../api/api"

let initialState = {
  books: []
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS/SET_BOOKS':
      return { ...state, books: [...action.books] }
    default:
      return state
  }
}

export const setBooks = (books = initialState) => ({ type: 'BOOKS/SET_BOOKS', books })

export const getBooks = () => async (dispatch) => {
  let data = await booksAPI.getBooks()
  dispatch(setBooks(data.data))

}

export const searchBook = (searchingElement) => async (dispatch) => {
    let data = await booksAPI.getBooks()
    !!searchingElement
    ?
    dispatch(setBooks(data.data.filter(item => {
      if (item.title.toLowerCase().includes(searchingElement.toLowerCase())) {
        return item
      } else {
        return ''
      }
    })))
    :
    dispatch(setBooks(data.data))
}

export default booksReducer