import { combineReducers } from 'redux';
import { errorsReducer, loadingsReducer } from 'redux-load-middleware';
import { photosReducer } from './photos';

const reducers = combineReducers({
  loadings: loadingsReducer,
  errors: errorsReducer,
  photos: photosReducer
});

export type State = ReturnType<typeof reducers>;

export default reducers;
