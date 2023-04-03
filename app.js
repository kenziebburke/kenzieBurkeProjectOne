// COMMENT SECTION =================================================
const formElement = document.querySelector('form');

const inputElement = document.querySelector('#comment'); 

const ulElement = document.querySelector('.comments');
console.log(ulElement);

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