
let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.substr(1);

str = str.replace(/-/g, ' ');

console.log(str);

str = str.split(' ')[4];
str = str.replace(/им/g, 'о');

alert(str);




let arr = [20, 33, 1, 'Человек', 2, 3];
let sumCub = 0;
			for (let i = 0; i < 6; i++) {
					if (typeof(arr[i]) == 'number') {
						let cub = Math.pow(arr[i], 3);
						sumCub = sumCub + cub;
					}
			}
console.log(Math.sqrt(sumCub));

function work (string) {
		if (typeof(string) != 'string') {
			alert('Аргумент не строка');
		}
		string = string.trim();
		if (string.length > 50) {
				string = string.substr(0, 50) + "...";
		}

		alert(string);
}

work();