let money,
				name,
				time,
				items,
				price = 100;

function start () {
		money = prompt("Ваш бюджет за месяц?", '');

		while (isNaN(money) || money == "" || money == null) {
					money = prompt("Ваш бюджет за месяц?", '');
		}

		name = prompt("Название вашего магазина?", '').toUpperCase();
		time = 19;
}

// start();

let mainList = {
				budget: money,
				shopName: name,
				shopGoods: [],
				employers: {},
				open: false,
				discount: false,
				shopItems: [],
				chooseGoods: function chooseGoods () {
						for (let i = 0; i < 5; i++) {
						let a = prompt("Какой тип товаров будем продавать?", '');
		
														if (typeof(a) === 'string' && a != '' && a.length < 50) {
																console.log('Все верно');
																mainList.shopGoods[i] = a;
														} else {
																		i--;
														}
										}
				},
				workTime: function workTime (time) {
								if (time < 0) {
												console.log('Такого не может быть');
								} else if (time > 8 && time < 20) {
												console.log('Время работать');
												mainList.open = true;
										} else if (time < 24) {
														console.log('уже слишком поздно');
												} else {
																console.log('В сутках 24 часа');							
															}
				},
				dayBudget: function dayBudget () {
							alert( "Бюджет за один день: " + (mainList.budget / 30).toFixed(2) + "р.");
				},
				makeDiscount: function makeDiscount (price) {
								if (mainList.discount === true) {
								price = price * 0.8
								}
				},
				hireEmployers: function hireEmployers () {
							for (let i = 0; i < 4; i++) {
									let	nameEmployer = prompt('Введите имя сотрудника', '').toUpperCase();
									nameEmployer = nameEmployer.charAt(0).toUpperCase() + nameEmployer.substr(1).toLowerCase();
							if (typeof(nameEmployer) === 'string' && nameEmployer != '') {
										mainList.employers[i + 1] = nameEmployer;
							} else {
										i--;
										}
							}
				},
				chooseShopItems: function chooseShopItems () {

						while (items == "" || items == null || typeof(items) !== "string") {
									items = prompt("Перечислите через запятую товары", "");
						}
									mainList.shopItems = items.split(",");

									mainList.shopItems.push(prompt("Подождите, еще ", ""));


						while (mainList.shopItems[mainList.shopItems.length - 1] == "" || mainList.shopItems[mainList.shopItems.length - 1] == null) {
											mainList.shopItems.pop();
											mainList.shopItems.push(prompt("Подождите, еще ", ""));
						}

									
									mainList.shopItems.sort();
				}
}
mainList.chooseShopItems();

document.write("У нас вы можете купить: " + "<br>");

mainList.shopItems.forEach(function(item, i, shopItems){
			document.write(++i + " - " + item + "<br>");
});

console.log("Наш магазин включает в себя: ");
for(var key in mainList) {
 	console.log(key);
}

console.log(mainList);


