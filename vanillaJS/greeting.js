const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser"
    ,SHOWING_CL = "showing";

function paintGreeting(name){
    form.classList.remove(SHOWING_CL);
    greeting.classList.add(SHOWING_CL);
    greeting.innerHTML = `Hello ${name}`;
}
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askName(){
    form.classList.add(SHOWING_CL);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();