import React from 'react'
import PropTypes from 'prop-types'
import ProductsPanel from './ProductsPanel'

const ProductsList = props => {
  const { onBuy, onRemove } = props
  const specialProduct = props.products.filter(p => p.isSpecial)
  const normalProduct = props.products.filter(p => !p.isSpecial)

  return (
    <div>
      <ProductsPanel
        products={specialProduct}
        title="Special offer"
        onBuy={onBuy}
        onRemove={onRemove}
      />
      <ProductsPanel
        products={normalProduct}
        title="Products"
        onBuy={onBuy}
        onRemove={onRemove}
      />
    </div>
  )
}

ProductsList.propTypes = {}

export default ProductsList
