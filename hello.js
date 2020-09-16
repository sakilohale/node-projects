var template=require('art-template')
var fs=require('fs')
var http=require('http')

var server=http.createServer()





server.on('request',function(req,res){

    fs.readFile('./test1.html',function(err,data){
        if(err){
            console.log("error")
        }
        else{
        data=data.toString()
       var tql = template.render(data,{
         name:'sakilohale',
         age:20
    
        })
        res.end(tql)
    }
    })



    
})



server.listen(3000,function(err){
if(!err){
console.log("服务器开启成功，端口号为3000")
}
})