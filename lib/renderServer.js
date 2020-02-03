import SSR from 'lib/SSR'

const renderServer = (jsx, template) => async (request, response) => {
  const ssr = new SSR({ url: request.url, stats: response.locals.webpackStats?.toJson() })
  const [html, assets] = ssr.render(jsx)
  response.send(template(html, assets))
}

export default renderServer
