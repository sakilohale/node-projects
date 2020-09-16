// 引入 `express` 模块。
var express = require('express');

//导入路由.js
var router=require('./router.js')

// 创建express实例的服务器
var app = express();

// post请求数据中间件
var bodyParser = require('body-parser');
const { fstat } = require('fs');
const { render } = require('art-template');
const { json } = require('body-parser');



/* 第一个参数表示，当渲染以（xx）结尾的文件的时候，使用art-template 模板引擎 */


/*  ex为相应对象提供了一个方法 render */
/* render方法默认不可以使用，只有配置了模板引擎才能使用 */
/* res.render('html模板名',{模板数据})  */
/* 第一个参数路径默认会去项目中的views目录文件中查找该模板文件 */
/* 也就是说express和开发者之间一个不成文的约定： 开发人员把所有的视图文件都放在views目录中 */

app.engine('html', require('express-art-template'));



// POST请求数据体body-Parser配置
app.use(bodyParser.urlencoded({ extended: false }))


//Router模块化配置
app.use(router)


// parse application/json
app.use(bodyParser.json())







//开放public资源，并且只要是在public里面的资源都可通过/public/xx（url）的方式访问public目录中的所有资源
app.use('/public/',express.static('./public/'))







// 定义好我们 app 的行为之后，让它监听本地的 3000 端口。这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行了一个命令行输出操作，告诉我们监听动作已完成。
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});