const body = document.querySelector("body");

const IMG_NUMBER = 3

function paintImage(no){
    const img = new Image();
    img.src = `images/${no+1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
}

function getRandom(){
    const photnum = Math.floor(Math.random()*IMG_NUMBER);
    return photnum;
}

function init(){
    const photoNumber = getRandom();
    paintImage(photoNumber);
}

init();