import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
  const {
    id,
    img,
    name,
    price,
    description,
    isSpecial,
    toggle,
    onToggle,
    onBuy,
    onRemove
  } = props

  const specialClass = isSpecial ? 'special' : ''

  return (
    <div className={`products-product ${specialClass}`}>
      <img src={img} alt={name} onClick={onToggle} width="100" height="100" />
      <div>{name}</div>
      <div>{price}</div>
      <Link to={`/product/${id}`}>Details</Link>
      <button onClick={onBuy}>Buy</button>
      <button onClick={onRemove}>Remove</button>
      {toggle ? <div>{description}</div> : null}
    </div>
  )
}
