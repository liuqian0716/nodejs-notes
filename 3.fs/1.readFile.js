// var fs = require('fs');
// var res = fs.readFileSync('1.txt', 'utf8')
// // var res = fs.readFileSync('1.txt', {flag: 'r', encoding: 'utf8'})
// console.log(res);
// var res = fs.readFile('1.txt', {flag: 'r', encoding: 'utf8'},function(err,data){
//     console.log(err,data);
// })
// console.log(res);

// fs.writeFile('2.txt', '写入随便的内容', {flag: 'w', encoding: 'utf8', mode: 0o666}, function(err){
//     console.log(err);
// });
// fs.writeFile('2.txt', new Buffer.from('追加一段文字1'), {flag: 'a', encoding: 'utf8', mode: 0o666}, function(err){ // a为追加
//     console.log(err);
// });
// fs.appendFile('2.txt', new Buffer.from('追加一段文字2'), function(err){ // a为追加
//     console.log(err);
// })


// base64的原理实现
// var buffe = new Buffer.from('珠');
// console.log(buffe);
// console.log(buffe[0]);
// console.log(parseInt('e7', 16));
// console.log(parseInt('8f', 16));
// console.log(parseInt('a0', 16));

// console.log((231).toString(2));
// console.log((143).toString(2));
// console.log((160).toString(2));
// // 00111001  00111000  00111110  00100000


// console.log(parseInt('00111001', 2));
// console.log(parseInt('00111000', 2));
// console.log(parseInt('00111110', 2));
// console.log(parseInt('00100000', 2));

// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// str += str.toLowerCase();
// str += '0123456789';
// str += '+/';
// console.log(str[57]+str[56]+str[62]+str[32]);


// var fs = require('fs');
// var buffer = new Buffer.alloc(12);
// fs.open('line.txt', 'r', function(err,fd){
//     fs.read(fd,buffer,0,6,0,function(err, bytesRead, buffer){
//         // bytesRead 是真实读到的字节
//         console.log('bytesRead', bytesRead);
//         fs.read(fd,buffer,6,6,6,function(err, bytesRead, buffer){
//             // bytesRead 是真实读到的字节
//             console.log('bytesRead', bytesRead);
//             console.log(buffer.toString());
//         })
//     })
// })



// const fs = require('fs');
// let list = [];
// fs.open('line.txt', 'r', function(err,fd){
//     var pos = 0;
//     function read(){
//         var buffer = new Buffer.alloc(3);
//         fs.read(fd, buffer, 0, 3, pos, function(err, bytesRead){
//             list.push(buffer.slice(0, bytesRead));
//             pos += bytesRead;
//             if(bytesRead > 0){
//                 read();
//             }else{
//                 var result = Buffer.concat(list);
//                 console.log(result.toString());
//             }
//         })
//     }
//     read()
// })


// 同步的方式把rc复制到target里
const fs = require('fs');

function copy(src, target){

}

copy('line.txt', '2.txt');

