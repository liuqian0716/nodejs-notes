var Person = require('./Human')
var girl = new Person('小龙女', 28);
var boy = new Person('杨过', 18);
console.log(girl.getName(), girl.getAge());
console.log(boy.getName(), boy.getAge());

girl.setName('老龙女')
girl.setAge(78)
console.log(girl.getName(), girl.getAge());
console.log(boy.getName(), boy.getAge());

