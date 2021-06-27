import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import "antd/dist/antd.css";
let render = ReactDom.render
if(global&&!!global.process){

 render = ReactDom.hydrate
}
render(<BrowserRouter>
    <App></App>
</BrowserRouter>, document.getElementById("root"))