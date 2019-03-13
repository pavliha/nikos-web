import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    padding: 40,
    height: 570,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const ContactsSection = ({ classes }) =>
  <section className={classes.root}>
    <div>
      <Typography gutterBottom variant="h3">КОНТАКТЫ</Typography>

      <Typography variant="h6">тел: +380970471604</Typography>
      <Typography variant="h6">email: nikos0669@gmail.com</Typography>
      <Typography variant="h6">instagram: Николай Костюк</Typography>

    </div>
  </section>

ContactsSection.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(ContactsSection)
