// HAMBURGER MENU ===============================
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




// MODALS===========================================

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


// MODAL2++++++++++++++++++++++++++++++++++++++++
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


// MODAL3++++++++++++++++++++++++++++++++++++++++
// declaring variables
const modalButtonOpenThree = document.getElementById('openModalThree');


const modalWindowThree = document.getElementById('modalBackgroundThree');

const modalCloseButtonThree = document.getElementById('closeModalThree');

// open modal
const openModalThree = function (){
    modalWindowThree.style.display = 'flex';
    bodyHTML.classList.add('stop-scrolling')
}

modalButtonOpenThree.addEventListener('click', openModalThree);


// exit modal
const  closeModalThree = function () {
    modalWindowThree.style.display = 'none';
    bodyHTML.classList.remove('stop-scrolling')
}
modalCloseButtonThree.addEventListener ('click', closeModalThree);



// MODAL4++++++++++++++++++++++++++++++++++++++++
// declaring variables
const modalButtonOpenFour = document.getElementById('openModalFour');


const modalWindowFour = document.getElementById('modalBackgroundFour');

const modalCloseButtonFour = document.getElementById('closeModalFour');

// open modal
const openModalFour = function (){
    modalWindowFour.style.display = 'flex';
    bodyHTML.classList.add('stop-scrolling')
}

modalButtonOpenFour.addEventListener('click', openModalFour);


// exit modal
const  closeModalFour = function () {
    modalWindowFour.style.display = 'none';
    bodyHTML.classList.remove('stop-scrolling')
}
modalCloseButtonFour.addEventListener ('click', closeModalFour);