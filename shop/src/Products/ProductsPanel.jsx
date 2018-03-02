import React from 'react'
import ProductContainer from './ProductContainer'

const ProductsPanel = props => {
  return (
    <div className="products-panel">
      <h1>{props.title}</h1>
      {props.products.map(product => (
        <ProductContainer product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductsPanel
