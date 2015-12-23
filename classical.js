/* Classical Model by James shore
https://www.youtube.com/watch?v=PMfcsYzj-9M*/

function Answer(value){
	this._val = value;
}
Answer.prototype.get = function fn1(){
	return this._val;
}

var lifeAnswer = new Answer(42);

var dessertAnswer = new Answer(3.14159);

function firmAnswer(value){
	Answer.call(this, value);
}

firmAnswer.prototype = Object.create(Answer.prototype);
firmAnswer.prototype.constructor = firmAnswer;

firmAnswer.prototype.get = function fn2(){
	return Answer.prototype.get.call(this) + "!!";
}

var luckyAnswer = new firmAnswer(7);

var magicAnswer = new firmAnswer(3)

console.log("%s\n%s\n%s\n",
	lifeAnswer.get(),
	dessertAnswer.get(),
	luckyAnswer.get(),
	magicAnswer.get()
);