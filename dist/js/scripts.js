"use strict";
'use strict';

(function () {
  var resumeProjectContent = $('.resume__project-content');
  resumeProjectContent.on('click', function (e) {
    // console.log($(this).find('.content'));
    var content = $(this).find('.content');
    var icon = $(this).find('.icon');
    content.slideToggle();
    icon.toggleClass('icon-chevron-up');
  });
})();
"use strict";
'use strict';

$(function () {
  var body = $('body'),
      toggle = $('#toggle');
  toggle.on('click', function (e) {
    e.preventDefault();
    body.toggleClass('active');
  });
  var menu = $('#menu');
  menu.on('click', 'a', function (e) {
    e.preventDefault();
    var $t = $(this);
    var link = $t.attr('href');
    toggle.trigger('click');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 1000);
    $(link).animate({
      scrollTop: 0
    }, 1000);
  });
});
(function (w, s, d) {
  window.addEventListener("deviceorientation", handleOrientation, false);
  function handleOrientation(event) {
    console.log(screen.orientation);
  }
})(window, screen, document);
'use strict';

(function (d) {
  var year = d.querySelector('#year'),
      currentYear = new Date().getFullYear();
  // console.log(year);
  year.innerHTML = currentYear;
})(document);