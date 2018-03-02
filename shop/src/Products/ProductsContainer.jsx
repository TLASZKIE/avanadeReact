import React, { Component } from 'react'
import ProductsList from './ProductsList'

export default class ProductsContainer extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('data/products.json')
      .then(res => res.json())
      .then(products => this.setState({ products }))
  }

  render() {
    return (
      <div className="ProductsContainer">
        <ProductsList products={this.state.products} />
      </div>
    )
  }
}
