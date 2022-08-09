function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
    })

    document.querySelectorAll('.selected-circle').forEach(c => c.classList.remove('selected-circle'))

    document.querySelectorAll('.nav-dot')[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add('selected-circle')
}

window.addEventListener('scroll', updateList);

const navbar = document.querySelector('.nnav')
const hamburger = document.querySelector('.hamburger')
const icon = document.querySelectorAll('.mobile-nav-icon')
console.log(icon)

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('translate-x-full')
    icon[0].classList.toggle('hidden')
    icon[1].classList.toggle('hidden')
})