import { arrayToObject } from 'src/utils'
import { combineReducers } from 'redux'
import c from '../constants'
import omit from 'lodash/omit'

const photosReducer = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case c.LOAD_PHOTOS_FULFILLED:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case c.UPLOAD_PHOTO_FULFILLED:
      return {
        ...state,
        [payload.id]: payload
      }

    case c.DESTROY_PHOTO_FULFILLED:
      return omit(state, meta.photo_id)

    case c.SORT_PHOTOS_PENDING: {
      const photos = { ...state }
      const { photos_ids } = meta

      return arrayToObject(photos_ids.map((id, index) => ({
        ...photos[id],
        displayOrder: index,
      })))
    }

    default:
      return state
  }
}

export default combineReducers({
  entities: photosReducer
})
