import { arrayToObject } from 'src/utils'
import { combineReducers } from 'redux'
import c from '../constants'

const photosReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case c.LOAD_PHOTOS_FULFILLED:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    default:
      return state
  }
}

export default combineReducers({
  entities: photosReducer
})
