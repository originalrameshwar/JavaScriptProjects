const apiKey = "&appid=83c0761ccf586a94e0d1d35b4820e461";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");


async function checkWeather(city) {
    const response = await fetch(apiURL + "&q=" + city + apiKey);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        console.log(data);


        console.log(document.querySelector(".city").innerHTML);
        console.log(data.name);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
        // weather.classList.add('weather-enter');
        // setTimeout(() => {
        //     weather.classList.remove('weather-enter');
        // }, 0);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
    console.log(searchBox.value);


}) 
