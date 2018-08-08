var num = 33721;

num = String(num);

var multi = num[0] * num[1] * num[2] * num[3] * num[4];

console.log(multi);

var degree  = Math.pow(multi, 3);

alert(String(degree)[0] + String(degree)[1]);
