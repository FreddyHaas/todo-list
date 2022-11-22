import {storeToDos, storeProjects, getToDos, getProjects} from "./storage";

// ToDo object
const ToDo = (name, projectName) => {
    const date = undefined;
    const project = projectName;
    const title = name;
    
    return {title, date, project};
}

const example = ToDo("Example", "All");

// Database
const dataBase = (() => {
    const toDos = getToDos() || [example];
    const projects = getProjects() || ["Example"];

    const storeProject = (name) => {
        projects.push(name);
        storeProjects();
    }

    const storeToDo = (name, project) => {
        const _newToDo = ToDo(name, project);
        toDos.push(_newToDo);
       storeToDos();
    }

    const updateDate = (value, index) => {
        toDos[index].date = value;
        storeToDos();
    }

    const updateTitle = (value, index) => {
        toDos[index].title = value;
        storeToDos();
    }

    const deleteToDo = (index) => {
        toDos.splice(index, 1);
        storeToDos();
    }

    return {toDos, projects, storeProject, storeToDo, updateDate, updateTitle, deleteToDo};
})();

// Initial example project

export {dataBase};