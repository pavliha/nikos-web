import React from 'react'
import { object, node } from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    marginTop: 15,
  },
}

const ServiceDescription = ({ classes, children }) =>
  <Typography variant="caption" className={classes.root}>
    {children}
  </Typography>

ServiceDescription.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ServiceDescription)
