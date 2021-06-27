const express = require('express')
let app = express()
app.get('/server/getperson',(req,res)=>{
    let list =[
        {
            name:"数据1",
            value:{
                person:"person1",
                age:22
            }
        },
        {
            name:"数据2",
            value:{
                person:"person2",
                age:23
            }
        },
        {
            name:"数据3",
            value:{
                person:"person3",
                age:24
            }
        }
    ]
    res.send(JSON.stringify(list))
})
app.listen(9090,()=>{
    console.log('9090 ok')
})