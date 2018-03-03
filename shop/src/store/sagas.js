import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as Actions from './actions.js'
import actionCreators from './actionCreators'

export function* fetchSaga() {
  yield takeEvery(Actions.fetchProducts, runFetchSaga)
}

function* runFetchSaga(action) {
  yield put(actionCreators.fetchProductsStarted())
  const products = yield call(
    fetchProducts,
    'http://derpy.todr.me:8000/api/products'
  )
  yield put(actionCreators.fetchProductsSuccess(products))
}

function fetchProducts(url) {
  return fetch(url).then(products => products.json())
}

export function* removeSaga() {
  yield takeEvery(Actions.removeProduct, runRemoveSaga)
}

function* runRemoveSaga(action) {
  const products = yield call(removeProduct, action.payload)
  yield put(actionCreators.fetchProducts())
}

function removeProduct(id) {
  return fetch('http://derpy.todr.me:8000/api/products/' + id, {
    method: 'delete'
  })
    .then(res => res.json())
    .then(res => console.log(res))
}

// actionCreators.removeProduct = id => dispatch => {
//   const body = JSON.stringify(id)
//   console.log(body)

//   fetch('http://derpy.todr.me:8000/api/products/' + id, {
//     method: 'delete'
//   })
//     .then(res => res.json())
//     .then(res => console.log(res))

//   dispatch(actionCreators.fetchProducts())
// }
