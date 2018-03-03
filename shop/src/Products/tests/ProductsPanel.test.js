import React from 'react'
import ReactDOM from 'react-dom'
import ProductsPanel from '../ProductsPanel'

//4/ The most primitive smoke test.
it('renders without crashing', () => {
  const div = document.createElement('div')

  const title = 'Title'
  const products = [{ name: 'name', id: 1, isSpecial: true, price: 1600 }]
  ReactDOM.render(<ProductsPanel title={title} products={products} />, div)
})
