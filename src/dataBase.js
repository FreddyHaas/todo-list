const Project = (name) => {
    const content = [];
    const storeToDo = (toDo) => {
        content.push(toDo);
    }
    const getTitle = (index) => {
        return content[index].title;    
    }
    const getLength = () => {
        return content.length;
    }

    return {name, content, getLength, getTitle, storeToDo};
}

function storeNewToDo (title) {
    const _newToDo = ToDo(title); 
    defaultProject.storeToDo(_newToDo);
    console.log(defaultProject.content);
}

const ToDo = (title) => {
    return {title}; // Description und due date hinzufügen
}

// Hard copied inputs
const defaultProject = Project('default');
storeNewToDo ('Test');

export { storeNewToDo, defaultProject };