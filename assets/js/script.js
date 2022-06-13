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
var currentDate = document.getElementById('current-date')
var nextDate = document.getElementById('next-day')
var forecastContainer = document.getElementById('forecast-container')

// add functionality to search button
searchButton.addEventListener('click', function(){
    console.log('search button has been clicked')
    var text = $(mySearch).val();
    console.log(text);

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
                // currentDate.innerText =
                currentTemp.innerText = data.main.temp
                highTemp.innerText = " " + data.main.temp_max
                lowTemp.innerText = " " + data.main.temp_min
                var date = convertTime(data.dt);
                currentDate.innerText = date

                // using for collecting uvi and wind speed
                var cityLat = data.coord.lat
                var cityLon = data.coord.lon 
                var dataURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' + cityLon + '&exclude=hourly,minutely&appid=' + myKey + '&units=imperial'

                // fetch uvi and wind speed
                fetch(dataURL).then(function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                        uvIndex.innerText = " " + data.current.uvi 
                        windSpeed.innerText = " " + data.current.wind_speed

                        
                    })
                })

                // var forecastCards = []
                //         for(var i = 0; i < 5; i++) {
                //             var day = data.daily[i+1]
                //             console.log(day)
                //             var forecastCard = generateForecastCard(day)
                //             forecastCards.push(forecastCard)
                //         }

                //         for(var j = 0; j < 5; j++) {
                //             var card = forecastCards[j]
                //             forecastContainer.append(card)
                //         }

                //         var generateForecastCard = function() {
                //             nextDate.innerText = day.dt

                //         }
            });
        }
    })

});

var convertTime = function(timestamp) {
    let milliseconds = timestamp * 1000
    var dateGMT = new Date(milliseconds)
    var localDate = dateGMT.toLocaleString();
    var date = localDate.split(',')
    return date[0]
}

// var generateForecastCard = function() {
//     var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + myKey + '&units=imperial'
    
//     fetch(dataURL).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
        
//             var futureDate = convertTime(day.dt)
//             nextDay = futureDate
//         })
//     })
// }
// arrange border box for searched city name, date, icon for weather conditions, temperature, humidity, wind speed and UV index
// add 5 day forecast with date, icon for weather conditions, temp, wind speed and humidity
// add search history under search 
