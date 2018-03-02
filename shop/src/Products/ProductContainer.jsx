import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export default class ProductContainer extends Component {
  state = { toggle: false, buyed: false }

  handleToggle = () => {
    this.setState(prev => ({ toggle: !prev.toggle }))
  }

  handleBuy = () => {
    this.props.onBuy(this.props.product)
  }

  render() {
    return (
      <Product
        {...this.props.product}
        toggle={this.state.toggle}
        onToggle={this.handleToggle}
        onBuy={this.handleBuy}
      />
    )
  }
}

ProductContainer.propTypes = {}
