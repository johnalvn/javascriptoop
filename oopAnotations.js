//"use strict";
/*
	https://www.youtube.com/watch?v=PMfcsYzj-9M
*/
var parent = {
	get : function fn (){
		return this.val;
	},
	val : 42
}
var child = Object.create(parent);
child.val = 3.1416;
var grandchild = Object.create(child);
grandchild.val = 82;

console.log(parent.get());
console.log(child.get());
console.log(grandchild.get());


var myObject = {};
var myFunction = function(){}
var myObject2 = new Object();
var noPrototype = Object.create(null);

console.dir(myObject);
console.dir(myFunction);
console.dir(myObject2);
console.dir(noPrototype);




function fn(){
	return this.val;
}
var object1 = {
	get : fn,
	val : 42
}
var object2 = {
	get : fn,
	val : 3.14159
}
var object3 = {
	get : fn,
	val : 82 
}
/**/


function myMethod (){
	return this.val;
}
var object = {
	get : myMethod,
	val : 52
}
var object2 = {
	get : myMethod,
	val : 3.14
}
console.log(object2.get());
console.log(object.get());
console.log(myMethod.call(object));
/**/


function MyClass () {
	
}
function MySubClass(){
	MyClass.call(this);
}
MySubClass.prototype = Object.create(MyClass.prototype);
MySubClass.prototype.constructor = MySubClass;

MySubClass.prototype.method = function() {
	MyClass.prototype.method.call(this);
};
console.dir(MyClass);
console.dir(MySubClass);
/**/