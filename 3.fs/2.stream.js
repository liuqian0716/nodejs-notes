// var fs = require('fs');

// var rs = fs.createReadStream('line.txt',{
//     start: 0, end: 5, highWaterMark: 3
// })
// rs.setEncoding('utf8')
// rs.on('open', function(){
//     console.log('打开文件');
// })
// rs.on('data', function(data){
//      console.log(data);
//      rs.pause()
//      setTimeout(()=>{
//         rs.resume();
//      },3000)
//  })

// rs.on('end',function(){
//      console.log('结束');
// })
// rs.on('close',function(){
//     console.log('关闭');
// })


// 写入了一个文件内容为128k的文件
let fs = require('fs');
// fs.writeFile('./128.txt', new Buffer.alloc(128*1024), function(){})

let rs = fs.createReadStream('128.txt');

rs.on('data', function(data){
    console.log(data.length); // 65536  是64k
})
 