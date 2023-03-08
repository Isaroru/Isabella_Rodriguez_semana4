import "./Components/sectionComponent/sectionComponent.js";

const addButton = document.getElementById('button-addon2');
addButton.addEventListener('click', ()=> addTask());
const toDoList = document.getElementById('to-do-list');

function addTask(){
    console.log('task');
    const inputResponse = document.getElementById('task-input');
    const task = document.createElement('section-component');
    task.setAttribute('task', inputResponse.value);
    console.log(inputResponse.value);
    toDoList.append(task);
    inputResponse.value = '';
}