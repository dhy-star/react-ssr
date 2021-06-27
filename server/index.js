const path = require('path')
require('asset-require-hook')({
  extensions: ['jpg','svg','jpeg'],
  name: '[name].[ext]',
})
require('@babel/register')({
    presets: [
        "@babel/preset-env","@babel/preset-react"
    ],
    plugins:[[path.join(__dirname,'ignorcss'),{"ignore":['.css','.scss']}]],
    extensions: ['.jsx', '.js'],
  });
require('./server')