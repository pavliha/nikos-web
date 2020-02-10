import React from 'react'
import { withStyles } from '@material-ui/styles'
import loadable from '@loadable/component'
import { Header, Footer } from 'src/components'
import { Route, Switch, useLocation } from 'react-router-dom'
import IndexScene from './IndexScene'
import { Typography } from '@material-ui/core'
import { object } from 'prop-types'

const PricesScene = loadable(() => import('./PricesScene'))
const PhotosScene = loadable(() => import('./PhotosScene'))
const ContactsScene = loadable(() => import('./ContactsScene'))
const VideoScene = loadable(() => import('./VideoScene'))

const styles = {
  footer: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }
}

const Layout = ({ classes }) => {
  const location = useLocation()
  return (
    <Switch>
      <Route path="/">
        <div>
          <Header pathname={location.pathname} />
          <Switch>
            <Route exact path="/" component={IndexScene} />
            <Route exat path="/prices" component={() => <PricesScene />} />
            <Route exat path="/photos" component={() => <PhotosScene />} />
            <Route exat path="/video" component={() => <VideoScene />} />
            <Route exat path="/contacts" component={() => <ContactsScene />} />
          </Switch>
          <div className={classes.footer}>
            <Typography color="inherit">Николай Костюк &copy; {(new Date()).getFullYear()}</Typography>
          </div>
          <Footer />
        </div>
      </Route>
    </Switch>
  )
}

Layout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Layout)
