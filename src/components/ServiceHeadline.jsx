import React from 'react'
import { object, node } from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    marginTop: 50,
  },
}

const ServiceHeadline = ({ classes, children }) =>
  <Typography className={classes.root} variant="h4">{children}</Typography>

ServiceHeadline.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ServiceHeadline)
