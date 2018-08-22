let money,
				price = 100;

let open = document.getElementById('open-btn'),

				nameValue = document.getElementsByClassName('name-value')[0],
				budgetValue = document.getElementsByClassName('budget-value')[0],
				goodsValue = document.getElementsByClassName('goods-value')[0],
				itemsValue = document.getElementsByClassName('items-value')[0],
				employersValue = document.getElementsByClassName('employers-value')[0],
				discountValue = document.getElementsByClassName('discount-value')[0],
				isopenValue = document.getElementsByClassName('isopen-value')[0],

				goodsItem = document.getElementsByClassName('goods-item'),

				goodsButton = document.getElementsByTagName('button')[1],
				budgetButton = document.getElementsByTagName('button')[2],
				employersButton = document.getElementsByTagName('button')[3],

				chooseItem = document.querySelector('.choose-item'),
				timeValue = document.querySelector('.time-value'),
				countBudgetValue = document.querySelector('.count-budget-value'),

				hireEmployersItem = document.querySelectorAll('.hire-employers-item'),

				discountChecked = document.getElementsByClassName('discount-checked')[0];


countBudgetValue.disabled = true;
budgetButton.disabled = true;
goodsButton.disabled = true;
employersButton.disabled = true;

goodsItem[0,1,2,3].addEventListener('change', () => {
	for (let i = 0; i < goodsItem.length; i++) {
				console.log(goodsItem[i].value);
		if (goodsItem != '' && mainList.open === true) {
						goodsButton.disabled = false;
		} else {
					goodsButton.disabled = true;
		}
	}
});

hireEmployersItem[0,1,2].addEventListener('change', () => {

		for (let i = 0; i < hireEmployersItem.length; i++) {
					console.log(hireEmployersItem[i].value);
			if (hireEmployersItem != '' && mainList.open === true) {
							employersButton.disabled = false;
			} else {
						employersButton.disabled = true;
			}
		}

});

discountChecked.addEventListener('change', () => {

	if (discountChecked.checked) {
		discountValue.style.backgroundColor = 'green';
		discountValue.innerHTML = 'Ваша скидка : 20%';
		discountValue.style.color = 'white';
		let discPrice = price * 0.8;
		console.log(discPrice);
	} else {
price = price;
		console.log(price);
		discountValue.style.backgroundColor = 'red';
		discountValue.innerHTML = '';

		
	}
}); 



open.addEventListener('click', () => {
		money = prompt("Ваш бюджет за месяц?", '');

		while (isNaN(money) || money == "" || money == null) {
					money = prompt("Ваш бюджет за месяц?", '');
		}
		budgetValue.textContent = money;
		budgetButton.disabled = false;


		nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();
});



goodsButton.addEventListener('click', () => {

		for (let i = 0; i < goodsItem.length; i++) {
				let a = goodsItem[i].value;
		
										if (typeof(a) === 'string' && typeof(a) != null && a.length < 50) {
												console.log('Все верно');
												mainList.shopGoods[i] = a;
												goodsValue.textContent = mainList.shopGoods;
										} else {
														i--;
										}
						}
});

chooseItem.addEventListener('change', () => {
		let items = chooseItem.value;

		if (items != "" && isNaN(items)) {
					mainList.shopItems = items.split(",");
					mainList.shopItems.sort();

					itemsValue.textContent = mainList.shopItems;
		}
});

timeValue.addEventListener('change', () => {

		let time = timeValue.value;

		if (time < 0) {
						alert('Такого не может быть');
						mainList.open = false;
		} else if (time > 8 && time < 20) {
						alert('Добро пожаловать');
						mainList.open = true;
				} else if (time < 24) {
								alert('уже слишком поздно');
								mainList.open = false;
						} else {
										alert('В сутках 24 часа');				
										mainList.open = false;			
									};
		if (mainList.open == true) {
			isopenValue.style.backgroundColor = 'green';
		} else {
			isopenValue.style.backgroundColor = 'red';
		}
});

budgetButton.addEventListener('click', () => {

		countBudgetValue.value = money / 30;

});

employersButton.addEventListener('click', () => {

		for (let i = 0; i < hireEmployersItem.length; i++) {
				let	nameEmployer = hireEmployersItem[i].value;
				nameEmployer = nameEmployer.charAt(0).toUpperCase() + nameEmployer.substr(1).toLowerCase();
				mainList.employers[i] = nameEmployer;
				employersValue.textContent += mainList.employers[i] + ', ';
		}

});





let mainList = {
				budget: money,
				shopName: name,
				shopGoods: [],
				employers: {},
				open: false,
				discount: false,
				shopItems: []
}

console.log(mainList);


