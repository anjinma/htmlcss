const weather = document.querySelector(".js-weather");

const API_KEY = "968f3e05b9c30bb52ad59beb9bc1476b";
const COORDS = "coords"

function getWeather(lati, longi){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const name = json.name;
        weather.innerHTML = `${temp} @${name}`;
    });
}

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
    getWeather(lati,longi);
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
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();