import './App.css'
import Header from './components/Header/Header'
import BooksPageContainer from './components/BooksPage/BooksPageContainer'
import { Switch, Route } from 'react-router-dom'
import CartPageContainer from './components/CartPage/CartPageContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import OrderPage from './components/OpderPage/OrderPage'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
      <Route path="/books" render={() => <BooksPageContainer />} />
      <Route path="/cart" render={() => <CartPageContainer />} />
      <Route path="/order" render={() => <OrderPage />} />

      </Switch>
    </div>
  )
}

export default App
