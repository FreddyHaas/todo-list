import {dataBase}  from './dataBase.js';
import {format, isToday, isThisWeek} from'date-fns';


// Rendering content
var section = "All";

const initializeContent = (() => {
    renderContent ();

    const all = document.getElementById('all');
    all.addEventListener('click', () => {
        section = "All";
        renderContent ();
    })

    const today = document.getElementById('today');
    today.addEventListener('click', () => {
        section = "Today";
        renderContent ();
    })

    const thisWeek = document.getElementById('week');
    thisWeek.addEventListener('click', () => {
        section = "This week";
        renderContent ();
    })
    
    const addProject = document.getElementById('add-project');
    addProject.addEventListener('click', () => {
        projectInputField();
    })

})();

function renderContent () {
    const content = document.getElementById ('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    content.appendChild(createHeader());   
    content.appendChild(createToDoList());
    content.appendChild(addToDoButton());
    
    return content;
}

// 1. Header
function createHeader () {
    const contentHeader = document.createElement('p');
    contentHeader.textContent = `${section}`;
    
    return contentHeader;
}

// 2. ToDo List

function createToDoList () {  
    const toDoListContainer = document.createElement('div');
    toDoListContainer.classList.add('todo-list');     

    while (toDoListContainer.firstChild) {
        toDoListContainer.removeChild(toDoListContainer.lastChild);
        }
    
    if (section === "All") {
        for (let i = 0; i < dataBase.toDos.length; i++) {
            const toDo = createToDo(dataBase.toDos[i].title, dataBase.toDos[i].date, i);
            toDoListContainer.appendChild(toDo);
        }
    }

    else if (section === "Today") {
        for (let i = 0; i < dataBase.toDos.length; i++) {
            if (isToday(Date.parse(dataBase.toDos[i].date))){
                const toDo = createToDo(dataBase.toDos[i].title, dataBase.toDos[i].date, i);
                toDoListContainer.appendChild(toDo);
            }   
        }
    }

    else if (section === "This week") {
        for (let i = 0; i < dataBase.toDos.length; i++) {
            if (isThisWeek(Date.parse(dataBase.toDos[i].date))){
                const toDo = createToDo(dataBase.toDos[i].title, dataBase.toDos[i].date, i);
                toDoListContainer.appendChild(toDo);
            }   
        } 
    }

    else {
        for (let i = 0; i < dataBase.toDos.length; i++) {
            if (dataBase.toDos[i].project === section){
                const toDo = createToDo(dataBase.toDos[i].title, dataBase.toDos[i].date, i);
                toDoListContainer.appendChild(toDo);
            }   
        }
    }
return toDoListContainer;
}

// 2.1 Display of inidividual ToDo
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
        toDoDate.textContent = `${format(Date.parse(date), 'dd/MM/yyyy')}`;
    }
    toDoDate.addEventListener ('click', () => {
        toDo.removeChild(toDoDate);
        toDo.insertBefore(dateInputField(index), completionButton);
    });
    toDo.appendChild(toDoDate);

    // Display checkbox
    const completionButton = document.createElement('input');
    completionButton.setAttribute("type", "checkbox");
    completionButton.classList.add('checkbox');
    completionButton.addEventListener ('input', () => {
        setTimeout(() => { 
        dataBase.deleteToDo(index);
        renderContent()}, 100);
    })
    toDo.appendChild(completionButton);

    return toDo;
}

// 2.2 Display input fields for updating date and title

// Update date
function dateInputField (index) {
    const input = document.createElement('INPUT');
    input.setAttribute("type","date");
    input.setAttribute("id", "todo-date");

    input.addEventListener('input', () => {
        console.log(input.value);
        dataBase.updateDate(input.value, index);
        renderContent();
    });
    
    return input;
}

// Update title
function titleInputField (index) {
    const input = document.createElement('INPUT');
    input.setAttribute("type", "text");
    input.setAttribute("id", "title-update");

    input.addEventListener('change', () => {
        dataBase.updateTitle(input.value, index);
        renderContent();
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
        dataBase.storeToDo(input.value, section);
        renderContent();
    })

    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.textContent = "Cancel";
    parent.appendChild(cancelButton);

    cancelButton.addEventListener('click', () => {
        renderContent();
    });
} 

// 4. Add project button

//Button
function addProjectButton () {
    const projectButtons = document.querySelector('.project-button');

    const addProjectButton = document.createElement('div');
    addProjectButton.setAttribute('id', 'add-project');
    addProjectButton.textContent = "+ Add Project";
    projectButtons.appendChild(addProjectButton);

    addProjectButton.addEventListener('click', () => {
        projectInputField();
    });
}

function projectInputField () {
    resetProjectInputField();
    const parent = document.querySelector('.project-button');

    // Input field
    const input = document.createElement('INPUT');
    input.setAttribute("type","text");
    input.setAttribute("id", "project-input");
    parent.appendChild(input);

    // Add button
    const addButton = document.createElement('button');
    addButton.setAttribute("id","add-button");
    addButton.textContent = "Add";
    parent.appendChild(addButton);

    addButton.addEventListener('click', () => {
        dataBase.storeProject(input.value);
        displayProjectList();
        resetProjectInputField();
        addProjectButton();
        section = input.value;
        renderContent();
    })

    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.textContent = "Cancel";
    parent.appendChild(cancelButton);

    cancelButton.addEventListener('click', () => {
        resetProjectInputField();
        addProjectButton();
    });
}

function resetProjectInputField () {
    const parent = document.querySelector('.project-button');
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

// 5. Display project list 

function displayProjectList() {
    const ul = document.getElementById('project-list');

    while(ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }

    for (let i = 0; i < dataBase.projects.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${dataBase.projects[i]}`;
        li.addEventListener ('click', () => {
            section = dataBase.projects[i];
            renderContent();
        })
        ul.appendChild(li);
    }
}

export default initializeContent;

