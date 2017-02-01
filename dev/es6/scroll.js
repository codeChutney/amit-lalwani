$(function () {
  let body = $('body'),
      toggle = $('#toggle');
  toggle.on('click', (e)=>{
    e.preventDefault();
    body.toggleClass('active');
  });
  let menu = $('#menu');
  menu.on('click','a', function (e) {
    e.preventDefault();
    let $t = $(this);
    let link = $t.attr('href');
    toggle.trigger('click');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    },1000);
    $(link).animate({
      scrollTop: 0
    },1000)
  })
});
