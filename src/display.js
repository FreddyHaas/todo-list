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

// 2 Display of inidividual ToDo
function createToDo (name, date, index) {
    const toDo = document.createElement('div');
    toDo.classList.add('todo');

    // Display title
    const toDoTitle = document.createElement('button');
    toDoTitle.classList.add('todo-title');
    toDoTitle.textContent = `${name}`;
    toDoTitle.addEventListener ('click', () => {
        toDo.removeChild(toDoTitle);
        toDo.insertBefore(titleInputField(index), toDoDate);
    })
    toDo.appendChild(toDoTitle);

    // Display date
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
        toDo.insertBefore(dateInputField(index), completionButton);
    });
    toDo.appendChild(toDoDate);

    // Display checkbox
    const completionButton = document.createElement('input');
    completionButton.setAttribute("type", "checkbox");
    completionButton.classList.add('delete-button');
    completionButton.addEventListener ('input', () => {
        setTimeout(() => { 
        dataBase.deleteToDo(index);
        console.log(dataBase.content);
        createToDoList(dataBase)}, 100);
    })
    toDo.appendChild(completionButton);

    return toDo;
}

// 2.1 Display input fields for updating date and title

// Update date
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

// Update title
function titleInputField (index) {
    const input = document.createElement('INPUT');
    input.setAttribute("type", "text");
    input.setAttribute("id", "title-update");

    input.addEventListener('change', () => {
        dataBase.updateHandler(input.value, "title", index);
        console.log(dataBase.content);
        createToDoList(dataBase);
    });

    return input;
}

// 3. Add ToDo 

//Button
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

// Input form
function toDoInputField () {
    parent = document.getElementById('todo-button');

    // Input field
    const input = document.createElement('INPUT');
    input.setAttribute("type","text");
    input.setAttribute("id", "todo-input");
    parent.appendChild(input);

    // Add button
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

    // Cancel button
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
