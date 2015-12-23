var persona = {
	walk : function() {
		console.log("I am walking");
	},
	sayHello : function(){
		console.log("Hello I'm %s", this.firstName);
	},
	firstName : "",
}

var student = Object.create(persona);
student.firstName = "John";
student.subjet = "Applied Physics";
student.sayHello = function(){
	console.log("Hello I'm %s I'm studying %s", this.firstName, this.subjet);
}
student.sayGoodBye = function(){
	console.log("GoodBye");
};

student.sayHello();
student.walk();
student.sayGoodBye();

console.dir(student);

