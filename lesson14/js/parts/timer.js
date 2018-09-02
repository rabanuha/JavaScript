function timer () {
	let deadLine = '2018-08-29';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60),
		minutes = Math.floor( (t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) );


		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		}; 
	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						seconds = timer.querySelector('.seconds');

						function updateClock() {
							let t = getTimeRemaining(endtime);
							if ((t.seconds + '').length < 2) {
								seconds.innerHTML = '0' + t.seconds;
							} else {
								seconds.innerHTML = t.seconds;
							}
							if ((t.minutes + '').length < 2) {
								minutes.innerHTML = '0' + t.minutes;
							} else {
								minutes.innerHTML = t.minutes;
							}
							if ((t.hours + '').length < 2) {
								hours.innerHTML = '0' + t.hours;
							} else {
								hours.innerHTML = t.hours;
							}
							if (t.total <= 0) {		
								hours.innerHTML = '00';
								minutes.innerHTML = '00';
								seconds.innerHTML = '00';
							} 
						};

						updateClock();
						let timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadLine);
}

module.exports = timer;