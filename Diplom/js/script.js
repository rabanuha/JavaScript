window.addEventListener('DOMContentLoaded', function() {


	// Tab glazing_block

			let tabGlazing 							= document.getElementsByClassName('tab'),
							tabContent = document.getElementsByClassName('tabcontent'),
							tabGlazingContent = document.getElementsByClassName('glazing_slider')[0];


			function hideTabContent(a) {
			  for (let i = a; i < tabContent.length; i++) {


							tabGlazing[i].classList.remove('active');
			    tabContent[i].classList.remove('show');
			    tabContent[i].classList.add('hide');
			  }
			}

			hideTabContent(1);




			function showTabContent(b) {
			  if (tabContent[b].classList.contains('hide')) {
			    hideTabContent(0);
			    tabContent[b].classList.remove('hide');
			    tabContent[b].classList.add('show');
			    tabGlazing[b].classList.add('active');
			  }
			}


			tabGlazingContent.addEventListener('click', function(event) {

				let target = event.target;
				if (target.classList.contains('tab')) {
				  for (let i = 0; i < tabGlazing.length; i++) {
				    if (target == tabGlazing[i]) {
				      showTabContent(i);
				      break;
				    }
				  }
				}


			});


			// Tab internal_link

			let tabDecor = document.getElementsByClassName('no_click'),
							a = document.getElementsByClassName('text'),
							tabContentDecor = document.getElementsByClassName('decorat'),
							tabDecorSlider = document.getElementsByClassName('decoration_slider')[0];


				function hideTabContentDec(a) {
				  for (let i = a; i < tabContentDecor.length; i++) {
								tabDecor[i].classList.remove('after_click');
				    tabContentDecor[i].classList.remove('show');
				    tabContentDecor[i].classList.add('hide');
				  }
				}

				hideTabContentDec(1);




				function showTabContentDec(b) {
				  if (tabContentDecor[b].classList.contains('hide')) {
				    hideTabContentDec(0);
				    tabContentDecor[b].classList.remove('hide');
				    tabContentDecor[b].classList.add('show');
				    tabDecor[b].classList.add('after_click');
				  }
				}


				tabDecorSlider.addEventListener('click', function(event) {

					let target = event.target;
					if (target.classList.contains('no_click') || target.classList.contains('text')) {
					  for (let i = 0; i < tabDecor.length; i++) {
					    if (target == tabDecor[i] || target == a[i]) {
					      showTabContentDec(i);
					      break;
					    }
					  }
					}


				});


				// Timer

				let deadLine = '2018-09-13';

				function getTimeRemaining(endtime) {
					let t = Date.parse(endtime) - Date.parse(new Date()),

									seconds = Math.floor( (t/1000) % 60 ),
									minutes = Math.floor( (t/1000/60) % 60 ),
									hours = Math.floor( (t/(1000*60*60)) % 24 ),
									days = Math.floor( (t/(1000*60*60*24)) );


									return {
										'total': t,
										'days': days,
										'hours': hours,
										'minutes': minutes,
										'seconds': seconds
									};
				}

				function setClock(id, endtime) {

					let timer = document.getElementsByClassName(id)[0],
									days = timer.querySelector('.days'),
									hours = timer.querySelector('.hours'),
									minutes = timer.querySelector('.minutes'),
									seconds = timer.querySelector('.seconds');

									function updateClock() {
										  let t = getTimeRemaining(endtime);
										  if ( String(t.days).length < 2) {
										  	days.innerHTML = '0' + t.days;
										  } else {
										  	days.innerHTML = t.days;
										  }

										  if ( String(t.hours).length < 2) {
										  	hours.innerHTML = '0' + t.hours;
										  } else {
										  	hours.innerHTML = t.hours;
										  }

										  if ( String(t.minutes).length < 2) {
										  	minutes.innerHTML = '0' + t.minutes;
										  } else {
										  	minutes.innerHTML = t.minutes;
										  }
										  if ( String(t.seconds).length < 2) {
										  	seconds.innerHTML = '0' + t.seconds;
										  } else {
										  	seconds.innerHTML = t.seconds;
										  }
						
										  if (t.total < 0) {
										  		days.innerHTML = '00';
										  		hours.innerHTML = '00';
										  		minutes.innerHTML = '00';
										  		seconds.innerHTML = '00';
										  }
			
									};
									updateClock();
									setInterval(updateClock, 1000);
				};

				setClock('eTimer', deadLine);



				// Modal 60 sec


				let deadLine60 = 60000 + Date.parse(new Date());

				function getTimeRemaining60(endtime60) {
					let t60 = endtime60 - Date.parse(new Date());
									return t60;
				}

				function setClock60(endtime60) {
					let popup = document.getElementsByClassName('popup')[0];
									function updateClock60() {
										  let t60 = getTimeRemaining60(endtime60);
										  if (t60 < 0 && t60 > -2000) {
										  		popup.classList.add('show');
										  		document.body.style.overflow = 'hidden';
										  }
				
									};
									updateClock60();
									setInterval(updateClock60, 1000);
				};

				setClock60(deadLine60);
				


}); 