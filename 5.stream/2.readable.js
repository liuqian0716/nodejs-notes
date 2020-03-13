var fs = require('fs');

var rs = fs.createReadStream('line.txt',{
    start: 0, end: 6, highWaterMark: 3
})
let buffers = [];
rs.on('readable', function(){
    console.log('====readable======');
    // console.log(rs.read(1));
    let buffer;
    while(null != (buffer = rs.read(1))){
        buffers.push(buffer)
    }
})
rs.on('end', function(){
    let res = Buffer.concat(buffers)
    console.log(res.toString());
})