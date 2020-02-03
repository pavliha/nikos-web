import React from 'react'
import { func, node, object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { BACKEND_URL } from 'src/config/app'

const styles = {
  root: {
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  overlay: {
    display: 'flex',
    flexDirection: 'column',
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  },

  portrait: {
    gridRow: 'span 2'
  },

  closeIcon: {
    color: 'red'
  }
}

const PhotosGridTile = ({ classes, photo, children, onOpen }) =>
  <div
    onClick={() => onOpen(photo)}
    className={classNames({ [classes.root]: true, [classes.portrait]: photo.isPortrait })}
    style={{ backgroundImage: `url(${BACKEND_URL + photo.url})` }}
  >
    <div className={classes.overlay}>
      {children}
    </div>
  </div>

PhotosGridTile.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
  onOpen: func.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(PhotosGridTile)
