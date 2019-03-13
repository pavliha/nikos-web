import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    height: '93vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contacts: {
    display: 'flex',
    padding: 40,
    height: 570,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const ContactsScene = ({ classes }) =>
  <section className={classes.root}>
    <div className={classes.contacts}>
      <div>
        <Typography gutterBottom variant="h3">КОНТАКТЫ</Typography>
        <Typography variant="h6">тел: +380970471604</Typography>
        <Typography variant="h6">email: nikos0669@gmail.com</Typography>
        <Typography variant="h6">instagram: Николай Костюк</Typography>
      </div>
    </div>
  </section>

ContactsScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(ContactsScene)
