'use strict';
var cl = console.log;
// cl('PlacesService.js ran');

const places = [
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
        id: _getNextId(),
        title: '',
        text: '',
        picture: '',
        addressLan: '',
        addressLg: '',
        type: '',
        date: ''
    }
}

function _getNextId() {
    var maxId = places.reduce((acc, place)=>{
        return (place.id > acc)? place.id : acc
    }, 0);
    return maxId + 1;
} 

function getPlaces(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => { resolve(places) }, 250)
    });
}

function getPlaceById(placeId){
    return new Promise((resolve, reject)=>{
        var foundPlace = places.find(place => place.id === placeId)
        if (foundPlace){
            resolve(foundPlace)
        }
        else reject();
    })
}
function addPlace(place) {
    return new Promise((resolve, reject) => {
        places.push(place);
    resolve();
    })
}

function savePlace(place) {
    return new Promise((resolve, reject)=>{
        cl('place',place);
            var placeIdx = places.findIndex(currPlace => currPlace.id === place.id);
            cl('noteIdx',placeIdx);
            places.splice(placeIdx, 1, place);
        resolve()
        // reject()
    });
}

//function read???//

function editPlace(place) {

}

function deletePlace(placeId) {
    return new Promise((resolve, reject)=>{
        var place = places.findIndex(place => place.id === placeId)
        places.splice(place, 1);
        resolve()
    });
}

function sortPlaces(place, key) {

}

export default {
    emptyPlace,
    addPlace,
    savePlace,
    editPlace,
    deletePlace,
    sortPlaces,
    getPlaces,
    getPlaceById,
    places
}