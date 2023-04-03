// HAMBURGER MENU ==================================================
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




// MODALS===========================================================

// MODAL 1
// declaring variables
const bodyHTML = document.querySelector('body'); // select the document's body element

// variables for modal 1
const openModalOne = document.getElementById('openModalOne'); // select the open button element for our first modal
const modalBackgroundOne = document.getElementById('modalBackgroundOne'); // select our first modal element
const closeModalOne = document.getElementById('closeModalOne'); // select the close button element for our first modal


// variables for modal 2
const openModalTwo  = document.getElementById('openModalTwo'); // select the open button element for our second modal
const modalBackgroundTwo = document.getElementById('modalBackgroundTwo'); // select our second modal element
const closeModalTwo = document.getElementById('closeModalTwo'); // select the close button element for our second modal


// variables for modal 3
const openModalThree = document.getElementById('openModalThree');
const modalBackgroundThree = document.getElementById('modalBackgroundThree');
const closeModalThree = document.getElementById('closeModalThree');


// variables for modal 4
const openModalFour = document.getElementById('openModalFour');
const modalBackgroundFour = document.getElementById('modalBackgroundFour');
const closeModalFour = document.getElementById('closeModalFour');


// open modal
const openModal = function(modal) {
    modal.style.display = 'flex';
    bodyHTML.classList.add('stop-scrolling');
};
// exit modal
const closeModal = function(modal) {
    modal.style.display = 'none';
    bodyHTML.classList.remove('stop-scrolling');
};


// event listener for modal 1
openModalOne.addEventListener('click', function() {
    openModal(modalBackgroundOne);
});
closeModalOne.addEventListener('click', function() {
    closeModal(modalBackgroundOne);
});

// event listener for modal 2
openModalTwo.addEventListener('click', function() {
    openModal(modalBackgroundTwo);
});
closeModalTwo.addEventListener ('click', function() {
    closeModal(modalBackgroundTwo);
});

// event listener for modal 3
openModalThree.addEventListener('click', function() {
    openModal(modalBackgroundThree);
});
closeModalThree.addEventListener ('click', function() {
    closeModal(modalBackgroundThree);
});

// event listener for modal 4
openModalFour.addEventListener('click', function() {
    openModal(modalBackgroundFour);
});
closeModalFour.addEventListener ('click', function() {
    closeModal(modalBackgroundFour);
});



// COMMENT SECTION =================================================
const formElement = document.querySelector('form');
const inputElement = document.querySelector('#comment'); 
const ulElement = document.querySelector('.comments');


const userInput = function(event){
    event.preventDefault(); 

    const userComment = inputElement.value.trim(); 

    if (userComment !== "" && userName !== ""){
        const liElement = document.createElement('li');

        const userText = document.createTextNode(userComment);

        liElement.appendChild(userText);

        ulElement.appendChild(liElement);

        inputElement.value = ""; 
    }
}

formElement.addEventListener('submit', userInput);