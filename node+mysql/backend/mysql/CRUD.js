// CURD封装

var connection=require('./connect.js');




module.exports.find=function(findSql,callback){

connection.query(findSql,function(err,res){
    if(!err){
     
        callback(null,res)
    }
})

}




module.exports.add=function(data,addSql){

   

    var  addSqlParams =JSON.stringify(data.words);
 
    connection.query(addSql,addSqlParams,function(err,res){
     if(!err){
         console.log("add success")
        
     }
     else{
        console.log("err")
     }
    })
}



