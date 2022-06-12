// To-do: 
// define variables/elements
const myKey = '390b272136b9901e3c1b26d843f3138e'
var searchButton = document.getElementById('search-button')
var mySearch = document.getElementById('city-search')
var presentWeather = document.getElementById('present-weather')
var cityName = document.getElementById('city-name')
var currentTemp = document.getElementById('current-temp')
var highTemp = document.getElementById('high-temp')
var lowTemp = document.getElementById('low-temp')
var weatherIcon = document.getElementById('weather-icon')
var uvIndex = document.getElementById('uv-index')
var windSpeed = document.getElementById('wind-speed')



// add functionality to search button
searchButton.addEventListener('click', function(){
    console.log('search button has been clicked')
    var text = $(mySearch).val();
    console.log(text);

    // var newSearch = $(mySearch).val(text);

    // $(newSearch).trigger('focus')

    // $(newSearch).on('blur', function() {
    //     var newText = $(newSearch).val();
    //     console.log(newText);
    // })
    var myWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + text + '&appid=' + myKey + '&units=imperial'
    
    fetch(myWeatherURL).then(function(response) {
        if(text == "") {
            return false
        } else {
            response.json().then(function(data) {
                console.log(data);
                // fetch city and temps
                weatherIcon.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
                cityName.innerText = data.name
                currentTemp.innerText = data.main.temp
                highTemp.innerText = " " + data.main.temp_max
                lowTemp.innerText = " " + data.main.temp_min

                // using for collecting uvi and wind speed
                let cityLat = data.coord.lat
                let cityLon = data.coord.lon 
                let dataURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + myKey + '&units=imperial'

                // fetch uvi and wind speed
                fetch(dataURL).then(function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                        uvIndex.innerText = " " + data.current.uvi 
                        windSpeed.innerText = " " + data.current.wind_speed

                    })
                })
                
            });
        }
    })

});
// arrange border box for searched city name, date, icon for weather conditions, temperature, humidity, wind speed and UV index
// add 5 day forecast with date, icon for weather conditions, temp, wind speed and humidity
// add search history under search 
