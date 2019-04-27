import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'

export default ({ content, extractor, state, sheetsRegistry }) => {

  const helmet = Helmet.renderStatic()

  return `
    <!doctype html>
    <html lang="ru">
    <head>
        <title>Николай Костюк - Свадебное фото и видео, фото детей, виньетки, фото на документы, фото в студии</title>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${extractor.getStyleTags()}
        <meta name="description" content="Свадебный фотограф и видеооператор в Запорожье">
        <meta name="keywords" content="Фотограф, Запорожье, Видеосьёмка, Фотосьёмка,Свадьба,свадебные фото, Качественный фотограф, Низкие цены">
                
        <!-- 1. Link to jQuery (1.8 or later), -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- 33 KB -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <!-- fotorama.css & fotorama.js. -->
        <link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->
    </head>
    <body>
        <div id="root">${renderToString(content)}</div>
        <style id="jss-server-side">${sheetsRegistry}</style>

        <script>
            window.__STATE__ = ${JSON.stringify(state)}
        </script>
        ${extractor.getScriptTags()}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136242809-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-136242809-1');
        </script>

    </body>
    </html>
  `
}
