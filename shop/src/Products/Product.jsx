import React from 'react'

export default function Product(props) {
  const {
    img,
    name,
    price,
    desc,
    specialOffer,
    toggle,
    onToggle,
    onBuy
  } = props

  const specialClass = specialOffer ? 'special' : ''

  return (
    <div className={`products-product ${specialClass}`}>
      <img src={img} alt={name} onClick={onToggle} width="100" height="100" />
      <div>{name}</div>
      <div>{price}</div>
      <button onClick={onBuy}>Buy</button>
      {toggle ? <div>{desc}</div> : null}
    </div>
  )
}
