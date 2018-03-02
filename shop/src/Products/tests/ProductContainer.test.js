import React from 'react'
import ReactDOM from 'react-dom'
import ProductContainer from '../ProductContainer'

//4/ The most primitive smoke test.
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProductContainer />, div)
})
