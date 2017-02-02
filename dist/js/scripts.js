'use strict';

$(function () {
  var name = $('#name'),
      email = $('#email'),
      message = $('#message-ta'),
      form = $('#form'),
      btnSend = $('#btn-send'),
      success = void 0;
  var expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  form.on('submit', function (e) {
    e.preventDefault();
    if (name.val() == '') {
      success = false;
      name.parent().find('span').text('This field is required.');
      name.parent().find('span').fadeIn();
    } else if (email.val() == '' || !expRegEmail.test(email.val())) {
      success = false;
      if (email.val() == '') {
        email.parent().find('span').text('This field is required.');
      } else {
        email.parent().find('span').text('Please enter a valid email address.');
      }
      email.parent().find('span').fadeIn();
    } else if (message.val() == '') {
      success = false;
      message.parent().find('span').text('This field is required.');
      message.parent().find('span').fadeIn();
    } else {
      success = true;
    }
    console.log(success + ' fin ' + message.val());
    $('input,textarea').on('focus', function () {
      var self = $(this);
      self.parent().find('span').fadeOut();
    });
    if (success) {
      var data = $(this).serializeArray(),
          url = $(this).attr('action'),
          method = $(this).attr('method');
      console.log(url);
      $.ajax({
        url: url,
        type: method,
        dataType: 'json',
        data: data
      }).done(function () {
        spop('<h4 class="spop-title">Success</h4>Your message was sent', 'success', {
          template: '3 seconds autoclose', // string required. Without it nothing happens!
          style: 'error', // success, warning or error
          autoclose: 2000, // miliseconds
          position: 'top-right', // top-left top-center bottom-left bottom-center bottom-right
          icon: true, // or false
          group: false });
        btnSend.attr('disabled', 'true').addClass('disabled').text('sent');
      }).fail(function () {
        spop('<strong>Error, try again!</strong>', 'error', {
          template: '3 seconds autoclose', // string required. Without it nothing happens!
          style: 'error', // success, warning or error
          autoclose: 2000, // miliseconds
          position: 'top-right', // top-left top-center bottom-left bottom-center bottom-right
          icon: true, // or false
          group: false });
      }).always(function () {
        SmallPop.close();
      });
    }
  });
});
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