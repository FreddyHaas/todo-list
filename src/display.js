import {storeNewToDo, defaultProject} from './dataBase.js';

function renderContent () {
    const content = document.getElementById ('content');
    content.appendChild(createHeader("All")); // Input   
    content.appendChild(createToDoListContainer());
    createToDoList(defaultProject); // Input
    content.appendChild(addToDoButton());
    
    return content;
}

function createHeader (name) {
    const contentHeader = document.createElement('p');
    contentHeader.textContent = `${name}`;
    
    return contentHeader;
}

function createToDoListContainer () {
    const toDoListContainer = document.createElement('div');
    toDoListContainer.classList.add('todo-list'); 
    
    return toDoListContainer
}

function createToDoList (project) {  
    const toDoListContainer = document.querySelector('.todo-list');
    
    while (toDoListContainer.firstChild) {
        toDoListContainer.removeChild(toDoListContainer.lastChild);
        }
    
    for (let i = 0; i < project.getLength(); i++) {
        const toDo = document.createElement('div');
        toDo.textContent = `${project.getTitle(i)}`;
        toDo.classList.add('todo');
        toDoListContainer.appendChild(toDo);
    }
}

function addToDoButton () {
    const inputButtons = document.createElement('div');
    inputButtons.setAttribute('id','todo-button');

    const addToDoButton = document.createElement('div');
    addToDoButton.classList.add('todo');
    addToDoButton.textContent = "+ Add ToDo";
    addToDoButton.setAttribute('id', 'add-task');
    inputButtons.appendChild(addToDoButton);

    addToDoButton.addEventListener('click', () => {
        inputButtons.removeChild(inputButtons.lastChild);
        toDoInputField();
    });

    return inputButtons;
}

function toDoInputField () {
    parent = document.getElementById('todo-button');

    const input = document.createElement('INPUT');
    input.setAttribute("type","text");
    input.setAttribute("id", "todo-input");
    parent.appendChild(input);

    const addButton = document.createElement('button');
    addButton.setAttribute("id","add-button");
    addButton.textContent = "Add";
    parent.appendChild(addButton);

    addButton.addEventListener('click', () => {
        storeNewToDo(readInput(input));
        createToDoList(defaultProject); // Input
        resetInputField();
    })

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.textContent = "Cancel";
    parent.appendChild(cancelButton);

    cancelButton.addEventListener('click', () => {
        resetInputField();
    });
} 

function resetInputField () {
    const content = document.getElementById('content');
    parent = document.getElementById('todo-button');

    while(parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
    parent.parentNode.removeChild(parent.parentNode.lastChild);
    content.appendChild(addToDoButton());
}

function readInput (inputField) { 
    var value = inputField.value;
    console.log(value);
    
    return value;
}

renderContent();
