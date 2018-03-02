import React from 'react'

export default function Product(props) {
  const { img, name, desc, specialOffer, toggle, onToggle } = props

  const specialClass = specialOffer ? 'special' : ''

  return (
    <div className={specialClass}>
      <img src={img} alt={name} onClick={onToggle} />
      <div>{name}</div>
      {toggle ? <div>{desc}</div> : null}
    </div>
  )
}
