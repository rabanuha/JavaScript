// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

let assert = require('chai').assert;

describe("sum", function() {

	it("Проверяем на true", function(){
		assert.equal(sum(7,8), true);
	});

});

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr1 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr1[1][1];

describe("num", function() {

	it("Переменная num должна быть равна 5", function(){
		assert.equal(num, 5);
	});

});


// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

describe("each", function() {

	it("что нам вернет функция each", function(){
		assert.deepEqual(each(arr, myFunc), [8, 7, 6, 5, 4]);
	});

	it("Проверка на тип данных функции each", function(){
		assert.typeOf(each(arr, myFunc), 'array') ;
	});

	it("Проверка на свойство length", function(){
		assert.equal(each(arr, myFunc).length, 5);
	});

});