var person = require('./person');
// console.log(require.cache); // 缓存
delete require.cache[require.resolve('./person')] // 清除缓存，require.resolve('./person')，返回person文件的绝对路径
var person = require('./person');
// console.log(require);
// var json = require('./1.json')
// console.log(person.func('牛'));
// console.log(json);
console.log(module);