import {dataBase} from './dataBase.js'

function storeToDos () {    
    localStorage.setItem("toDos", JSON.stringify(dataBase.toDos));
};

function storeProjects () {
    localStorage.setItem("projects", JSON.stringify(dataBase.toDos));
}

function getToDos () {
    return JSON.parse(localStorage.getItem("toDos"));
}

function getProjects () {
    return JSON.parse(localStorage.getItem("projects"));
}

export {storeToDos, storeProjects, getToDos, getProjects};