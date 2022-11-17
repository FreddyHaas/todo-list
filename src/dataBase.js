export default function dataBase () {
    const ToDo = (title, description, dueDate) => {
        return {title, description, dueDate};
    }
    const Project = (name) => {
        const content = [];
        const storeToDo = (toDo) => {
            content.push(toDo);
        }
        return {name, content, storeToDo};
    }
    // Test
    const test = ToDo ("Test", "Description test", "endOfSeptember");
    const defaultProject = Project("Default"); 
    defaultProject.storeToDo(test);
    console.log(defaultProject.content);
}


