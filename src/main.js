let openBtn = document.querySelector('.bi-list');
let closeBtn = document.querySelector('.bi-x-lg');
let menu = document.querySelector('.navbar__menu');

openBtn.addEventListener('click', () => {
    toggleButtons();
})

closeBtn.addEventListener('click', () => {
    toggleButtons();
})

function toggleButtons() {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
}
