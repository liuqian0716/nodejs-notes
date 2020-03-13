// var http = require('http');

// var onRequest  = function(request, response){
//     response.writeHead(200, { 'content-type': 'text/plain' });
//     var obj = {
//         name: '臭猪飞飞',
//         age: 32
//     }
//     response.end('hello 飞飞')
// }
// var server = http.createServer(onRequest);
// server.listen(3000);

// http

// var http = require('http');
// var fs = require('fs')
// var mime = require('mime')


// function serve(request, response){
//     const url = require('url');
//     console.log(request.method, request.url);
//     // console.log();
//     // console.log(request.headers);
//     // response.statusCode = 200;
//     var urlobj = url.parse(request.url,true);
//     console.log(urlobj.pathname);
//     var pathname = urlobj.pathname;
//     if(pathname == '/'){
//         response.setHeader('Content-type','text/html;charset=utf-8'); // 设置请求头
//         response.setHeader('test','feifei');
//         fs.readFile('index.html',function(err,data){// readFile为异步的，readFileSync为同步的
//             response.write(data); // 设置响应主体 
//             response.end();
//         })
//     }else if(pathname === '/clock'){
//         setInterval(()=>{
//             response.write(new Date().toString())
//         },1000)
//     }else{
//         static(pathname,response)
//     }
    
// }

// function static(url,response){
//     console.log(url);
//     response.setHeader('Content-type',mime.getType(url)+';charset=utf-8'); // 设置请求头
//     // console.log(mime.getType('style.js'));
//     // response.setHeader('test','feifei');
//     fs.readFile(url.slice(1),function(err,data){// readFile为异步的，readFileSync为同步的
//         response.write(data); // 设置响应主体 
//         response.end();
//     })
// }
// var server = http.createServer(serve);
// server.listen(8080, 'localhost')

// process.stdout.write('hello');
// console.log(process.pid);
// process.stdin.on('data', (data)=>{
//     console.log(data.toString());
// })
// process.kill('pid');// 杀死某个进程
// process.on('uncaughtException', function(e){ // 未捕获的异常，不推荐，可能造成内存泄漏等问题
//     console.log('uncaughtException', e.message);
// })

// try{
//     console.log(a);
// }catch(e){
//     console.log(e.message);
// }
// console.log(b);

// console.log(process.cwd()); // 可以改变
// console.log(__dirname); // 不可以改变
// console.log(process.chdir('..'));
// console.log(process.chdir('hello nodejs'));
// console.log(process.cwd());
// console.log(__dirname);

// 同步>nextTick>setTimeout>setImmediate>异步IO

// console.log('111');
// setTimeout(()=>{
//     console.log('setTimeout 222');
// },0)
// process.nextTick(()=>{
//     console.log('nextTick 333');
//     process.nextTick(()=>{
//         console.log('nextTick2 9999');
//     })
// })
// console.log('4444');
// console.log('555');

 // 原型
// var util = require('util');

// function Parent(){
//     this.name = 'Parent'
// }
// Parent.prototype.show = function(){
//     console.log(this.name);
// }
// function Child(){
//     this.name = 'Child';
// }
// // Child.prototype = Object.create(Parent.prototype); // 继承
// util.inherits(Child, Parent); // 继承
// var child = new Child()
// child.show()
// console.log(child.  == Object.proototype);

/*
*   showHidden 是否显示隐藏属性
    depth 对象的递归显示深度
    colors 是否显示颜色
 */
// console.log(util.inspect(child, true, 1,true));

// var util = require('util')

// var arr1 = [1,2];
// var arr2 = [3,4];
// console.log(arr1.concat(arr2));
// // console.log(Array.prototype.push.apply(arr1,arr2)); // push返回值
// console.log(arr1);

// console.log(util.isArray([]));
// console.log(util.isBoolean([]));
// console.log(util.isRegExp([]));

// 任意进制转10进制
console.log(parseInt('11',2));
console.log(parseInt('11',8));
console.log(parseInt('11',16));

// 10进制转任意进制
console.log((3).toString(2));
console.log((24).toString(8));
console.log((67).toString(16));
// console.log(67..toString(16)); // 浮点数，转化跟上一个相同