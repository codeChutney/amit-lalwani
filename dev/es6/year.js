((d)=>{
  let year = d.querySelector('#year'),
  currentYear = new Date().getFullYear();
  // console.log(year);
  year.innerHTML= currentYear;
})(document);
