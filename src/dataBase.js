import {storeData, getData} from "./storage";

// Database
const dataBase = (() => {
    const toDos = [];

    const projects = []

    const storeProject = (name) => {
        projects.push(name);
    }

    const storeToDo = (name, project) => {
        const _newToDo = ToDo(name, project);
        toDos.push(_newToDo);
        storeData();
    }

    const updateDate = (value, index) => {
        toDos[index].date = value;
        storeData();
    }

    const updateTitle = (value, index) => {
        toDos[index].title = value;
        storeData();
    }

    const deleteToDo = (index) => {
        toDos.splice(index, 1);
        storeData();
    }

    return {toDos, projects, storeProject, storeToDo, updateDate, updateTitle, deleteToDo};
})();

// ToDo object
const ToDo = (name, projectName) => {
    const date = undefined;
    const project = projectName;
    const title = name;
    
    return {title, date, project};
}

// Initial example project
dataBase.storeToDo('Example');

let existingData = getData();
console.log(JSON.parse(existingData));

export {dataBase};