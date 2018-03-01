'use strict'

export default class ProductsModel {
  constructor(products) {
    this._products = products
  }

  set products(products) {
    this._products = products
  }

  getProducts() {
    return this._products
  }
}
