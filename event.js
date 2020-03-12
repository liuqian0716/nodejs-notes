
// function Person(name){
//     this.name = name;
//     this._events = [];
// }
// Person.prototype.on = function(eventname, callback){
//     if(this._events[eventname]){
//         this._events[eventname].push(callback);
//     }else{
//         this._events[eventname] = [callback];
//     }
// }
// Person.prototype.emit = function(eventname){
//     var args = Array.prototype.slice.call(arguments, 1);
//     var callbacks = this._events[eventname];
//     var self = this;
//     callbacks.forEach(callback=>{
//         callback.apply(self, args)
//     })
// }
// var girl = new Person();
// girl.on('长发及腰', function(){
//     console.log('我来娶你可好');
// })
// girl.on('长发及腰', function(){
//     console.log('随便写');
// })
// girl.emit('长发及腰')

// const EventEmitter = require('events');
// var util = require('util');
// function Bell(name){
//     this.name = name;
// }
// util.inherits(Bell,EventEmitter)
// var jingleBell = new Bell();
// jingleBell.on('ring', function(){
//     console.log('收到礼物1');
// })
// jingleBell.addListener('ring', function(){
//     console.log('收到礼物2');
// })
// jingleBell.once('drop', function(){
//     console.log('铃铛丢了');
// })
// jingleBell.removeAllListeners('ring'); // 移除所有的事件
// var drop = function(who){
//     console.log(who+'铃铛丢了');
// }
// jingleBell.once('drop', drop) // 加参数

// jingleBell.emit('ring');
// jingleBell.emit('drop');
// jingleBell.removeListener('drop', function(){
//     console.log('11');
// })
// removeListener => off
// jingleBell.emit('drop');
// jingleBell.emit('drop');
// jingleBell.emit('drop', '鹿');
// jingleBell.emit('drop', '老人')
// console.log(jingleBell.listeners('ring'));

// event 两个异步的函数都执行完再去执行out函数
// const EventEmitter = require('events');
// var eve = new EventEmitter();
// var fs = require('fs');
// var person = {};
// eve.on('data',out);
// fs.readFile('name.txt','utf8',function(err,data){
//     person.name = data;
//     eve.emit('data')
// })
// fs.readFile('age.txt','utf8',function(err,data){
//     person.age = data;
//     eve.emit('data')
// })
// function out(){
//     if(person.name && person.age){
//         console.log(person.name + person.age);
//     } 
// }
// var util = require('util')
// function say(name, word){
//     console.log(name+':'+word);
// }
// // function newSay(){ // 作用等同于下边的newSay
// //     say.apply(null, ['张三'].concat(Array.prototype.slice.call(arguments)))
// // }
// var newSay = say.bind(this,'张三');
// newSay('我爱你')
// newSay('I love you')

