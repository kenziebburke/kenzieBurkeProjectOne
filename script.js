// HAMBURGER MENU
// declaring variables
const navMenu = document.querySelector('.navFlex');

const navIcons = document.querySelector('.navIcons');

const hamIcon = document.querySelector('.fa-bars');

const closeNav = document.querySelector('.fa-times');

// making a function w if else statement for toggling menu open and close
const menuToggle = function(){
    if (navMenu.classList.contains("shown"))
    {
        navMenu.classList.remove('shown');
        closeNav.style.display ='none';
        hamIcon.style.display = 'block';
    }
    else{
        navMenu.classList.add('shown'); 
        closeNav.style.display = 'block';
        hamIcon.style.display = 'none';
    }
}

// making the icons listen for user interaction
navIcons.addEventListener("click", menuToggle);




// MODALS

// MODAL 1
// declaring variables
const modalButtonOpen = document.getElementById('openModal');

const modalWindow = document.getElementById('modalBackground');

const modalCloseButton = document.getElementById('closeModal');

const bodyHTML = document.querySelector('body');

// open modal
const openModal = function (){
    modalWindow.style.display = 'flex';
    bodyHTML.classList.add('stop-scrolling')
}
modalButtonOpen.addEventListener('click', openModal);


// exit modal
const  closeModal = function () {
    modalWindow.style.display = 'none';
    bodyHTML.classList.remove('stop-scrolling')
}
modalCloseButton.addEventListener ('click', closeModal);


// MODAL2
// declaring variables
const modalButtonOpenTwo = document.getElementById('openModalTwo');

const modalWindowTwo = document.getElementById('modalBackgroundTwo');

const modalCloseButtonTwo = document.getElementById('closeModalTwo');

// open modal
const openModalTwo = function (){
    modalWindowTwo.style.display = 'flex';
    bodyHTML.classList.add('stop-scrolling')
}
modalButtonOpenTwo.addEventListener('click', openModalTwo);


// exit modal
const  closeModalTwo = function () {
    modalWindowTwo.style.display = 'none';
    bodyHTML.classList.remove('stop-scrolling')
}
modalCloseButtonTwo.addEventListener ('click', closeModalTwo);