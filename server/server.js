import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import App from '../src/App'
import store from '../src/store'

const fs = require('fs')
const path = require('path')
const express = require('express')
const htmlString = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
const request = require('request')
let app = express()
app.use(express.static(path.join(__dirname, '../dist'), { index: false }))

// let proxy = 'http://localhost:9090'
// app.get('/server/*', (req, res) => {
//     console.log("url", req.url)
//     request(proxy + req.url, (error, response, body) => {
//         if (error) {
//             res.send(error.toString())
//         } else {
//             res.send(body)
//         }
//     })
// })
app.get('/*', (req, res) => {
    let str = JSON.stringify(store.getState())
    
    
    let componentString = ReactDOMServer.renderToString(<StaticRouter  location={req.url}>
        <App />
    </StaticRouter>)
    let html = htmlString.replace('<div id="root"></div>', `<div id="root">${componentString}</div>`)
        html = html.replace('<!-- state-init -->',`<script>
        window.INNER_STATE = ${str}
   </script>`)
    res.send(html)
})

app.listen(8080, () => {
    console.log('8080 is ok')
})

