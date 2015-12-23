/* Classical Model by James shore
https://www.youtube.com/watch?v=PMfcsYzj-9M*/
"use strict";
class Answer {
	constructor(value){
		this._val = value;
	}
	get(){
		return this._val;
	}
}

var lifeAnswer = new Answer(42);

var dessertAnswer = new Answer(3.14159); 

class FirmAnswer extends Answer {
	constructor(value){
		super(value);
	}
	get(){
		return super.get() + "!!";
	}
}

var luckyAnswer = new FirmAnswer(7);

var magicAnswer = new FirmAnswer(3);

console.log("%s\n%s\n%s\n",
	lifeAnswer.get(),
	dessertAnswer.get(),
	luckyAnswer.get(),
	magicAnswer.get()
);