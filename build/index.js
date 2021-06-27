const Compiler = require('./Compiler')
if(process.env.flag==='watch'){
    Compiler.watch({},(err)=>{
        if(!err){
            console.log("watch:build is ok")
        }
    })
}else{
    Compiler.run((err) => {
        if (!err) {
            console.log('build is ok')
        }
    })
}
