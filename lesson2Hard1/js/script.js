let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let toDay = 'пятница'

for (let i = 0; i < 7; i++) {
	if (i == 5 || i == 6) {
			document.write('<b>' + week[i] + '<br>' + '</b>');
	} else if ( week[i] == toDay) {
			document.write('<em>' + week[i] + '<br>' + '</em>');
	} else {
			document.write(week[i] + '<br>');
	}
			
};




let arr = [4523452345, 3878979, 786786789, 98789698675, 4564353453, 9689678, 87678];

let firstNumber = 3;
let secondNumber = 7;

for (let w = 0; w < 7; w++) {
		let num = String(arr[w]);
		if (+num[0] === firstNumber || +num[0] === secondNumber) {
			console.log(arr[w]);
		}
	
};



