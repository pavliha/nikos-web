import React, { useEffect, useState } from 'react'
import { object, array, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { PhotosGrid } from 'src/components'
import isEmpty from 'lodash/isEmpty'
import { actions, connect, select } from 'src/redux'
import { Modal } from '@material-ui/core'
import { BACKEND_URL } from 'config/app'

const styles = {
  root: {
    maxWidth: 1270,
    margin: '62px auto',
  },

  photo: {
    cursor: 'pointer',
    maxWidth: '100%',
  },

}

const PhotosScene = ({ classes, redux: { photos, loadPhotos } }) => {
  useEffect(() => { loadPhotos() }, [])
  const [photo, setPhoto] = useState(null)

  return (
    <div className={classes.root}>
      {!isEmpty(photos) && <PhotosGrid photos={photos} onOpen={setPhoto} />}
      <Modal
        open={!!photo}
        onClose={() => setPhoto(null)}
        className={classes.root}
      >
        <div style={{ width: photo?.isPortrait ? '600px' : '1300px' }}>
          <img
            onClick={() => setPhoto(null)}
            className={classes.photo}
            alt={photo?.title}
            src={BACKEND_URL + photo?.url}
          />
        </div>
      </Modal>
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
