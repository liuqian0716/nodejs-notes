// var fs = require('fs');

// var rs = fs.createReadStream('line.txt');
// var ws = fs.createWriteStream('write.txt');

// ws.on('open', function(){
//     console.log('写入文件打开');
// })
// rs.on('data', function(data){
//      console.log(data);
//      ws.write(data)
// })
// rs.on('end', function(){
//     console.log('读取完毕');
//     ws.end('写入完毕', function(data){
//         console.log(ws.bytesWritten);
//     })
// })


// 使用drain
// var fs = require('fs');

// var ws = fs.createWriteStream('test.txt', {
//     highWatermark: 1024
// })
// writeMillon(ws,'data', 'utf8', function(){})
// function writeMillon(writer, data, encoding, callback){
//     var i = 1000000;
//     write()
//     function write(){
//         var ok = true;
//         do{
//             i -= 1;
//             if(i === 0){
//                 writer.write(data, encoding, callback)
//             }else{
//                 ok = writer.write(data, encoding, callback)
//                 console.log(ok);
//             }
//         }while(i>0 && ok)
//         if(i > 0){
//             writer.once('drain', write)
//         }
//     }
// }

// var fs = require('fs');
// var src = fs.createReadStream('128.txt');
// var dest = fs.createWriteStream('test.txt');
// src.pipe(dest);

var bin = new Buffer.from('hello', 'utf-8'); // => <Buffer 68 65 6c 6c 6f>
let result = bin.slice(2)
console.log(bin);
console.log(result);
