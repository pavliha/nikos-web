import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import { connect } from 'src/utils'
import actions from './action'
import select from './select'
import reducers from './reducer'

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(promise),
  ),
)

if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextRootReducer = reducers
    store.replaceReducer(nextRootReducer)
  })
}
export { store, reducers, actions, select, connect }
