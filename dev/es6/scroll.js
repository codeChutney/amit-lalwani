// $(function () {
//   let body = $('body'),
//       toggle = $('#toggle');
//   toggle.on('click', (e)=>{
//     e.preventDefault();
//     body.toggleClass('active');
//   });
// });
((d)=>{
  let body = d.querySelector('body'),
      toggle = d.querySelector('#toggle'),
    topTitle = d.querySelector('.top__title');
  toggle.addEventListener('click', (e)=>{
    e.preventDefault();
    body.classList.toggle('active');
    topTitle.classList.toggle('active');
  })
})(document);
