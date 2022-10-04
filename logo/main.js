window.addEventListener('load', () => {
  
  const megaBox = [...document.querySelectorAll('.mega-box')];

  megaBox.forEach( el => {
    el.style.display = "block";
  } );

});
