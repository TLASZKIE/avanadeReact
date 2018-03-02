import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ProductsContainer from './Products/ProductsContainer'
import UrlProvider from './UrlProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My shop</h1>
        </header>
        <UrlProvider url="data/products.json">
          <ProductsContainer />
        </UrlProvider>
      </div>
    )
  }
}

export default App
