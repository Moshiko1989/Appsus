'use strict';
var cl = console.log;
cl('PlacesService.js ran');

var places = [
    {
        id: 1,
        title: 'idos home',
        text: 'lorem ipsum',
        picture: '',
        addressLan: 213156,
        addressLg: 619325,
        type: 'home',
        date: '25 Nov 1995 13:33:00'
    },
    {
        id: 2,
        title: 'idos home 2.0',
        text: 'lorem ipsum',
        picture: '',
        addressLan: 213156,
        addressLg: 619325,
        type: 'home',
        date: '27 Nov 1995 13:33:00'
    },
    {
        id: 3,
        title: 'coading acd',
        text: 'lorem ipsum',
        picture: '',
        addressLan: 181660,
        addressLg: 666092,

        type: 'home',
        date: '27 Dec 2016 13:33:00'
    },
    {
        id: 4,
        title: 'yarkon/ayalon',
        text: 'lorem ipsum',
        picture: '',
        addressLan: 181411,
        addressLg: 667443,

        type: 'home',
        date: '27 Dec 1995 15:33:00'
    },
    {
        id: 5,
        title: 'makabia',
        text: 'lorem ipsum',
        picture: '',
        addressLan: 183815,
        addressLg: 662534,
        type: 'home',
        date: '27 Dec 1995 14:33:00'
    },

];

function emptyPlace() {
    return {
        title: '',
        text: ' ',
        picture: '',
        addressLan: '',
        addressLg: '',
        type: '',
        date: ''
    }
}

function addPlace() {


    return place;
}

//function read???//

function editPlace(place) {

}

function deletePlace(place) {

}

function sortPlaces(place, key) {

}

export default {
    emptyPlace,
    addPlace,
    editPlace,
    deletePlace,
    sortPlaces,
    places
}