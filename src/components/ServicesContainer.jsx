import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
}

const ServicesContainer = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

ServicesContainer.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ServicesContainer)
