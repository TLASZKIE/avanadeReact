import React from 'react'
import ProductContainer from './ProductContainer'

const ProductsPanel = props => {
  const { products, title, onBuy } = props
  return (
    <div className="products-panel">
      <h1>{title}</h1>
      {products.map(product => (
        <ProductContainer product={product} key={product.id} onBuy={onBuy} />
      ))}
    </div>
  )
}

export default ProductsPanel
