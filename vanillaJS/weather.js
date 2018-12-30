const API_KEY = "968f3e05b9c30bb52ad59beb9bc1476b";
const COORDS = "coords"

function saveCoords(obj){
    localStorage.setItem(COORDS,JSON.stringify(obj));
}

function handleGeoSuccess(position){
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const coordsObj = {
        latitude: lati,
        longitude: longi
    }
    saveCoords(coordsObj);
}
function hadleGeoError(){
    console.log("Geo has an Error!")
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,hadleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askCoords();
    }else{
        //print
    }
}

function init(){
    loadCoords();
}

init();