import React from 'react'

export default function Product(props) {
  const { img, name, price, desc, specialOffer, toggle, onToggle } = props

  const specialClass = specialOffer ? 'special' : ''

  return (
    <div className={`products-product ${specialClass}`}>
      <img src={img} alt={name} onClick={onToggle} width="100" height="100" />
      <div>{name}</div>
      <div>{price}</div>
      {toggle ? <div>{desc}</div> : null}
    </div>
  )
}
