import React, { Component } from 'react'
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import UrlProvider from './UrlProvider'
import ProductsContainerWithUrl from './Products/ProductsContainerWithUrl'
import Contact from './Contact'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My shop</h1>
        </header>
        <UrlProvider url="data/products.json">
          <HashRouter>
            <React.Fragment>
              <NavLink exact to="/">
                <button>List</button>
              </NavLink>
              <NavLink to="/contact">
                <button>Contact</button>
              </NavLink>
              <Switch>
                <Route exact path="/" component={ProductsContainerWithUrl} />
                <Route path="/contact" component={Contact} />
              </Switch>
              <Footer />
            </React.Fragment>
          </HashRouter>
        </UrlProvider>
      </div>
    )
  }
}
export default App
