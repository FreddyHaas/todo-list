import dataBase from './dataBase.js';

function renderContent () {
    const content = document.getElementById ('content');
    content.appendChild(createHeader("All")); // Input   
    content.appendChild(createToDoListContainer());
    createToDoList(dataBase); // Input
    content.appendChild(addToDoButton());
    
    return content;
}

// 1. Header
function createHeader (name) {
    const contentHeader = document.createElement('p');
    contentHeader.textContent = `${name}`;
    
    return contentHeader;
}

// 2. ToDo List
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
        const toDo = createToDo(project.getTitle(i), project.getDate(i), i);
        toDoListContainer.appendChild(toDo);
    }
}

function createToDo (name, date, index) {
    const toDo = document.createElement('div');
    toDo.classList.add('todo');

    // Title
    const toDoTitle = document.createElement('button');
    toDoTitle.classList.add('todo-title');
    toDoTitle.textContent = `${name}`;
    toDo.appendChild(toDoTitle);

    // Date
    const toDoDate = document.createElement('button');
    toDoDate.classList.add('todo-date');
    if (date === undefined) {
        toDoDate.textContent = `No date`;
    }
    else {
        toDoDate.textContent = `${date}`;
    }
    toDoDate.addEventListener ('click', () => {
        toDo.removeChild(toDoDate);
        toDo.appendChild(dateInputField(index));
    });
    toDo.appendChild(toDoDate);

    return toDo;
}

// 2.1 Update existing ToDo

// Date
function dateInputField (index) {
    const input = document.createElement('INPUT');
    input.setAttribute("type","date");
    input.setAttribute("id", "todo-date");

    input.addEventListener('input', () => {
        dataBase.updateHandler(input.value, "date", index);
        console.log(dataBase.content);
        createToDoList(dataBase);
    });
    
    return input;
}

// Title

// 3. Add ToDo 

function addToDoButton () {
    const inputButtons = document.createElement('div');
    inputButtons.setAttribute('id','todo-button');

    const addToDoButton = document.createElement('div');
    addToDoButton.classList.add('todo');
    addToDoButton.textContent = "+ Add ToDo";
    addToDoButton.setAttribute('id', 'add-todo');
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
        dataBase.storeToDo(input.value);
        console.log(dataBase.content);
        createToDoList(dataBase);
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

renderContent();
