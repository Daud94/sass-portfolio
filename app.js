const toggle = document
    .querySelector('.nav__wrapper__toggle')
const ul = document.querySelector('.nav__wrapper__ul')
toggle.addEventListener('click', () => {
    ul.classList.toggle('nav__active')
    console.log(ul.classList)
})

// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading')
const nameText = "Daud Olarewaju"
let start = 0
const typeWrite = () => {
    if (start < nameText.length){
        nameElement.innerHTML += nameText.charAt(start)
        start++
        setTimeout(typeWrite,300)
    }
}
typeWrite()

// open / close modal

const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__wrapper__close')


// open modal
modalBtn.addEventListener('click',()=>{
    modal.style.display = 'flex';
})

closeModal.addEventListener('click',()=>{
    modal.style.display = 'none';
})




