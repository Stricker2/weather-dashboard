// To-do: 
// define variables/elements
const myKey = '390b272136b9901e3c1b26d843f3138e'
var searchButton = document.getElementById('search-button')
var myURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + $(mySearch) + '&limit=5&appid=' + $(myKey)

// add functionality to search button
// arrange border box for searched city name, date, icon for weather conditions, temperature, humidity, wind speed and UV index
// add 5 day forecast with date, icon for weather conditions, temp, wind speed and humidity
// add search history under search 
