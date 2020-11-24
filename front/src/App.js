import './App.css'
import BooksPageContainer from './components/BooksPage/BooksPageContainer'
import { Switch, Route } from 'react-router-dom'
import CartPageContainer from './components/CartPage/CartPageContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import OrderPageContainer from './components/OpderPage/OrderPageContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
      <Route path="/" exact render={() => <BooksPageContainer />} />
      <Route path="/books" render={() => <BooksPageContainer />} />
      <Route path="/cart" render={() => <CartPageContainer />} />
      <Route path="/order" render={() => <OrderPageContainer />} />

      </Switch>
    </div>
  )
}

export default App
