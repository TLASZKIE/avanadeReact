import React, { Component } from 'react'
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import ProductsContainer from './Products/ProductsContainer'
import Contact from './Contact'
import Footer from './Footer'

import { connect } from 'react-redux'
import actionCreators from './store/actionCreators'
import { bindActions } from './store/actionCreators'
import store from './store/store.js'

export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchProducts()
  }

  render() {
    const { products, fetching, buyedProducts } = this.props
    const { addProductToCart, clearCart } = this.props.actions

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My shop</h1>
        </header>
        <HashRouter>
          <React.Fragment>
            <NavLink exact to="/">
              <button>List</button>
            </NavLink>
            <NavLink to="/contact">
              <button>Contact</button>
            </NavLink>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <ProductsContainer
                    {...{
                      products,
                      fetching,
                      buyedProducts,
                      addProductToCart,
                      clearCart
                    }}
                  />
                )}
                // component={ProductsContainer}
              />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </React.Fragment>
        </HashRouter>
      </div>
    )
  }
}
export default connect(
  state => ({
    products: state.products,
    fetching: state.fetching,
    buyedProducts: state.buyedProducts
  }),
  dispatch => ({
    actions: bindActions(actionCreators, dispatch)
  })
)(App)
