const apikey ="af4dd04885b3320a5c4a5cb292b10059";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response=await fetch(apiUrl+ city + `&appid=${apikey}`);
    var data =await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weather_icon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src="images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src="images/drizzle.png";
    }



    document.querySelector(".weather").style.display="block";
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

