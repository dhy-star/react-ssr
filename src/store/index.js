import { createStore ,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import axios from 'axios'

let reduter = function(state,action){
    let newstate = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "SERVER_INIT":
            newstate = action.value
            return newstate
        default :
           return state
    }
}
let process_node = global.process||window.process||undefined
const isServer =(()=>{
    if(process_node&&process_node.env.WHERE&&process_node.env.WHERE==='node'){
        return true
    }else{
        return false
    }
})()

let initState =  {}
let store = createStore(reduter,initState,applyMiddleware(thunk))
if(isServer){
    //请求初始化的数据
    axios.get('http://localhost:9090/server/getperson').then(res => {
         store.dispatch({
             type:"SERVER_INIT",
             value:res.data
         })
        //  console.log(store.getState())
      }).catch(err => {
        console.log('err', err)
      })
}else{
    let inner_state = window.INNER_STATE||{}
    store = createStore(reduter,inner_state,applyMiddleware(thunk))
}
export default store