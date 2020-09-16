// CURD封装

var connection=require('./connect.js');




module.exports.find=function(callback){
var findSql='SELECT * FROM MESSAGE'
connection.query(findSql,function(err,res){
    if(!err){
        console.log("数据库的message表中数据为："+res)
        callback(null,res)
    }
})


}




module.exports.add=function(data,callback){

    var  addSql = 'INSERT INTO message(name,words) VALUES(?,?)';

    var  addSqlParams =[data.name,data.words];
    connection.query(addSql,addSqlParams,function(err,res){
     if(!err){
         console.log("add success")
         callback()
     }
     else{
         console.log(err)
     }
    })
}



