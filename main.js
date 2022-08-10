const navbar = document.querySelector('.nnav')
const hamburger = document.querySelector('.hamburger')
const icon = document.querySelectorAll('.mobile-nav-icon')
console.log(icon)

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('translate-x-full')
    icon[0].classList.toggle('hidden')
    icon[1].classList.toggle('hidden')
    hamburger.classList.toggle('absolute')
    hamburger.classList.toggle('fixed')
})