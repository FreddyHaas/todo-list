import dataBase from './dataBase.js'

function renderContent () {
    const content = document.getElementById ('content');
    content.appendChild(createHeader("All")); // Input
    content.appendChild(createToDoList(4, ["test1", "test2", "test3", "test4"])); // Input
    content.appendChild(inputButtons());
    return content;
}

function createHeader (name) {
    const contentHeader = document.createElement('p');
    contentHeader.textContent = `${name}`;

    return contentHeader;
}

function createToDoList (number, names) {
    const toDoList = document.createElement('div');
    toDoList.classList.add('todo-list');
    for (let i = 0; i < number; i++) {
        const toDo = document.createElement('div');
        toDo.textContent = `${names[i]}`;
        toDo.classList.add('todo');
        toDoList.appendChild(toDo);
    }
    return toDoList;
}

function inputButtons () {
    const inputButtons = document.createElement('div');
    inputButtons.setAttribute('id','todo-button');

    const addButton = document.createElement('div');
    addButton.classList.add('todo');
    addButton.textContent = "+ Add ToDo";
    addButton.setAttribute('id', 'add-task');
    inputButtons.appendChild(addButton);

    addButton.addEventListener('click', () => {
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

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.textContent = "Cancel";
    parent.appendChild(cancelButton);
} 

renderContent();
dataBase();