function Person(name,age){
    this._name = name;
    this._age = age;
}
Person.prototype.getName = function(){
    return this._name;
}
Person.prototype.setName = function(name){
    this._name = name;
}
Person.prototype.getAge = function(){
    return this._age;
}
Person.prototype.setAge = function(age){
    this._age = age;
}
Person.prototype.home = '北京';
module.exports = Person;
