const webpack = require('webpack')
const clientConfig = require('./config/webpack.client')
//const devServer = require('webpack-dev-server')

let Compiler = webpack(clientConfig)

module.exports = Compiler

/*let server =new devServer(Compiler,{
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
})
server.listen(9000)*/