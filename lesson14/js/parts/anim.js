"use strict";

function anim() {
  function animation(draw, duration) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timePassed = time - start;
      if (timePassed > duration) timePassed = duration;
      draw(timePassed);

      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
    });
  }

  var navigation = document.getElementsByTagName('nav')[0];
  navigation.addEventListener('click', function (event) {
    event.preventDefault();
    animation(function (timePassed) {
      var target = event.target;
      var section = document.getElementById(target.getAttribute('href').slice(1));
      window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
    }, 1200);
  });
}

module.exports = anim;