const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dates = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"]

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let date = dates[d.getDate()-1];
// let year = d.getFullYear();

document.getElementById("year").innerHTML =`${day} ,`;
document.getElementById("month").innerHTML =month;
document.getElementById("date").innerHTML =date;
console.log(month+year+date);
function search(){
    place=placeName.value
    console.log(place);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metrica`)
    .then(result=>(result.json()))
    .then(data=>displaydata(data))
    .catch(error=>{
      alert("Faild to display weather data");
    })

}





// function  findWeather() {
//     PlaceName =inputbox.value
//     console.log(PlaceName);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${PlaceName}&appid=f58045e3074d5651f958b6875f095c54`)
//     .then(data=>data.json()).then(data=>displayData(data))
//     if(PlaceName==""){
//       alert("Input feild is Empty :{")
//     }
//   }
  function currentLocation() {
  
    successCallback = (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=f58045e3074d5651f958b6875f095c54`).then(data=>data.json()).then(data=>displayData(data))
        .then(result=>(result.json()))
        .then(data=>displaydata(data))
        
    
    
    };
  
    
    navigator.geolocation.getCurrentPosition(successCallback);
  }
  
function displaydata(data){
  place=data.name
  countryName=data.sys.country
  currentTemp=Math.round(data.main.temp-272.15)
  minTemp=Math.round(data.main.temp_min-272)
  maxTemp=Math.round(data.main.temp_max-272)
  feelsLike=Math.round(data.main.feels_like-272.15)
  wind=data.wind.speed
  pressure=data.main.pressure
  humidity=data.main.humidity
  type=data.weather[0].main
  console.log(type);
  
  document.getElementById("temp").innerHTML=`${currentTemp}°C`
  document.getElementById("type").innerHTML=type;
  document.getElementById("min-temp").innerHTML=`${minTemp}°C`
  document.getElementById("max-temp").innerHTML=`${maxTemp}°C`
  document.getElementById("location").innerHTML=`${place},`
  document.getElementById("country").innerHTML=`${countryName}`
  document.getElementById("feels").innerHTML=`${feelsLike} °C`

  document.getElementById("wind").innerHTML=`${wind} km/hr`
  document.getElementById("humidity").innerHTML=`${humidity} g.m^-3`


}


//   function displayData(data){
//     place=data.name
//     sys = data.sys.country
//     temperature =Math.round(data.main.temp-272.15)
//     description=data.weather[0].description
//     humidity=data.main.humidity
//     mintemp=Math.round(data.main.temp_min-272)
//     maxtemp=Math.round(data.main.temp_max-272)
//     pressure=data.main.pressure
//     feeltemp=Math.round(data.main.feels_like-272.15)
//     windspeed=Math.round(data.wind.speed*3.5)
//     logo=data.weather[0].main