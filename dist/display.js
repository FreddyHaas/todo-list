/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dataBase.js":
/*!*************************!*\
  !*** ./src/dataBase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataBase = (() => {\n    const content = [];\n    \n    const storeToDo = (name) => {\n        const _newToDo = ToDo(name);\n        content.push(_newToDo);\n    }\n\n    const getLength = () => {\n        return content.length;\n    }\n\n    const getTitle = (index) => {\n        return content[index].title;    \n    }\n\n    const getDate = (index) => {\n        return content[index].date;\n    }\n\n    const _updateDate = (index, value) => {\n        content[index].date = value;\n    }\n\n    const _updateTitle = (index, value) => {\n        content[index].title = value;\n    }\n\n    const updateHandler = (value, inputType, index) => {\n        if (inputType === \"date\") {\n            _updateDate(index, value);\n        }\n        if (inputType === \"title\") {\n            _updateTitle(index, value);\n        }\n    }\n\n    const deleteToDo = (index) => {\n        content.splice(index, 1);\n    }\n\n    return {content, getLength, getTitle, getDate, updateHandler, storeToDo, deleteToDo};\n})();\n\nconst ToDo = (name) => {\n    const date = undefined;\n    const project = undefined;\n    const title = name;\n    \n    return {title, date, project};\n}\n\n// Initial example project\ndataBase.storeToDo('Example');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataBase);\n\n//# sourceURL=webpack://todo-list/./src/dataBase.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBase.js */ \"./src/dataBase.js\");\n\n\nfunction renderContent () {\n    const content = document.getElementById ('content');\n    content.appendChild(createHeader(\"All\")); // Input   \n    content.appendChild(createToDoListContainer());\n    createToDoList(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // Input\n    content.appendChild(addToDoButton());\n    \n    return content;\n}\n\n// 1. Header\nfunction createHeader (name) {\n    const contentHeader = document.createElement('p');\n    contentHeader.textContent = `${name}`;\n    \n    return contentHeader;\n}\n\n// 2. ToDo List\nfunction createToDoListContainer () {\n    const toDoListContainer = document.createElement('div');\n    toDoListContainer.classList.add('todo-list'); \n    \n    return toDoListContainer\n}\n\nfunction createToDoList (project) {  \n    const toDoListContainer = document.querySelector('.todo-list');\n    \n    while (toDoListContainer.firstChild) {\n        toDoListContainer.removeChild(toDoListContainer.lastChild);\n        }\n    \n    for (let i = 0; i < project.getLength(); i++) {\n        const toDo = createToDo(project.getTitle(i), project.getDate(i), i);\n        toDoListContainer.appendChild(toDo);\n    }\n}\n\n// 2 Display of inidividual ToDo\nfunction createToDo (name, date, index) {\n    const toDo = document.createElement('div');\n    toDo.classList.add('todo');\n\n    // Display title\n    const toDoTitle = document.createElement('button');\n    toDoTitle.classList.add('todo-title');\n    toDoTitle.textContent = `${name}`;\n    toDoTitle.addEventListener ('click', () => {\n        toDo.removeChild(toDoTitle);\n        toDo.insertBefore(titleInputField(index), toDoDate);\n    })\n    toDo.appendChild(toDoTitle);\n\n    // Display date\n    const toDoDate = document.createElement('button');\n    toDoDate.classList.add('todo-date');\n    if (date === undefined) {\n        toDoDate.textContent = `No date`;\n    }\n    else {\n        toDoDate.textContent = `${date}`;\n    }\n    toDoDate.addEventListener ('click', () => {\n        toDo.removeChild(toDoDate);\n        toDo.insertBefore(dateInputField(index), completionButton);\n    });\n    toDo.appendChild(toDoDate);\n\n    // Display checkbox\n    const completionButton = document.createElement('input');\n    completionButton.setAttribute(\"type\", \"checkbox\");\n    completionButton.classList.add('delete-button');\n    completionButton.addEventListener ('input', () => {\n        setTimeout(() => { \n        _dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteToDo(index);\n        console.log(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content);\n        createToDoList(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])}, 100);\n    })\n    toDo.appendChild(completionButton);\n\n    return toDo;\n}\n\n// 2.1 Display input fields for updating date and title\n\n// Update date\nfunction dateInputField (index) {\n    const input = document.createElement('INPUT');\n    input.setAttribute(\"type\",\"date\");\n    input.setAttribute(\"id\", \"todo-date\");\n\n    input.addEventListener('input', () => {\n        _dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateHandler(input.value, \"date\", index);\n        console.log(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content);\n        createToDoList(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    });\n    \n    return input;\n}\n\n// Update title\nfunction titleInputField (index) {\n    const input = document.createElement('INPUT');\n    input.setAttribute(\"type\", \"text\");\n    input.setAttribute(\"id\", \"title-update\");\n\n    input.addEventListener('change', () => {\n        _dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateHandler(input.value, \"title\", index);\n        console.log(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content);\n        createToDoList(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    });\n\n    return input;\n}\n\n// 3. Add ToDo \n\n//Button\nfunction addToDoButton () {\n    const inputButtons = document.createElement('div');\n    inputButtons.setAttribute('id','todo-button');\n\n    const addToDoButton = document.createElement('div');\n    addToDoButton.classList.add('todo');\n    addToDoButton.textContent = \"+ Add ToDo\";\n    addToDoButton.setAttribute('id', 'add-todo');\n    inputButtons.appendChild(addToDoButton);\n\n    addToDoButton.addEventListener('click', () => {\n        inputButtons.removeChild(inputButtons.lastChild);\n        toDoInputField();\n    });\n\n    return inputButtons;\n}\n\n// Input form\nfunction toDoInputField () {\n    parent = document.getElementById('todo-button');\n\n    // Input field\n    const input = document.createElement('INPUT');\n    input.setAttribute(\"type\",\"text\");\n    input.setAttribute(\"id\", \"todo-input\");\n    parent.appendChild(input);\n\n    // Add button\n    const addButton = document.createElement('button');\n    addButton.setAttribute(\"id\",\"add-button\");\n    addButton.textContent = \"Add\";\n    parent.appendChild(addButton);\n\n    addButton.addEventListener('click', () => {\n        _dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storeToDo(input.value);\n        console.log(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content);\n        createToDoList(_dataBase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        resetInputField();\n    })\n\n    // Cancel button\n    const cancelButton = document.createElement('button');\n    cancelButton.setAttribute(\"id\", \"cancel-button\");\n    cancelButton.textContent = \"Cancel\";\n    parent.appendChild(cancelButton);\n\n    cancelButton.addEventListener('click', () => {\n        resetInputField();\n    });\n} \n\nfunction resetInputField () {\n    const content = document.getElementById('content');\n    parent = document.getElementById('todo-button');\n\n    while(parent.firstChild) {\n        parent.removeChild(parent.lastChild);\n    }\n    parent.parentNode.removeChild(parent.parentNode.lastChild);\n    content.appendChild(addToDoButton());\n}\n\nrenderContent();\n\n\n//# sourceURL=webpack://todo-list/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/display.js");
/******/ 	
/******/ })()
;