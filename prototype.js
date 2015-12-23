/* Classical Model by James shore
https://www.youtube.com/watch?v=PMfcsYzj-9M*/

var Answer = {
	constructor : function fn0(val){
		this._val = val;
	},
	get : function fn1(){
		return this._val;
	}
}; 

var lifeAnswer = Object.create(Answer);
lifeAnswer.constructor(42);

var dessertAnswer = Object.create(Answer)
dessertAnswer.constructor(3.14159);

var FirmAnswer = Object.create(Answer);
FirmAnswer.get = function fn2 (){
	return Answer.get.call(this) + "!!";
}

var luckyAnswer = Object.create(FirmAnswer);
luckyAnswer.constructor(7);

var magicAnswer = Object.create(FirmAnswer);
magicAnswer.constructor(3);
 
console.log("%s\n%s\n%s\n",
	lifeAnswer.get(),
	dessertAnswer.get(),
	luckyAnswer.get(),
	magicAnswer.get()
);