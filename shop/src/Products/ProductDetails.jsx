import React from 'react'

export default function ProductDetails(props) {
  const { img, name, price, description, isSpecial } = props

  const specialClass = isSpecial ? 'special' : ''

  return (
    <div className={`products-product ${specialClass}`}>
      <img src={img} alt={name} width="300" height="300" />
      <h1>{name}</h1>
      <div>{price}</div>
      <div>{description}</div>
    </div>
  )
}
