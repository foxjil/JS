"use strict";

const addingForm = document.forms.addTask;
let idCounter = 0;

// 
addingForm.elements.taskName.addEventListener('input', function deadLineValidate() {
    if (this.validity.valueMissing) setError(this, 'wrongTaskName');
    else setSuccess(this);
});

addingForm.elements.taskDeadline.addEventListener('input', function deadLineValidate() {
    let now = new Date();
    let inputDate = new Date(document.getElementById('taskDeadline').value);
    if (now >= inputDate) setError(this, 'dateInPast');
    else setSuccess(this);
});

function setSuccess(elem){
    elem.nextElementSibling.className = 'message';
    elem.setCustomValidity("");
}

function setError(elem, key){
    let messages = {
        dateInPast: 'Дата не может быть в прошлом',
        wrongTaskName: `Значение должно быть в диапазоне от ${elem.minLength} до ${elem.maxLength} символов`,
    };
    elem.nextElementSibling.innerText = messages[key];
    elem.nextElementSibling.className = 'message error active';
    elem.setCustomValidity(key);
}

// 
addingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let taskName = document.getElementById('taskName');
    let taskDesc = document.getElementById('taskDescription');
    let taskDeadline = document.getElementById('taskDeadline');
    let taskParticipants = document.querySelectorAll('.partInput');
    if (taskName.validity.valid && taskDeadline.validity.valid) {
        let participants = [];
        taskParticipants.forEach((participant) =>
            {participants.push(participant.value)});
        putToStorage({
            title: taskName.value,
            description: taskDesc.value,
            date: formatDate(taskDeadline.value),
            id: ++idCounter,
            participants
        });
        document.getElementById('successMessage').innerText = 'Задача успешно добавлена';
        document.getElementById('successMessage').className = 'message active';
        this.reset();
        

        setTimeout(() => {document.getElementById('successMessage').className = 'message'}, 3000);
    }
});

// 
function putToStorage(task) {
    let tasksFromStorage = localStorage.getItem("tasks");
    if (!(tasksFromStorage === null)) {
        tasksFromStorage = JSON.parse(tasksFromStorage);
        tasksFromStorage.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    } else {
        localStorage.setItem("tasks", JSON.stringify(Array.of(task)));
    }
}


function formatDate(date) {
    return date.slice(8,10) + '.' + date.slice(5,7) + '.' + date.slice(0,4) + ' ' + date.slice(11,16)
}