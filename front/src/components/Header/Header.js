import React, { useState, useEffect, useMemo } from 'react'
import './Header.css'
import { getCart } from '../../redux/cartReducer'
import { Redirect, NavLink } from 'react-router-dom'

const Header = (props) => {

    const [count, setCount] = useState(0)

    const searchBookElement = (e) => {
        let searchingElement = e.target.value
        props.searchBook(searchingElement)
    }

    return (
        <nav class="header navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink class="navbar-brand" to="/books">React task</NavLink>
            <form class="header_search form-inline ml-auto">
                <input class="form-control" type="search" placeholder="Type to find a book..." aria-label="Search" onChange={searchBookElement}/>
            </form>
            <button class="header_cart nav-link ml-auto">
        {
count !== 0 
?
<NavLink to="/cart">Cart
<svg width="2em" height="1.5em" viewBox="0 0 16 16" class="bi bi-minecart-loaded" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"/>
  <path fill-rule="evenodd" d="M6 1a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638-.09.13-.194.25-.308.362H3c.13-.147.401-.432.562-.545a1.63 1.63 0 0 0 .393-.393A2.498 2.498 0 0 1 6 1z"/>
</svg>
</NavLink>
:
<NavLink to="/cart">Cart
<svg width="2em" height="1.5em" viewBox="0 0 16 16" class="bi bi-minecart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z" />
</svg>
</NavLink>
                }
            </button>
        </nav>
    )
}

export default Header