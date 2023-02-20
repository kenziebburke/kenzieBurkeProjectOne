// HAMBURGER MENU
const navMenu = document.querySelector('.navFlex');

const navIcons = document.querySelector('.navIcons');

const hamIcon = document.querySelector('.fa-bars');

const closeNav = document.querySelector('.fa-times');

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

navIcons.addEventListener("click", menuToggle);




// MODALS
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
