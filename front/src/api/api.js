import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/'
})

export const booksAPI = {
    getBooks() {
        return instance.get('/book').then(response => response.data)
        }
    }
