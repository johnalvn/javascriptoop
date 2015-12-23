var AnswerPrototype = {
	get : function fn1(){
		return this.val;
	}
}; 

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;

var dessertAnswer = Object.create(AnswerPrototype)
dessertAnswer.val = 3.14159; 

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2 (){
	return AnswerPrototype.get.call(this) + "!!";
}

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
 

console.log(
	lifeAnswer.get() ,
	dessertAnswer.get() ,
	luckyAnswer.get() ,
	magicAnswer.get() 
);