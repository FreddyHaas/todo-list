// Database
const dataBase = (() => {
    const content = [];

    const projects = []

    const storeProject = (name) => {
        projects.push(name);
    }

    const storeToDo = (name, project) => {
        const _newToDo = ToDo(name, project);
        content.push(_newToDo);
    }

    const _updateDate = (index, value) => {
        content[index].date = value;
    }

    const _updateTitle = (index, value) => {
        content[index].title = value;
    }

    const updateHandler = (value, inputType, index) => { // Raus schmeißen
        if (inputType === "date") {
            _updateDate(index, value);
        }
        if (inputType === "title") {
            _updateTitle(index, value);
        }
    }

    const deleteToDo = (index) => {
        content.splice(index, 1);
    }

    return {content, projects, storeProject, storeToDo, updateHandler, deleteToDo};
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

export {dataBase};