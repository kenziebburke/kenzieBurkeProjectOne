// COMMENT SECTION =================================================
const formElement = document.querySelector('form');

const nameInput = document.querySelector('#userName');

const inputElement = document.querySelector('#comment'); 

const ulElement = document.querySelector('.comments');
console.log(ulElement);

const userInput = function(event){
    event.preventDefault(); 

    const userComment = inputElement.value.trim(); 
    const userName = nameInput.vlaue.trim(); 
    console.log(userName);

    if (userComment !== "" && userName !== ""){
        const liElement = document.createElement('li');

        const userText = document.createTextNode(userComment);

        const userNameInput = document.createTextNode(usesrName);

        liElement.appendChild(userText);
        liElement.appendChild(userNameInput);

        ulElement.appendChild(liElement);

        inputElement.value = ""; 
    }
}

formElement.addEventListener('submit', userInput);