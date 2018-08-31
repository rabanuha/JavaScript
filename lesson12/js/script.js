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
					statusMessage.innerHTML = '';

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


			// Form

			let message = new Object();
			message.loading = "Загрузка... ";
			message.success = "Спасибо! Скоро мы с вами свяжемся";
			message.failure = "Что-то пошло не так... ";

			let form = document.getElementsByClassName('main-form')[0],
							input = form.getElementsByTagName('input'),
							statusMessage = document.createElement('div');
							statusMessage.classList.add('status');

							form.addEventListener('submit', function(event){

								event.preventDefault();
								form.appendChild(statusMessage);

								// AJAX

								let request = new XMLHttpRequest();
								request.open("POST", 'server.php');

								request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

								let formData = new FormData(form);

								request.send(formData);

								request.onreadystatechange = function() {
									if (request.readyState < 4) {
										statusMessage.innerHTML = message.loading;
									} else if (request.readyState === 4) {
										if (request.status == 200 && request.status < 300) {
											statusMessage.innerHTML = message.success;
										}
										else {
											statusMessage.innerHTML = message.failure;
										}
									}
								}
								for (let i = 0; i < input.length; i++) {
									input[i].value = '';
								}
							});

				// Form-contact
				let contact_form = document.getElementById('form'),
								input_mail = document.getElementsByTagName('input')[0],
								input_phone = document.getElementsByTagName('input')[1];

								statusMessageContact = document.createElement('div');
								statusMessageContact.classList.add('status-contact');

								contact_form.addEventListener('submit', function(event){
									event.preventDefault();
									statusMessage.style.cssText = "color: #c78030; margin-top: 30px";

									contact_form.appendChild(statusMessage);


									// AJAX

									let request_contact = new XMLHttpRequest();
									request_contact.open("POST", 'server.php');

									let formDataContact = new FormData(contact_form);

									request_contact.send(formDataContact);

									request_contact.onreadystatechange = function() {
										if (request_contact.readyState < 4) {
											statusMessage.innerHTML = message.loading;
										} else if (request_contact.readyState === 4) {
											if (request_contact.status == 200 && request_contact.status < 300) {
												statusMessage.innerHTML = message.success;
											}
											else {
												statusMessage.innerHTML = message.failure;
											}
										}
									}
									for (let i = 0; i < input.length; i++) {
										input[i].value = '';
									}
								});


						// Slider


						let slideIndex = 1,
										slides = document.getElementsByClassName('slider-item'),
										prev = document.querySelector('.prev'),
										next = document.querySelector('.next'),
										dotsWrap = document.querySelector('.slider-dots'),
										dots = document.getElementsByClassName('dot');

										showSlides(slideIndex);

										function showSlides(n) {

												if (n > slides.length) {
													slideIndex = 1;
												};

												if (n < 1) {
													slideIndex = slides.length;
												};

												for ( let i = 0; i < slides.length; i++) {
																slides[i].style.display = 'none';
												};

												for (let i = 0; i < dots.length; i++) {
															dots[i].classList.remove('dot-active');
												};

												slides[slideIndex - 1].style.display = 'block';
												dots[slideIndex - 1].classList.add('dot-active');

										}


										function plusSlides (n) {
													showSlides(slideIndex += n);
										}

										function currentSlide (n) {
													showSlides(slideIndex = n);
										}

										prev.addEventListener('click', function() {
												plusSlides(-1);
										});

										next.addEventListener('click', function() {
												plusSlides(1);
										});

										dotsWrap.addEventListener('click', function(eventPhase) {

											for (let i = 0; i < dots.length + 1; i++) {
														if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
															currentSlide(i);
														}
											}
										});


										// Calc


										let persons = document.getElementsByClassName('counter-block-input')[0],
														restDays = document.getElementsByClassName('counter-block-input')[1],
														place = document.getElementById('select'),
														totalValue = document.getElementById('total');
														personsSum = 0,
														daysSum = 0,
														total = 0;
														persons.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
														restDays.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');

														totalValue.innerHTML = 0;

														persons.addEventListener('change', function () {
															personsSum = +this.value
															total = (daysSum + personsSum)*4000;
															if (restDays.value == '' || persons.value == '') {
																		totalValue.innerHTML = 0;
															} else {
																totalValue.innerHTML = total;
															}

														});

														restDays.addEventListener('change', function () {
															daysSum = this.value
															total = (daysSum + personsSum)*4000;
															if (persons.value == '' || restDays.value == '') {
																		totalValue.innerHTML = 0;
															} else {
																totalValue.innerHTML = total;
															}

														});

														place.addEventListener('change', function() {
															if (restDays.value == '' || persons.value == '') {
																totalValue.innerHTML = 0;
															} else {
																let a = total;
																
																totalValue.innerHTML = a * this.options[this.selectedIndex].value;
															}
														});







});

