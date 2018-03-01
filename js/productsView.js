'use strict'

export default class ProductView {
  renderProducts($app, products) {
    var k, $product
    for (k in products) {
      $product = this.renderProduct(products[k])
      $app.appendChild($product)
    }
  }
  renderProduct(product) {
    var $Product = document.createElement('div')
    var $ProductName = document.createElement('span')
    var $ProductImg = this.createImg(
      product.img,
      `Image ${product.name}`,
      product.name
    )
    var $ProductDesc = document.createElement('span')

    $ProductName.textContent = product.name
    $Product.className = 'Product'

    $ProductDesc.textContent = product.desc
    $ProductDesc.className = 'Product-desc'

    var $ProductShowDescButton = document.createElement('button')
    var $ProductShowDescButton = document.createElement('button')
    $ProductShowDescButton.className = 'desc'
    $ProductShowDescButton.data = 'hi'
    $ProductShowDescButton.innerHTML = 'click me'
    $ProductShowDescButton.onclick = () => this.toggleDesc(product.id)

    $Product.id = product.id
    $Product.appendChild($ProductName)
    $Product.appendChild(document.createTextNode(' '))
    $Product.appendChild($ProductImg)
    $Product.appendChild($ProductShowDescButton)
    $Product.appendChild($ProductDesc)

    return $Product
  }

  createImg(src, alt, title) {
    var img = document.createElement('img')
    img.src = src
    if (alt != null) img.alt = alt
    if (title != null) img.title = title
    return img
  }

  toggleDesc(id) {
    //var x = document.querySelector(`#${id} > .desc`)
    var x = document.getElementById(id)
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }
}
