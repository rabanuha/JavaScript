window.addEventListener('DOMContentLoaded', function () {
		

		let tab = document.getElementsByClassName('info-header-tab'),
						tabContent = document.getElementsByClassName('info-tabcontent'),
						info = document.getElementsByClassName('info-header')[0];

		function hideTabContent(a) {
				for (let i = a; i < tabContent.length; i++) {
								tabContent[i].classList.remove('show');
								tabContent[i].classList.add('hide');
				}
		}
		hideTabContent(1);

			function showTabContent (b) {
					if ( tabContent[b].classList.contains('hide')){
							hideTabContent(0);
							tabContent[b].classList.remove('hide');
							tabContent[b].classList.remove('show');
					}
			}

			info.addEventListener('click', function(event) {

					let target = event.target;
					if (target.className == 'info-header-tab') {
								for (let i = 0; i < tab.length; i++) {
												if (target == tab[i]) {
																showTabContent(i);
																break;
												}
								}
					}

			});

// Timer

			let deadLine = '2018-08-20';

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


});

