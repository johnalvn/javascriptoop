/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

*/

var Person = function(firstName){
	this.firstName = firstName;
};
Person.prototype.walk = function(){
	console.log("I am walking!");
};
Person.prototype.sayHello = function(){
	console.log("Hello I'm %s", this.firstName);
};
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function Student(firstName, subject){
	Person.call(this, firstName);
	this.subject = subject;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
	console.log("Hello, I'm %s I'm studying %s", this.firstName, this.subject);
};
Student.prototype.sayGoodBye = function(){
	console.log("GoodBye!");
};
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();
student1.walk();
student1.sayGoodBye();
 
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);

console.dir(student1);


