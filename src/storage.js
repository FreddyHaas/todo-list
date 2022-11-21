import {dataBase} from './dataBase.js'

function storeData () {    
    window.localStorage.setItem("data", JSON.stringify(dataBase.toDos));
};

function getData () {
    return window.localStorage.getItem("data");
}

export {storeData, getData};