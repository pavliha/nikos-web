import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
}

const Footer = ({ classes }) =>
  <div className={classes.root}>
    <Typography color="inherit">Николай Костюк</Typography>
  </div>

Footer.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Footer)
