import React from 'react'
import { object, node } from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    paddingTop: 30,
  }
}

const ServiceTitle = ({ classes, children }) =>
  <Typography className={classes.root} variant="h5">
    {children}
  </Typography>

ServiceTitle.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ServiceTitle)
