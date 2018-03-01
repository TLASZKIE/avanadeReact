'use strict'

import ProductsModel from './models/products.js'
import ProductsView from './ProductsView.js'

const model = new ProductsModel([])

async function fetchData() {
  let response = await fetch('data/products.json')
  let products = await response.json()
  return products
}

fetchData().then(products => {
  model.products = products
  const view = new ProductsView()
  view.renderProducts(document.querySelector('#products'), products)
})
