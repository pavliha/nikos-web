import React from 'react'
import { object, string } from 'prop-types'
import classNames from 'classnames'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import IAm from './IAm'

const styles = theme => ({
  root: {
    boxShadow: 'inset 600px 0px 600px -50px rgba(0,0,0,0.52)',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',

    color: 'rgba(255,255,255,0.9)',

    paddingLeft: 7,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 100,
    },
  },
  headline: {
    paddingTop: 100,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 100,
    marginLeft: -7,
    [theme.breakpoints.up('sm')]: {
      marginLeft: -20,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      justifyContent: 'flex-start',
    }
  }
})

const HeadLineContent = ({ classes, className, }) =>
  <div className={classNames([classes.root, className])}>
    <IAm />
    <div className={classes.headline}>
      <Typography color="inherit" gutterBottom variant="h3">Свадебный</Typography>
      <Typography color="inherit" gutterBottom variant="h3">фотограф</Typography>
      <Typography color="inherit" gutterBottom variant="h3">и видеооператор</Typography>
    </div>
    <div className={classes.actions}>
      <Link to="/photos">
        <Button size="large" color="inherit" variant="outlined">СМОТРЕТЬ ФОТОГРАФИИ</Button>
      </Link>
    </div>
  </div>

HeadLineContent.propTypes = {
  classes: object.isRequired,
  className: string.isRequired,
}

export default withStyles(styles)(HeadLineContent)
