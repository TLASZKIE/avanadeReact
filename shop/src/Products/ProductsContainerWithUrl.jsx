import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import PropTypes from 'prop-types'

const ProductsContainerWithUrl = someHocGenerator(ProductsContainer)

function someHocGenerator(Child) {
  return class UrlWrapper extends Component {
    static contextTypes = {
      url: PropTypes.string.isRequired
    }

    render() {
      return <Child url={this.context.url} {...this.props} />
    }
  }
}

export default ProductsContainerWithUrl
