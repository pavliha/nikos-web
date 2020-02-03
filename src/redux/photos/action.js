import api from 'src/api'
import c from '../constants'

const loadMany = () => ({
  type: c.LOAD_PHOTOS,
  payload: api.photos.loadMany()
})

export default { loadMany }
