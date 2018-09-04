"use strict";

function modal() {
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
  });
  var btn_block = document.querySelectorAll('.description-btn'),
      info = document.querySelector('.info');
  info.addEventListener('click', function (event) {
    var a = event.target;

    if (event.target.className == 'description-btn') {
      event.target.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = 'hidden';
    }
  });
  close.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

    for (var i = 0; i < btn_block.length; i++) {
      if (btn_block[i].className == 'more-splash') {
        btn_block[i].classList.remove('more-splash');
      } else {
        btn_block[i].classList.remove('more-splash');
      }
    }
  });
}

module.exports = modal;