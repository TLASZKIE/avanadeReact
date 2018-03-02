import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export default class ProductContainer extends Component {
  state = { toggle: false }

  handleClick = () => {
    this.setState(prev => ({ toggle: !prev.toggle }))
  }

  render() {
    return (
      <Product
        {...this.props.product}
        toggle={this.state.toggle}
        onToggle={this.handleClick}
      />
    )
  }
}

ProductContainer.propTypes = {}
