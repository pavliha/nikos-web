import React, { Component } from 'react'
import { object, array } from 'prop-types'
import { withStyles } from '@material-ui/core'
import PhotosGrid from './PhotosGrid'
import connector from './connector'
import isEmpty from 'lodash/isEmpty'
import PhotoModal from './PhotoModal'

const styles = {
  root: {
    maxWidth: 1270,
    margin: '62px auto',
  },
}

class PhotosScene extends Component {

  state = {
    isModalOpen: false,
    photo: null,
  }

  openModal = (photo) => {
    this.setState({ isModalOpen: true, photo })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false, photo: null })
  }

  render() {
    const { classes, photos } = this.props

    return (
      <div className={classes.root}>
        {!isEmpty(photos) && <PhotosGrid photos={photos} onOpen={this.openModal} />}
        <PhotoModal
          photo={this.state.photo}
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
        />
      </div>
    )
  }
}

PhotosScene.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(connector(PhotosScene))
