const todForm = document.querySelector(".js-toDoForm");
const todInput = todForm.querySelector("input");
const todList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText = "X";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todList.appendChild(li);
    todObj = {
        text: text,
        id: newId
    };
    toDos.push(todObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todInput.value;
    paintToDo(currentValue);
    todInput.value = "";

}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parsedtoDos = JSON.parse(loadedtoDos);
        parsedtoDos.forEach(function(thing){
            paintToDo(thing.text);
        });
    }
}
// 이렇게 따로 빼서 써도 되고 안에 바로 넣어도 되고
// function something(thing){
//     console.log(thing.text);
// }
function init(){
    loadToDos();
    todForm.addEventListener("submit",handleSubmit);
}

init();