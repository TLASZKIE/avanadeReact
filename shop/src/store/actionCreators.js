import * as Actions from './actions.js'

//2/ Functions that return an action are called actionCreators
const actionCreators = createActionCreators(Actions)

// We add an asynchronous action
actionCreators.fetchProducts = () => dispatch => {
  dispatch(actionCreators.fetchProductsStarted())

  fetch('data/products.json').then(
    products =>
      products
        .json()
        .then(products =>
          dispatch(actionCreators.fetchProductsSuccess(products))
        ),
    err => dispatch(actionCreators.fetchProductsFailure(err))
  )
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
      payload,
      error: payload instanceof Error
    })
    return allActions
  }, {})
}
