import React from 'react'

export default function ProductDetails(props) {
  const { img, name, price, desc, specialOffer } = props

  const specialClass = specialOffer ? 'special' : ''

  return (
    <div className={`products-product ${specialClass}`}>
      <img src={img} alt={name} width="300" height="300" />
      <h1>{name}</h1>
      <div>{price}</div>
      <div>{desc}</div>
    </div>
  )
}
