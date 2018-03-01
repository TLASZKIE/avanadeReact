import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('data/products.json')
      .then(res => res.json())
      .then(products => this.setState({ products }))
  }

  render() {
    return (
      <div>
        {this.state.products.map(product => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    )
  }
}

export default ProductList
