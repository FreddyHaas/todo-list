import dataBase from './dataBase.js'

function renderContent (header) {
    const content = document.getElementById ('content');
    const contentHeader = document.createElement('p');
    contentHeader.textContent = `${header}`;
    content.appendChild(contentHeader);
    content.appendChild(renderToDos(4, ["test1", "test2", "test3", "test4"])); // Inputs hard copied
}

function renderToDos (number, names) {
    const toDoContainer = document.createElement ('div');
    toDoContainer.classList.add('todo-container');

    for (let i = 0; i < number; i++) {
        const toDo = document.createElement('div');
        toDo.textContent = `${names[i]}`;
        toDo.classList.add('toDo');
        toDoContainer.appendChild(toDo);
    }
    return toDoContainer;
}

renderContent("All");
dataBase();