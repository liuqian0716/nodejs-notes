// 构建buffer的方法
// var buff1 = new Buffer.alloc(3);
// console.log(buff1);
// buff1[0] = 0x61;
// buff1[1] = 0x62;
// buff1[2] = 0x63;

// var buff2 = new Buffer.from([0x61, 0x62, 0x63]);

// var buff3 = new Buffer.from('abc','utf8');

// console.log(buff1.toString() == buff2.toString());
// console.log(buff2.toString() == buff3.toString());

var buf = new Buffer.alloc(12);
buf.write('恭喜', 0, 6)
buf.write('发财', 6, 6);
console.log(buf.toString());

var buffer = new Buffer.from('恭喜发财');
var buffer1 = buffer.slice(0,7);
var buffer2 = buffer.slice(7);
console.log(buffer1.toString());
console.log(buffer2.toString());

var StringDecoder = require('string_decoder').StringDecoder;
var string = new StringDecoder();
console.log(string.write(buffer1));
console.log(string.write(buffer2));

var buff1 = new Buffer.from([4,5,6]);
var buff2 = new Buffer.alloc(6);
buff2[0] = 1;
buff2[1] = 2;
buff2[2] = 3;
buff1.copy(buff2, 3, 0, 3) // copy的参数，targetBuffer,targetStart,sourceStart,sourceEnd
console.log(buff2);

var buf1 = new Buffer.from([1,2,3]);
var buf2 = new Buffer.from([4,5,6]);
var buf = Buffer.concat([buf1, buf2], 6);
console.log(buf);
function concat(list, length){
    return result;
}
