import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ProductsContainer from './Products/ProductsContainer'
import UrlProvider from './UrlProvider'
import ProductsContainerWithUrl from './Products/ProductsContainerWithUrl'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My shop</h1>
        </header>
        <UrlProvider url="data/products.json">
          <ProductsContainerWithUrl />
        </UrlProvider>
      </div>
    )
  }
}
export default App
