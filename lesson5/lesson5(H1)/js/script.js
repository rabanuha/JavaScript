

let body = document.getElementsByTagName('body')[0],
				adv = document.getElementsByClassName('adv')[0],
				column = document.getElementsByClassName('column')[1],
				title = document.getElementById('title'),
				feedback = document.getElementById('prompt'),
				ul = document.getElementsByTagName('ul')[0],
				li = document.getElementsByTagName('li'),
				li5 = document.createElement('li');



ul.insertBefore(li[2], li[1]);

li5.classList.add('menu-item');

ul.appendChild(li5);

li5.innerHTML = 'Пятый пункт';


body.style.background = "url('img/apple_true.jpg') center no-repeat";

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column.removeChild(adv);


feedback.innerHTML = prompt('Напишите свое отношение к технике apple');

