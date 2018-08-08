var budget = +prompt("Ваш бюджет за месяц?");
var nameShop = prompt("Название вашего магазина?");


var goods1 = prompt("Какой тип товаров будем продавать?");
var goods2 = prompt("Какой тип товаров будем продавать?");
var goods3 = prompt("Какой тип товаров будем продавать?");


var shopGoods = [goods1, goods2, goods3];

var mainList = {
		budget,
		nameShop,
		shopGoods,
		employers : {},
		open : true
};

alert('Бюджет за один день ' + budget / 30);
