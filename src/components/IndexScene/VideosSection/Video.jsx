import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import ResponsiveEmbed from 'react-responsive-embed'

const styles = {
  root: {
    width: '100%'
  },
}

const Video = ({ classes, id }) =>
  <ResponsiveEmbed src={`https://www.youtube.com/embed/${id}?showinfo=0`} frameBorder="0" allowFullScreen />

Video.propTypes = {
  classes: object.isRequired,
  id: string.isRequired,
}

export default withStyles(styles)(Video)
