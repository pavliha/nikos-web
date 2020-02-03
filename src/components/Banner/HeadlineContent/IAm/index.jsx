import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import iam from './iam.png'
import { Typography } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255,255,255,0.9)',
  },
  fullName: {
    paddingLeft: 20,
  }
}

const IAm = ({ classes }) =>
  <div className={classes.root}>
    <img alt="Николай Костюк" src={iam} width={150} />
    <div className={classes.fullName}>
      <Typography color="inherit" variant="h3">Николай</Typography>
      <Typography color="inherit" variant="h3">Костюк</Typography>
    </div>
  </div>

IAm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(IAm)
