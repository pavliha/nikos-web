import React, { Component } from 'react'
import { node, object, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import { BACKEND_URL } from 'src/constants'

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

class Tile extends Component {

  open = () => {
    const { onOpen, photo } = this.props

    onOpen(photo)
  }

  render() {
    const { classes, photo, children } = this.props

    return (
      <div
        onClick={this.open}
        className={classNames({
          [classes.root]: true,
          [classes.portrait]: photo.isPortrait
        })}
        style={{ backgroundImage: `url(${BACKEND_URL + photo.url})` }}
      >
        <div className={classes.overlay}>
          {children}
        </div>
      </div>
    )
  }
}

Tile.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
  onOpen: func.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Tile)
