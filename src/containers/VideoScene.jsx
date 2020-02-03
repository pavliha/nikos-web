import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Video } from 'src/components'

const styles = {
  root: {
    margin: '40px auto',
    maxWidth: 1100,
    padding: 15,
    minHeight: '85vh'
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  box: {
    marginTop: 25,
  }
}

const VideoScene = ({ classes }) =>
  <div className={classes.root}>
    <section className={classes.box}>
      <Video id="kktVTzOlpac" />
    </section>
    <section className={classes.box}>
      <Video id="qJE80N2-p-I" />
    </section>
    <section className={classes.box}>
      <Video id="mG1TwzVuJXY" />
    </section>
  </div>

VideoScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(VideoScene)
