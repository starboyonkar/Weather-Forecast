const apiKey = "df0b10379a8c8cebd744b951dd51fc83";

async function getWeather(){

const city = document.getElementById("cityInput").value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);

const data = await response.json();

document.getElementById("cityName").innerText = data.name + ", " + data.sys.country;

document.getElementById("temp").innerText = data.main.temp + " °C";

document.getElementById("humidity").innerText = data.main.humidity + " %";

document.getElementById("windSpeed").innerText = data.wind.speed + " m/s";

document.getElementById("windDir").innerText = data.wind.deg + "°";

document.getElementById("pressure").innerText = data.main.pressure + " hPa";

if(data.rain){
document.getElementById("precipitation").innerText = data.rain["1h"] + " mm";
}
else{
document.getElementById("precipitation").innerText = "0 mm";
}

}
catch(error){

alert("City not found");

}

}