import React, { useEffect } from 'react'
import { array, object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { BACKEND_URL } from 'src/config/app'

const styles = {
  root: {
    overflow: 'hidden',
  },
}

const eventList =
  'fotorama:ready ' + // Fotorama is fully ready
  'fotorama:show ' + // Start of transition to the new frame
  'fotorama:showend ' + // End of the show transition
  'fotorama:load ' + // Stage image of some frame is loaded
  'fotorama:error ' + // Stage image of some frame is broken
  'fotorama:startautoplay ' + // Slideshow is started
  'fotorama:stopautoplay ' + // Slideshow is stopped
  'fotorama:fullscreenenter ' + // Fotorama is fullscreened
  'fotorama:fullscreenexit ' + // Fotorama is unfullscreened
  'fotorama:loadvideo ' + // Video iframe is loaded
  'fotorama:unloadvideo' // Video iframe is removed

const Fotorama = ({ classes, photos }) => {

  useEffect(() => {
    window.$(document).ready(function($) {
      $('.fotorama').on(eventList).fotorama()
    })
  }, [photos])

  return (
    <div className={classes.root}>
      <div
        className="fotorama"
        data-nav="thumbs"
        data-width="100%"
        data-thumbwidth="150"
        data-thumbheight="100"
        data-auto="false"
      >
        {photos.map(photo =>
          <img
            key={photo.id}
            alt={photo.url}
            src={BACKEND_URL + photo.url}
          />
        )}
      </div>
    </div>
  )
}

Fotorama.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(Fotorama)
