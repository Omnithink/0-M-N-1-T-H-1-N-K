"use strict";

window.onload = function () {
  var anchors = document.querySelectorAll('header, .banner-button, .nav-item');
  var transition_el = document.querySelector('.transition');
  setTimeout(function () {
    transition_el.classList.remove('is-active');
  }, 500);

  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target.href;
      transition_el.classList.add('is-active');
      setInterval(function () {
        window.location.href = target;
      }, 1000);
    });
  }
};