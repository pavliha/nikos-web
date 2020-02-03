import React from 'react'
import { object, bool, func } from 'prop-types'
import { Modal } from '@material-ui/core'
import { BACKEND_URL } from 'src/config/app'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photo: {
    cursor: 'pointer',
    maxWidth: '100%',
  },
}

const PhotoModal = ({ classes, isOpen, onClose, photo }) => {

  if (!isOpen) return null

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className={classes.root}
    >
      <div style={{ width: photo.isPortrait ? '600px' : '1300px' }}>
        <img
          onClick={onClose}
          className={classes.photo}
          alt={photo.title}
          src={BACKEND_URL + photo.url}
        />
      </div>
    </Modal>
  )
}

PhotoModal.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired
}

export default withStyles(styles)(PhotoModal)
