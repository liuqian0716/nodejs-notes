// es5写法
// let { Readable } = require('stream');
// let util = require('util');
// util.inherits(Counter, Readable);

// function Counter(max, options){
//     Readable.call(this,options);
//     this._max = max;
//     this._index = 0;
// }

// Counter.prototype._read = function(){
//     if(this._index++ < this._max){
//         this.push(new Date());//往读取队列中写入数据,并发射data事件
//         // this.push(new Buffer.from(String(this._index)));//往读取队列中写入数据,并发射data事件
//     }else{
//         this.push(null)
//     }
// }

// // let counter = new Counter(8, {encoding: 'utf8', objectMode: true});
// let counter = new Counter(8);

// counter.setEncoding('utf8');
// counter.on('data', function(data){
//     console.log(data);
// })
// counter.on('end', function(){
//     console.log('结束了');
// })

// es6写法
let { Readable } = require('stream');

class Counter extends Readable{
    constructor(max, options){
        super(options);
        this._max = max;
        this._index = 0;
    }

    _read (){
        if(this._index++ < this._max){
            this.push(new Buffer.from(String(this._index)));//往读取队列中写入数据,并发射data事件
            // this.push(new Date());//往读取队列中写入数据,并发射data事件
        }else{
            this.push(null)
        }
    }
}

// let counter = new Counter(8, {encoding: 'utf8', objectMode: true});
let counter = new Counter(8);

counter.setEncoding('utf8');
counter.on('data', function(data){
    console.log(data);
})
counter.on('end', function(){
    console.log('结束了');
})
