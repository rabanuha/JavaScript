"use strict";

function ajax() {
  var message = new Object();
  message.loading = "Load... ";
  message.success = "Thank you! Soon we will contact you";
  message.failure = "Something went wrong... ";
  var form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage); // AJAX

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(form);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }); // Form-contact

  var contact_form = document.getElementById('form');
  statusMessageContact = document.createElement('div');
  statusMessageContact.classList.add('status-contact');
  contact_form.addEventListener('submit', function (event) {
    event.preventDefault();
    statusMessage.style.cssText = "color: #c78030; margin-top: 30px";
    contact_form.appendChild(statusMessage); // AJAX

    var request_contact = new XMLHttpRequest();
    request_contact.open("POST", 'server.php');
    var formDataContact = new FormData(contact_form);
    request_contact.send(formDataContact);

    request_contact.onreadystatechange = function () {
      if (request_contact.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request_contact.readyState === 4) {
        if (request_contact.status == 200 && request_contact.status < 300) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
}

module.exports = ajax;