import React, { Component } from 'react'
import ProductsList from './ProductsList'

export default class ProductsContainer extends Component {
  state = {
    products: [],
    sorting: 'asc',
    filter: ''
  }

  componentDidMount() {
    fetch('data/products.json')
      .then(res => res.json())
      .then(products => this.setState({ products }))
  }

  handleSort = () => {
    this.state.sorting === 'asc'
      ? this.setState({ sorting: 'desc' })
      : this.setState({ sorting: 'asc' })
  }

  render() {
    const { products, sorting, filter } = this.state

    const filteredProducts =
      filter === '' ? products : products.filter(p => p.name.includes(filter))

    const sortedProducts =
      sorting === 'asc'
        ? filteredProducts.concat().sort((a, b) => a.price < b.price)
        : filteredProducts.concat().sort((a, b) => a.price > b.price)

    console.log(sorting)
    console.log(sortedProducts)

    return (
      <div className="ProductsContainer">
        <button onClick={this.handleSort}>{sorting}</button>
        <ProductsList products={sortedProducts} />
      </div>
    )
  }

  compare(a, b) {
    return a - b
  }
}
