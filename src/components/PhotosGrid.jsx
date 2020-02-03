import React from 'react'
import { object, array, func } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import PhotosGridTile from './PhotosGridTile'

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 372px);',
    gridAutoRows: '247px',
    justifyContent: 'center',
    gridGap: '3px'
  },
}

const PhotosGrid = ({ classes, photos, onOpen }) =>
  <div className={classes.root}>
    {photos.map(photo =>
      <PhotosGridTile
        key={photo.id}
        photo={photo}
        onOpen={onOpen}
      />
    )}
  </div>

PhotosGrid.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
  onOpen: func.isRequired,
}

export default withStyles(styles)(PhotosGrid)
