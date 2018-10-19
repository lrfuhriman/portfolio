function getLocation(){
    var city =  document.getElementById("city").value;
    var state = document.getElementById("state").value;
    getWeather(city, state);
    // setLocalStorage(city, state);
}
function getWeather(city, state) {

    var weatherUrl = "http://api.wunderground.com/api/aed60802d440cbea/conditions/q/" + state + "/" + city + ".json";
    console.log(weatherUrl);
    var weather = new XMLHttpRequest();
    weather.open("GET", weatherUrl, false);
    weather.send(null);
    var r = JSON.parse(weather.response);
    var location =  r.current_observation.display_location.full + "<br>";
    var temp =  r.current_observation.temperature_string + "<br>";
    var wind =  r.current_observation.wind_string + "<br>";

    var locationEl = document.getElementById("location");
    locationEl.innerHTML = location;
    locationEl.style.backgroundColor = "white";

    var tempEl = document.getElementById("temp");
        tempEl.innerHTML = temp;
        tempEl.style.backgroundColor = "white";

    var windEl = document.getElementById("wind");
    windEl.innerHTML = wind;
    windEl.style.backgroundColor = "white";

}

function setLocation(){
    var city =  document.getElementById("city").value;
    var state = document.getElementById("state").value;
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
    location.reload();
}

function getSetLocation() {
var localState = document.getElementById('localState');
var localCity = document.getElementById('localCity');

var storedState = localStorage.getItem("state");
var storedCity = localStorage.getItem("city");

localState.innerHTML = storedState;
localCity.innerHTML = storedCity;

if(storedCity && storedState){
var h2 = document.getElementById('topHeading');
h2.innerHTML = "Your current Location is set to: " + storedCity+ ", " + storedState;
    getWeather(storedCity, storedState);
}
}

function clearLocation(){
    localStorage.clear();
    location.reload();
}
