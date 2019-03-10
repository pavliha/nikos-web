import React, { Component } from 'react'
import { object, array, shape, string } from 'prop-types'
import loadable from '@loadable/component'
import { Switch, Route, withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import IndexScene from './IndexScene'
import Header from './Header'
import connector from './connector'
import preload from 'setup/utils/preload'
import Footer from './Footer'

/**
 * Util to prefetch data on server
 */

const AdminLayout = loadable(() => import('./@admin/AdminLayout'))
const PricesScene = loadable(() => import('./@prices/PricesScene'))
const PhotosScene = loadable(() => import('./@photos/PhotosScene'))
const ContactsScene = loadable(() => import('./@contacts/ContactsScene'))

/**
 * Some dummy layout to show code splitting is working
 */
class Layout extends Component {

  static getInitialData({ props }) {
    const { actions } = props

    return actions.photos.all()
  }

  componentDidMount() {
    const { actions, photos } = this.props
    if (isEmpty(photos)) {
      actions.photos.all()
    }

  }

  render() {

    const { history } = this.props

    return (
      <Switch>
        <Route path="/admin" component={() => <AdminLayout />} />
        <Route path="/">
          <div>
            <Header pathname={history.location.pathname} />
            <Switch>
              <Route exact path="/" component={IndexScene} />
              <Route exat path="/prices" component={() => <PricesScene />} />
              <Route exat path="/photos" component={() => <PhotosScene />} />
              <Route exat path="/contacts" component={() => <ContactsScene />} />
            </Switch>
            <Footer />
          </div>
        </Route>
      </Switch>
    )
  }
}

Layout.propTypes = {
  actions: object.isRequired,
  photos: array.isRequired,
  history: shape({
    location: shape({ pathname: string })
  }).isRequired,
}
export default withRouter(connector(preload(Layout)))
