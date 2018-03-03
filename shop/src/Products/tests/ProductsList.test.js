import React from 'react'
import ReactDOM from 'react-dom'
import ProductsList from '../ProductsList'
import renderer from 'react-test-renderer'

//4/ The most primitive smoke test.
it('renders without crashing', () => {
  const div = document.createElement('div')

  const products = [{ name: 'name', id: 1, isSpecial: true, price: 1600 }]
  ReactDOM.render(<ProductsList products={products} />, div)
})

it('renders correctly', () => {
  const products = [{ name: 'name', id: 1, isSpecial: true, price: 1600 }]
  const tree = renderer.create(<ProductsList products={products} />).toJSON()

  expect(tree).toMatchSnapshot()
})
