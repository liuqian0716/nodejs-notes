let { Writable } = require('stream');
let util = require('util');
let fs = require('fs')
util.inherits(ConsoleStream, Writable)

function ConsoleStream(path){
    Writable.call(this)
   this._path = path;
   this._fd = fs.openSync(this._path, 'a')
}

ConsoleStream.prototype._write = function(data, encoding, callback){
    console.log(data.toString());
    let len = fs.writeSync(this._fd, data, 0, data.length, 0 );
    callback()
}

ConsoleStream.prototype.end = function(){
    this.end.call(this);
    fs.closeSync(this._fd);
}
var con = new ConsoleStream('./line.txt');
con.write('恭喜', 'utf8', function(data){
    console.log(data);
    con.write('发财', 'utf8', function(){
        console.log('写入完毕');
    })
})

