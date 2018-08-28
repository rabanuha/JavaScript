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


			//  Modal
			
			let more = document.querySelector('.more'),
							overlay = document.querySelector('.overlay'),
							close = document.querySelector('.popup-close');
							

			more.addEventListener('click', function () {

								this.classList.add('more-splash');
								overlay.style.display = "block";
								document.body.style.overflow = 'hidden';


			});
			close.addEventListener('click', function() {


					overlay.style.display = "none";
					more.classList.remove('more-splash');
					document.body.style.overflow = '';

					for (let i = 0; btn_block.length; i++) {
						btn_block[i].classList.remove('more-splash');
					}
			});

			let btn_block = document.querySelectorAll('.description-btn');


			for (let i = 0; i < btn_block.length; i++) {
			    let button = btn_block[i];
			    button.addEventListener('click', function (event) {
			    		if (event.target && event.target.className == 'description-btn') {

			    						event.target.classList.add('more-splash');
			    						overlay.style.display = "block";
			    						document.body.style.overflow = 'hidden';
			    		}
			    });

			}



		

			


			function animation(draw, duration) {
				 let start = performance.now();

				 requestAnimationFrame(function animate(time) {

				 	let timePassed = time - start;
				 	if (timePassed > duration) timePassed = duration;
				 		draw(timePassed);

				 	if (timePassed < duration) {
				 		requestAnimationFrame(animate);
				 	}

				 });
			}

			let navigation = document.getElementsByTagName('nav')[0];

			navigation.addEventListener('click', function(event) {

				event.preventDefault();

				animation(function(timePassed) {

					let target = event.target;

					let section = document.getElementById( target.getAttribute('href').slice(1) );

					window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);

				}, 1200);

			});		

});

