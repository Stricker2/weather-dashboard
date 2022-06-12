// To-do: 
// define variables/elements
const myKey = '390b272136b9901e3c1b26d843f3138e'
var searchButton = document.getElementById('search-button')
var mySearch = document.getElementById('city-search')

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
    var myURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + text + '&appid=' + myKey
    
    fetch(myURL).then(function(response) {
        if(text == "") {
            return false
        } else {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        }
    })
});

// arrange border box for searched city name, date, icon for weather conditions, temperature, humidity, wind speed and UV index
// add 5 day forecast with date, icon for weather conditions, temp, wind speed and humidity
// add search history under search 
