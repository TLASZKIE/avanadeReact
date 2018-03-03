import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import createSagaMiddleware from 'redux-saga'
import * as Actions from './actions'
import { fetchSaga, removeSaga } from './sagas'

const socket = io('ws://derpy.todr.me:8000')
const socketIoMiddleware = createSocketIoMiddleware(socket, 'SERVER/')
const sagaMiddleware = createSagaMiddleware()

const productsReducer = createReducer(
  {
    products: [],
    fetching: false,
    buyedProducts: []
  },
  {
    [Actions.fetchProductsStarted](state) {
      return Object.assign({}, state, {
        fetching: true
      })
    },
    [Actions.fetchProductsSuccess](state, action) {
      return Object.assign({}, state, {
        fetching: false,
        products: action.payload
      })
    },
    [Actions.productChanged](state, action) {
      return Object.assign({}, state, {
        products: action.payload
      })
    },
    [Actions.addProductToCart](state, action) {
      return Object.assign({}, state, {
        buyedProducts: [...new Set([...state.buyedProducts, action.payload])]
      })
    },
    [Actions.clearCart](state, action) {
      return Object.assign({}, state, {
        buyedProducts: []
      })
    }
  }
)

// const reducer = combineReducers({
//   tasks: tasks,
//   count
// })

const reducer = productsReducer

export default applyMiddleware(
  // Redux-thunk: https://github.com/gaearon/redux-thunk
  // ({ dispatch, getState }) => {
  //   return next => action => {
  //     return typeof action === 'function'
  //       ? action(dispatch, getState)
  //       : next(action)
  //   }
  // },
  store => next => action => {
    console.log(store.getState(), action)
    next(action)
  },
  socketIoMiddleware,
  sagaMiddleware
)(createStore)(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(fetchSaga)
sagaMiddleware.run(removeSaga)

//8/ This helper function will allow us to create reducers.
function createReducer(initialState, clazz) {
  return function reducer(state = initialState, action) {
    if (clazz[action.type]) {
      return clazz[action.type](state, action)
    }
    return state
  }
}
