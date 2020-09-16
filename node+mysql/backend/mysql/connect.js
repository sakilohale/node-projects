 
 //mysql数据库连接
 
 
 var mysql=require('mysql')

 var connection = mysql.createConnection({
    host     : 'localhost',     //你的主机名
    user     : 'root',            //用户名
    password : 'liujunyan',    //密码(字符串格式)
    database : 'ljy',  //数据库名
    
});        

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);//如果连接失败，返回错误信息并停止向下进行。
        return;
    }
});


module.exports=connection;