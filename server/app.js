const express = require('express');         //引入快速搭建服务器模块        
const bodyParser = require('body-parser'); //node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
const app = express();              //创建服务器对象    也可以const app=new express()     
const mysql = require('mysql');    //引入数据库模块


                        //前端访问端口时允许跨域      //CORS：允许跨域
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");//http://192.168.7.170:8088  *号表示允许所有跨域
	res.header("Access-Control-Allow-Credentials", true);
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});                   
         
                  //截取post中的数据 , body体里的中间件
app.use(bodyParser.urlencoded({ extended: false }))  //qs  querystring
app.use(bodyParser.json())
app.post('/user', (req, res) => {
	console.log(req.body);
	             //连接数据库
	var connection = mysql.createConnection({
	host: 'localhost',  //数据库地址是本机
	user: 'root',        //账号
	password: 'root',   //登录的数据库密码
	database: 'biao'   //数据库名
});                 
                         //把前端的数据写入数据库
let mysql1 = 'INSERT  INTO  biao1(userid, passwd)  VALUES('+req.body.userid+','+req.body.passwd+')';
connection.query(mysql1,function(err,rows){
        if(err){//写入失败
            console.log(err);
            res.send()
        }else {     //写入成功  就前端发送一个true  然后推送到首页去
        	 res.send({flag:"true"}) 
                    //重定向    定向到其它访问的地址           
            //res.redirect("http://localhost:8080/#/")
        }
    });
})



//连接到数据
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'biao'
});
connection.connect();

app.post('/login', (req, res) => {
	console.log(req.body);
	res.json({
		r: 'ok'
	});
});

app.get('/kwlist', (req, res) => {
	let page = req.query.page;
	let keywords = req.query.keywords;
	let pagesize = 20;
	let $sql = `SELECT * FROM biao1 WHERE id,name1 LIKE ? LIMIT ?, ?`;
	connection.query($sql, [`%${keywords}%`, (page - 1) * pagesize, pagesize], (err, results) => {
		console.log(results);
		res.json(results);
	});
});

app.post('/additem', (req, res) => {
	console.log(req.body);
	res.json({
		r: 'ok'
	});
});

app.listen(8088, () => {
	console.log(`Server started on port:8088`);
});