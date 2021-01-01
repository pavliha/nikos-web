import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLoadMiddleware } from 'redux-load-middleware';
import reducers from './reducers';

const initialState = {};
const loadMiddleware = createLoadMiddleware();
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(loadMiddleware)));

export { store, reducers };
