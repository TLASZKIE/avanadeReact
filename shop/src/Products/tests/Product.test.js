import React from 'react'
import ReactDOM from 'react-dom'
import Product from '../Product'
import renderer from 'react-test-renderer'

//4/ The most primitive smoke test.
it('renders without crashing', () => {
  const product = { name: 'name', id: 1, specialOffer: true, price: 1600 }

  const div = document.createElement('div')
  ReactDOM.render(<Product {...product} />, div)
})

it('renders correctly', () => {
  const product = { name: 'name', id: 1, specialOffer: true, price: 1600 }
  const tree = renderer.create(<Product {...product} />).toJSON()
  expect(tree).toMatchSnapshot()
})
