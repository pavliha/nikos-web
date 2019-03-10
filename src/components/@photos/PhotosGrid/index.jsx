import React from 'react'
import { object, array, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Tile from './Tile'

const styles = {
  root: {
    margin: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 300px);',
    gridAutoRows: '200px',
    justifyContent: 'center',
    gridGap: '3px'
  },
}

const PhotosGrid = ({ classes, photos, onOpen }) =>
  <div className={classes.root}>
    {photos.map(photo =>
      <Tile
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
