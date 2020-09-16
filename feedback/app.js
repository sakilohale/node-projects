/* 再NODE中，我们开启的web服务是一个完全的黑盒子，它不像php。php中无论是代码还是网页，都可以直接通过weburl
路径来访问。*/


//再NODE中开启的服务器，默认是黑盒子，所有资源都不允许用户来访问，用户可以访问哪些资源是由开发人员编写设计的代码为准。

//NODE 自定义非常灵活，特别在url方面



TODO:/*网络模型构建*/








//申请模块
var template=require('art-template')
var fs=require('fs')
var http=require('http')
var Url=require('url')




//创建服务器server
var server=http.createServer()




//评论（单个对象）
var person=[
    {name:"sakilohale",
    words:'你好啊'
    },
    {name:"sakilohale1",
   words:'我好爱你'
    },
    {name:"sakilohale2",
    words:'喜欢你'
    },


]




 TODO: //监听响应
server.on('request',function(req,res){


var parseObj=Url.parse(req.url,true)

    //这里的url为不包含查询字符串的pathname
var url=parseObj.pathname

    //监听'/'路径
    if(url==='/'){

      //读取html文件 
     fs.readFile('./views/index.html',function(err,data){
        if(err){
            console.log("error")
        }

        else{
            //换成字符串形式
        data=data.toString()

       
         //引用模板引擎
        var tql = template.render(data,{
         person:person
        })
         //传回客户端
        res.end(tql)
    }
    })

}


//监听评论页面
else if(url=='/comment.html'){


    fs.readFile('./views/comment.html',function(err,data){
        if(err){
           return res.end("404 NotFound")
        }
   
    res.end(data)
})


}



//监听'/public/'开头的路径-----实际就是公共开放资源（可公开资源），例如html需要的css文件，js文件，第三方库lib，图片img

else if(req.url.indexOf('/public/')===0)
{
 fs.readFile('.'+req.url,function(err,data){
     if(err){
         return res.end("404")
     }
   //直接传回客户端  
    res.end(data) 

 })


}


//监听评论提交后的页面
else if(url='/pinglun'){



   //parseObj.query需要先json字符串化，然后再json.parse对象化
   var str= JSON.stringify(parseObj.query)
   var comment=JSON.parse(str)
   console.log(comment)

  
   
   //挤入person数组
   person.unshift(comment)
  


   /*重定位回到首页： 301 永久重定向， 302 临时重定向*/
   res.statusCode = 302
   res.setHeader("Location",'/')
   res.end();


}

else{

fs.readFile('./views/404.html',function(err,data){
if(err){
    return res.end("404 NotFound")
}

res.end(data)

})




}
    
})



server.listen(3000,function(err){
if(!err){
console.log("服务器开启成功，端口号为3000")
}
})