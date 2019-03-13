module.exports = {

  port: process.env.PORT || 2000,

  /**
   webpack reload options
   */
  webpackDevMiddleware: {
    noInfo: true,
    serverSideRender: true
  },

  /**
   webpack server reload options
   */
  webpackHotServerMiddleware: {
    serverRendererOptions: {
      foo: 'Bar'
    }
  },

  /**
   webpack hot reload options
   */
  webpackHotMiddleware: {
    noInfo: true,
  }

}
