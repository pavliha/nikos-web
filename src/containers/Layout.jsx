import React from 'react'
import loadable from '@loadable/component'
import { Header, Footer } from 'src/components'
import { Route, Switch, useLocation } from 'react-router-dom'
import IndexScene from './IndexScene'

const PricesScene = loadable(() => import('./PricesScene'))
const PhotosScene = loadable(() => import('./PhotosScene'))
const ContactsScene = loadable(() => import('./ContactsScene'))
const VideoScene = loadable(() => import('./VideoScene'))

const Layout = () => {

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
          <Footer />
        </div>
      </Route>
    </Switch>
  )
}

export default Layout
