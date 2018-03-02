import React, { Component } from 'react'

class Product extends Component {
  state = { toggle: false }

  handleClick = () => {
    this.setState(prev => ({ toggle: !prev.toggle }))
  }

  render() {
    const { img, name, desc } = this.props
    return (
      <div>
        <img src={img} alt={name} onClick={this.handleClick} />
        <div>{name}</div>
        {this.state.toggle ? <div>{desc}</div> : null}
      </div>
    )
  }
}

export default Product
