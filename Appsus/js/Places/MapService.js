'use strict';
var cl = console.log;
// cl('Travel Tip: ');

const gPosition = {};
var gMap;

function getDevicePosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(keepData, handleLocationError);
    // cl('keep data', keepData)
}

function keepData(position) {
    // cl('parameter time is: ', position.timestamp)
    gPosition.lat = position.coords.latitude;
    gPosition.lng = position.coords.longitude;
    gPosition.date = Date(position.timestamp);
    // cl('gpos.date is: ', gPosition.date)
    renderDisplay(gPosition.lat, gPosition.lng, gPosition.date)
}

function handleLocationError(error) {
    // var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function renderDisplay(lat, lng, time) {
    renderMap(lat, lng);
    renderAdress(lat, lng);
    renderWeather(lat, lng);
}

function renderMap(lat, lng) {
    // cl('lt lng ', lat, lng);

    // cl(document.getElementById('map'))

    gMap = new google.maps.Map(

        //Error!!!!

        document.getElementById('map'), {
            center: {
                lat: lat,
                lng: lng,
            },
            zoom: 20,
        });
        
        var marker = new google.maps.Marker({
            position: { lat: lat,
                        lng: lng
                    },
            map: gMap,
            title: 'Ahlan'
        });
        cl('gmap is: ', gMap)
        var marker = new google.maps.Marker({
            position: { lat: lat + 0.0020,
                        lng: lng + 0.0030
                    },
            map: gMap,
            title: 'Ahlan'
        });
}

function renderAdress(lat, lng) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBOVWShOuDggnEiRko3L7x_47TsJFyKTbw`)
        .then(function (res) {
            res.json().then(res => {
                gPosition.address = res.results[0].formatted_address;
                // document.getElementById('adress').innerText = ' ' + gPosition.address + ' ';
                // cl('res.results[0].formatted_address is: ', gPosition.address);
            })
        });
}

function updateLocation(value) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyBOVWShOuDggnEiRko3L7x_47TsJFyKTbw`)
        .then(res => {
            res.json().then(res => {
                gPosition.lat = res.results[0].geometry.location.lat;
                gPosition.lng = res.results[0].geometry.location.lng;
                // gSearchPos.timestamp = Date.now()
                // showLocation(gSearchPos)
                // var image = '../../img/pin.png';
                // renderDisplay(gPosition.lat, gPosition.lng, gPosition.date)
                gMap.setCenter({lat: gPosition.lat, lng: gPosition.lng})
                var marker = new google.maps.Marker({
                    position: { lat: gPosition.lat,
                                lng: gPosition.lng
                            },
                    map: gMap,
                    title: 'Ahlan'
                    // icon: image
                });

                renderDisplay(gPosition.lat, gPosition.lng, gPosition.date)
            })
        })

}

function renderWeather(lat, lng) {
    //key is 90538724b3a70e18e0e6e9cee18e8dac
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=90538724b3a70e18e0e6e9cee18e8dac`)
        .then(res => {
            res.json().then(res => {
                // document.getElementById('weather').innerHTML = res.weather[0].description + '<br>' + res.main.temp + ' celsius';
                // cl('weather res is: ', res);
            })
        })
}


export default {
    getDevicePosition,
    updateLocation
}