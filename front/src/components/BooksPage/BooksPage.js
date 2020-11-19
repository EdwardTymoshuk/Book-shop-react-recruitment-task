import React from 'react'
import './BooksPage.css'
import PageHeader from '../common/PageHeader/PageHeader'

const BooksPage = () => {
    return (
        <container>
            <PageHeader header="wszystkie książki" />
            <article className="books_container">
                {
                    props.books.map(item => {
                        return <aside className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tytuł książki</h5>
                                <p className="card-text">Autor:</p>
                                <p className="card-text">Liczba stron:</p>
                                <a href="#" className="btn btn-primary">Dodaj do koszyka</a>
                            </div>
                        </aside>
                    })
                }
            </article>
        </container>
    )
}

export default BooksPage