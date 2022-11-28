const hamburger = document.querySelector('[data-hamburger]')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
})