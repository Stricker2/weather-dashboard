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
    var myURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + text + '&appid=' + myKey + '&units=imperial'
    
    fetch(myURL).then(function(response) {
        if(text == "") {
            return false
        } else {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                weatherIcon.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
                cityName.innerText = data.name
                currentTemp.innerText = data.main.temp
                highTemp.innerText = " " + data.main.temp_max
                lowTemp.innerText = " " + data.main.temp_min

            });
        }
    })
});

// arrange border box for searched city name, date, icon for weather conditions, temperature, humidity, wind speed and UV index
// add 5 day forecast with date, icon for weather conditions, temp, wind speed and humidity
// add search history under search 
