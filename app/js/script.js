const hamburger = document.querySelector('[data-hamburger]')
const header = document.querySelector('[data-header')
const overlay = document.querySelector('[data-overlay')

hamburger.addEventListener('click', () => {
  header.classList.toggle('open')
 
})