
//这个文件专门解决路由


var express = require('express')
var fs = require("fs")
var crud = require('./mysql/CRUD.js')
const { json } = require('body-parser')

//利用 express的路由功能，创建一个路由容器router
var router = express.Router()



//往路由容器router中添加请求事件
router.get('/day', function (req, res) {
    var findSql='SELECT * FROM day LIMIT 1;'

 crud.find( findSql ,function(err,data){
   var Jdata=JSON.parse(JSON.stringify(data));
   console.log('day: '+Jdata)
   res.json(Jdata)

 })
})
 
router.get('/post',function(req,res){
  var  addSql = 'INSERT INTO message(words) VALUES(?)';
  var data=req.query
  console.log(req.query)
  crud.add(data,addSql)
  res.json("成功")
})



router.get('/message',function(req, res){
    var findSql='SELECT * FROM message LIMIT 6;'
    crud.find(findSql , function(err,data){
        
        var Jdata=JSON.parse(JSON.stringify(data));
        res.json(Jdata)
      })

})



  
router.get('/login',function(req,res){
    
    var Jdata=''
    var findSql='SELECT * FROM person;'
     
     
    crud.find(findSql , function(err,data){
      var flag='0'
    Jdata=JSON.parse(JSON.stringify(data));   
    for(var i in Jdata){
    
   if(JSON.stringify(Jdata[i])==JSON.stringify(req.query)){
    console.log("登录成功")
    flag='1'
    res.json('1')
  }
 } 
  if(flag=='0'){
    console.log("登录失败")
  res.json('0')
  }
      })

     

  })


     //导出router容器
    module.exports=router;