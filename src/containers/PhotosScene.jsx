import React, { useState } from 'react'
import { object, array, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { PhotosGrid, PhotoModal } from 'src/components'
import isEmpty from 'lodash/isEmpty'
import { actions, connect, select } from 'src/redux'

const styles = {
  root: {
    maxWidth: 1270,
    margin: '62px auto',
  },
}

const PhotosScene = ({ classes, redux: { photos } }) => {
  const [photo, setPhoto] = useState(null)

  return (
    <div className={classes.root}>
      {!isEmpty(photos) && <PhotosGrid photos={photos} onOpen={setPhoto} />}
      <PhotoModal
        photo={photo}
        isOpen={!!photo}
        onClose={() => setPhoto(null)}
      />
    </div>
  )
}

PhotosScene.propTypes = {
  classes: object.isRequired,
  redux: shape({
    photos: array,
    loadPhotos: func.isRequired,
  })
}

const mapStateTopProps = state => ({
  photos: select.photos.all(state)
})

const mapDispatchToProps = () => ({
  loadPhotos: actions.photos.loadMany
})

const withRedux = connect(mapStateTopProps, mapDispatchToProps)

export default withStyles(styles)(withRedux(PhotosScene))
