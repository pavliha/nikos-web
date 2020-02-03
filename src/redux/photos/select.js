import { createSelector } from 'reselect'
import sortBy from 'lodash/sortBy'

const all = createSelector(
  state => Object.values(state.photos.entities),
  photos => sortBy(photos, 'displayOrder'),
)

export default { all }
