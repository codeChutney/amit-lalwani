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

// $(function () {
//   let body = $('body'),
//       toggle = $('#toggle');
//   toggle.on('click', (e)=>{
//     e.preventDefault();
//     body.toggleClass('active');
//   });
// });
(function (d) {
  var body = d.querySelector('body'),
      toggle = d.querySelector('#toggle'),
      topTitle = d.querySelector('.top__title');
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('active');
    topTitle.classList.toggle('active');
  });
})(document);
'use strict';

(function (d) {
  var year = d.querySelector('#year'),
      currentYear = new Date().getFullYear();
  console.log(year);
  year.innerHTML = currentYear;
})(document);