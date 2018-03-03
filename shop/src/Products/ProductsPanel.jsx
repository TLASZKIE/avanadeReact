import React from 'react'
import ProductContainer from './ProductContainer'

const ProductsPanel = props => {
  const { products, title, onBuy, onRemove } = props
  return (
    <div className="products-panel">
      <h1>{title}</h1>
      {products.map(product => (
        <ProductContainer
          product={product}
          key={product.id}
          onBuy={onBuy}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default ProductsPanel
