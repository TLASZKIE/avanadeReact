import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductsList from './ProductsList'
import Cart from './Cart'

export default class ProductsContainer extends Component {
  state = {
    sorting: 'asc',
    filter: ''
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
    this.props.addProductToCart(product)
    // this.setState({
    //   buyedProducts: [...new Set([...this.state.buyedProducts, product])]
    // })
  }

  onClear = () => {
    this.props.clearCart()
  }
  render() {
    const { sorting, filter } = this.state
    const { products, fetching, buyedProducts } = this.props

    const filteredProducts =
      filter === ''
        ? products
        : products.filter(p => p.name.toLowerCase().indexOf(filter) !== -1)

    const sortedProducts =
      sorting === 'asc'
        ? filteredProducts.concat().sort((a, b) => a.price < b.price)
        : filteredProducts.concat().sort((a, b) => a.price > b.price)

    return (
      <div className="ProductsContainer">
        {fetching ? (
          <div>Loading...</div>
        ) : (
          <div>
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
        )}
      </div>
    )
  }
}
