import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import photo from 'assets/images/background.jpg'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import iam from 'assets/images/iam.png'

const styles = theme => ({

  root: {
    height: 950,
    minHeight: 950,
  },

  picture: {
    position: 'relative',
    boxShadow: 'inset 0px 84px 200px -16px rgba(0,0,0,0.7)',
    height: 950,
    backgroundSize: 'cover',
    backgroundImage: `url(${photo})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column'
  },

  content: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 950,
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
  },

  iam: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255,255,255,0.9)',
  },

  fullName: {
    paddingLeft: 20,
  }

})

const Banner = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.content}>
      <div className={classes.iam}>
        <img alt="Николай Костюк" src={iam} width={150} />
        <div className={classes.fullName}>
          <Typography color="inherit" variant="h3">Николай</Typography>
          <Typography color="inherit" variant="h3">Костюк</Typography>
        </div>
      </div>
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
    <div className={classes.picture} />
  </div>

Banner.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Banner)
