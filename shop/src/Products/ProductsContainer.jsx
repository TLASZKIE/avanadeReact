import React, { Component } from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'

export default class ProductsContainer extends Component {
  state = {
    products: [],
    buyedProducts: [],
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
  onSearchingChange = newFilter => {
    this.setState({ filter: newFilter })
  }

  onBuy = product => {
    this.setState({
      buyedProducts: [...new Set([...this.state.buyedProducts, product])]
    })
  }

  onClear = () => {
    this.setState({
      buyedProducts: []
    })
  }
  render() {
    const { products, sorting, filter, buyedProducts } = this.state

    const filteredProducts =
      filter === ''
        ? products
        : products.filter(p => p.name.toLowerCase().indexOf(filter) !== -1)

    const sortedProducts =
      sorting === 'asc'
        ? filteredProducts.concat().sort((a, b) => a.price < b.price)
        : filteredProducts.concat().sort((a, b) => a.price > b.price)

    console.log(sorting)
    console.log(sortedProducts)

    return (
      <div className="ProductsContainer">
        <button onClick={this.handleSort}>{sorting}</button>
        <input
          type="text"
          value={filter}
          placeholder="Search list..."
          onChange={ev => this.onSearchingChange(ev.target.value)}
        />
        <Cart {...{ buyedProducts }} onClear={this.onClear} />
        <ProductsList products={sortedProducts} onBuy={this.onBuy} />
      </div>
    )
  }

  compare(a, b) {
    return a - b
  }
}
