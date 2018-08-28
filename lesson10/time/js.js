let	timerId = setTimeout(writeTime, );

function writeTime () {
	let now     = new Date(),
					arrTime = [now.getHours(), now.getMinutes(), now.getSeconds()];
	for (var i = 0; i <= arrTime.length; i++ ) {
								var a = arrTime[i] + '';
					if (a.length < 2) {
								arrTime[i] = '0' + arrTime[i];
					}
	}
	document.body.innerHTML = arrTime.join(':', );
	timerId = setTimeout(writeTime, 1000);
	
}

