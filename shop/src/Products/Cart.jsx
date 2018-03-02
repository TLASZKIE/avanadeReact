import React, { Component } from 'react'

class Cart extends Component {
  render() {
    const { buyedProducts, onClear } = this.props
    const amount = buyedProducts.reduce((acc, v) => acc + v.price, 0)

    return (
      <div className="cart">
        <div>Amount: {amount}</div>
        <button onClick={onClear}>Clear</button>
      </div>
    )
  }
}

export default Cart
