//使用node 构建web服务器
//在node中专门提供了一个核心模块：http
//http这个模块的职责就是帮用户创建编写服务器


//1.得到http模块引用
var http = require('http')

var fs=require('fs')

//2.创建一个服务器（提供对数据的服务）
var server = http.createServer()


//3.注册 request 请求事件 
//end(data)中的data只能是字符串或者二进制数据
//fs.readFile读取文件得到的data是二进制数据，可以用toString转换成字符串。
server.on('request',function(req,res){

if(req.url==='/'){
res.setHeader('Content-Type','text/plain; charset=utf-8')
res.end('你好，我是服务器sakilohale')
}

else if(req.url==='/index'){
res.setHeader('Content-Type','text/html; charset=utf-8')
fs.readFile('./test.html',function(err,data){
if(err){
    res.end('err')
}else{
    res.end(data)
}
})

}

else if(req.url==='/login'){

    var person=[
        {
        age:20,
        sex:'man',
        height:'175cm',
        weight:'75kg'
        },
        {
            age:18,
            sex:'man',
            height:'180cm',
            weight:'70kg'
            },
            {
                age:5,
                sex:'man',
                height:'60cm',
                weight:'30kg'
                }
    ]
res.end(JSON.stringify(person))

}else{
    res.end('404 NotFound')
}



})

//4.绑定端口号，启动服务器（命令行中用ctrl+c关闭服务器）
server.listen(3000,function(){
    console.log("服务器启动成功，可以通过http://127.0.0.1:3000/ 来进行访问，等待客户端请求")
})