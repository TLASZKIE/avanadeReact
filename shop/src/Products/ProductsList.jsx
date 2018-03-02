import React from 'react'
import PropTypes from 'prop-types'
import ProductsPanel from './ProductsPanel'

const ProductsList = props => {
  const { onBuy } = props
  const specialProduct = props.products.filter(p => p.specialOffer)
  const normalProduct = props.products.filter(p => !p.specialOffer)

  return (
    <div>
      <ProductsPanel
        products={specialProduct}
        title="Special offer"
        onBuy={onBuy}
      />
      <ProductsPanel products={normalProduct} title="Products" onBuy={onBuy} />
    </div>
  )
}

ProductsList.propTypes = {}

export default ProductsList
