import * as Actions from './actions.js'

//2/ Functions that return an action are called actionCreators
const actionCreators = createActionCreators(Actions)

// We add an asynchronous action
actionCreators.fetchProducts = () => dispatch => {
  dispatch(actionCreators.fetchProductsStarted())

  // fetch('data/products.json').then(
  fetch('http://derpy.todr.me:8000/api/products').then(
    products =>
      products
        .json()
        .then(products =>
          dispatch(actionCreators.fetchProductsSuccess(products))
        ),
    err => dispatch(actionCreators.fetchProductsFailure(err))
  )
}

// actionCreators.addNewProduct = product => dispatch => {
//   const body = JSON.stringify(product)
//   console.log(body)

//   fetch('http://derpy.todr.me:8000/api/products', {
//     method: 'post',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     },
//     body: body
//   })
//     .then(res => res.json())
//     .then(res => console.log(res))

//   dispatch(actionCreators.fetchProducts())
// }

actionCreators.removeProduct = id => dispatch => {
  const body = JSON.stringify(id)
  console.log(body)

  fetch('http://derpy.todr.me:8000/api/products/' + id, {
    method: 'delete'
    // headers: {
    //   Accept: 'application/json, text/plain, */*',
    //   'Content-Type': 'application/json'
    // },
    // body: body
  })
    .then(res => res.json())
    .then(res => console.log(res))

  dispatch(actionCreators.fetchProducts())
}

export default actionCreators

//6/ This function attaches the dispatch to each creator
export function bindActions(actions, dispatch) {
  return Object.keys(actions).reduce((allActions, action) => {
    allActions[action] = payload => dispatch(actions[action](payload))
    return allActions
  }, {})
}

function createActionCreators(actions) {
  return Object.keys(actions).reduce((allActions, action) => {
    allActions[action] = payload => ({
      type: actions[action],
      payload
    })
    return allActions
  }, {})
}
