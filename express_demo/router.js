
//这个文件专门解决路由


var express=require('express')
var fs=require("fs")
var crud=require('./mysql/CRUD.js')

//利用 express的路由功能，创建一个路由容器router
var router = express.Router()



var commentlist;


//往路由容器router中添加请求事件
router.get('/', function (req, res) {
   /*文件存储模式*/
    // fs.readFile('./Filedata/comment.json',function(err,data){
    
    // if(err){
    //   return res.render("404")
    // }
    
    // commentlist=JSON.parse(data.toString()).comments
    // console.log(JSON.stringify(commentlist))
    // res.render('index.html',{
    //   commentlist:commentlist
    //    })
    // })  


   /* 数据库存储模式 */
    crud.find(function(err,data){

      var Jdata=JSON.parse(JSON.stringify(data)); 
      console.log(Jdata)
      commentlist=Jdata
     console.log(commentlist)
      })
      res.render('index.html',{
          commentlist:commentlist
           })
       


    });
    
    



router.get('/comment.html',function(req,res)
    {
    
    res.render('comment.html')
    
    })
    
    
    
    

    
router.post('/pinglun',function(req,res){
    /*  文件存储模式 */
      // fs.readFile('./Filedata/comment.json',function(err,data){
    
      //   if(err){
      //     return res.render("404")
      //   }
        
      //   commentlist=JSON.parse(data.toString()).comments
      //   commentlist.unshift(req.body)
      //   var c=JSON.stringify({
      //     comments:commentlist
      //   })
      //   fs.writeFile('./Filedata/comment.json',c,function(err){
      //     console.log(err)
      //   })
           
        
      //   })  
    
        // res.redirect('/')
     





   /*  数据库操作 */

   var data=req.body
   console.log(JSON.parse(JSON.stringify(data)))
   var Jdata=JSON.parse(JSON.stringify(data))
   crud.add(Jdata,function(){
     
      console.log("success");
      res.redirect('./')
   });
  })


     //导出router容器
    module.exports=router;