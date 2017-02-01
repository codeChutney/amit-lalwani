(()=>{
  let resumeProjectContent = $('.resume__project-content');
  resumeProjectContent.on('click', function (e) {
    // console.log($(this).find('.content'));
    let content = $(this).find('.content');
    let icon = $(this).find('.icon');
    content.slideToggle();
    icon.toggleClass('icon-chevron-up');
  })
})();
