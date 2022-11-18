const dataBase = (() => {
    const content = [];
    
    const storeToDo = (name) => {
        const _newToDo = ToDo(name);
        content.push(_newToDo);
    }

    const getLength = () => {
        return content.length;
    }

    const getTitle = (index) => {
        return content[index].title;    
    }

    const getDate = (index) => {
        return content[index].date;
    }

    const _updateDate = (index, value) => {
        content[index].date = value;
    }

    const _updateTitle = (index, value) => {
        content[index].title = value;
    }

    const updateHandler = (value, inputType, index) => {
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

    return {content, getLength, getTitle, getDate, updateHandler, storeToDo, deleteToDo};
})();

const ToDo = (name) => {
    const date = undefined;
    const project = undefined;
    const title = name;
    
    return {title, date, project};
}

// Initial example project
dataBase.storeToDo('Example');

export default dataBase;