const {resolve} = require('path');
const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */

var clientBuildPath;

if( process.env.NODE_ENV === 'development' ){

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./config/webpack.config.dev');

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  clientBuildPath = resolve(__dirname, 'build-dev', 'client')

  // all other requests be handled by UI itself
}else{

  app.use('/', express.static(clientBuildPath));

  clientBuildPath = resolve(__dirname, 'src', 'client');
}

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */

app.get('/banana', (request, response)=>{
  response.send("ehllo");
});

app.get('/react', (req, res) => {
  res.sendFile(resolve(clientBuildPath, 'index.html'))
});

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */


app.listen(process.env.PORT, () => {
  console.log(`HTTP server is now running on http://localhost:${process.env.PORT}`);
});
