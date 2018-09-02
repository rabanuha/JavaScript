function ajax () {
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
}

module.exports = ajax;
