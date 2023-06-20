const toggle = document
    .querySelector('.nav__wrapper__toggle')
const ul = document.querySelector('.nav__wrapper__ul')
toggle.addEventListener('click', () => {
    ul.classList.toggle('nav__active')
    console.log(ul.classList)
})
