let budget = +prompt("Ваш бюджет за месяц?");
let nameShop = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
				budget,
				nameShop,
				shopGoods : [],
				employers : {},
				open : true
};

for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товаров будем продавать?");
		
		if (typeof(a) === 'string' && a != '' && a.length < 50) {
				console.log('Все верно');
				mainList.shopGoods[i] = a;
		} else {
				console.log('Не верно');
				console.log(i);
				i--;
		}
};

// let i = 0;
// while (i <5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
		
// 		if (typeof(a) === 'string' && a != '' && a.length < 50) {
// 				console.log('Все верно');
// 				mainList.shopGoods[i] = a;
// 				i++;
// 		} else {
// 				console.log('Не верно');
// 				console.log(i);
// 		};
// };

// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
		
// 		if (typeof(a) === 'string' && a != '' && a.length < 50) {
// 				console.log('Все верно');
// 				mainList.shopGoods[i] = a;
// 				i++;
// 		} else {
// 				console.log('Не верно');
// 				console.log(i);
// 		};
// }
// while (i < 5);


if (time < 0) {
				console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
				console.log('Время работать');
				} else if (time < 24) {
						console.log('уже слишком поздно');
						} else {
										console.log('В сутках 24 часа');							
};

console.log(mainList);


alert( "Бюджет за один день: " + (budget / 30).toFixed(2) + "р.");
