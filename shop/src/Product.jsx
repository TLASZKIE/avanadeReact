import React, { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = { toggle: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prev => {
      return { toggle: !prev.toggle }
    })
  }

  render() {
    const { img, name, desc } = this.props
    return (
      <div>
        <img src={img} onClick={this.handleClick} />
        <div>{name}</div>
        {this.state.toggle ? <div>{desc}</div> : null}
      </div>
    )
  }
}

export default Product
