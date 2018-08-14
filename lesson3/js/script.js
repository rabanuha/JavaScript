let money,
				name,
				time,
				price = 100;

function start () {
		money = prompt("Ваш бюджет за месяц?");

		while (isNaN(money) || money == "" || money == null) {
					money = prompt("Ваш бюджет за месяц?");
		}

		name = prompt("Название вашего магазина?").toUpperCase();
		time = 19;
}

// start();

let mainList = {
				budget: money,
				shopName: name,
				shopGoods : [],
				employers : {},
				open : false,
				discount: true
};

function hiringEmployers () {
		for (let i = 0; i < 4; i++) {
			let	nameEmployer = prompt('Введите имя сотрудника').toUpperCase();
							nameEmployer = nameEmployer.charAt(0).toUpperCase() + nameEmployer.substr(1).toLowerCase();
				if (typeof(nameEmployer) === 'string' && nameEmployer != '') {
					mainList.employers[i + 1] = nameEmployer;

				} else {
					i--;
				}
		}
}

function discountPrice (price) {
		if (mainList.discount === true) {
			price = price * 0.8
		}
		console.log(price);
}

function chooseGoods () {
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
}

hiringEmployers();

discountPrice();

// chooseGoods();

function workTime (time) {
		if (time < 0) {
				console.log('Такого не может быть');
		} else if (time > 8 && time < 20) {
				console.log('Время работать');
				} else if (time < 24) {
						console.log('уже слишком поздно');
						} else {
										console.log('В сутках 24 часа');							
		};
}

workTime(18);

console.log(mainList);

function budgetDay () {
		alert( "Бюджет за один день: " + (money / 30).toFixed(2) + "р.");
}

budgetDay();
