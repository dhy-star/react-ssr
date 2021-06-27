const devServer = require('webpack-dev-server')
const Compiler = require('./Compiler')
const path = require('path')
let server =new devServer(Compiler,{
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    historyApiFallback: true
})
server.listen(9000)