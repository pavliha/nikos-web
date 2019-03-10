import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { object, array } from 'prop-types'
import Banner from './Banner'
import PhotosSection from './PhotosSection'
import VideosSection from './VideosSection'
import connector from './connector'
import isEmpty from 'lodash/isEmpty'
import ContactsSection from './ContactsSection'

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
}

class Index extends Component {

  componentDidMount() {
    const { actions, photos } = this.props
    if (isEmpty(photos)) {
      actions.photos.all()
    }
  }

  render() {
    const { classes, photos } = this.props

    return (
      <main className={classes.root}>
        <Banner />
        {!isEmpty(photos) && <PhotosSection photos={photos} />}
        <VideosSection />
        <ContactsSection />
      </main>
    )
  }
}

Index.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  photos: array.isRequired,
}
export default withStyles(styles)(connector(Index))
