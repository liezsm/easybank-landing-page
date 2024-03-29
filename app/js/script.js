const hamburger = document.querySelector('[data-hamburger]')
const header = document.querySelector('[data-header')
const overlay = document.querySelector('[data-overlay')

hamburger.addEventListener('click', () => {
  header.classList.toggle('open')
  if(header.classList.contains('open')){
    overlay.style.removeProperty('display');
     overlay.classList.add('fade-in') ;
     overlay.classList.remove('fade-out'); 
  }else{
      overlay.classList.add('fade-out')
      overlay.classList.remove('fade-in')
  }
 
})

overlay.addEventListener('animationend', () => {
   if( overlay.classList.contains('fade-out')){
    overlay.style.display= 'none' 
  }
})

