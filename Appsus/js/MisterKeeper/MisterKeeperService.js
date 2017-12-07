'use strict';
var cl = console.log;
cl('MKService.js ran');

var notes = [
    {
        id: 1,
        title: 'this is the one',
        text: 'lorem ipsum',
        data: '27 Dec 1995 13:33:00',
        isImportent: true,
        date: 11,
        rimainder: 12,
        color: 'red'
    },
    {
        id: 2,
        title: 'this is two',
        text: 'lorem ipsum',
        data: '27 Nov 1995 13:30:00',
        isImportent: false,
        date: 11,
        rimainder: 12,
        color: 'red'
    },
    {
        id: 3,
        title: '3ed ',
        text: 'lorem ipsum',
        data: '28 Dec 1995 13:30:00',
        isImportent: true,
        date: 11,
        rimainder: 12,
        color: 'red'
    },
    {
        id: 4,
        title: 'poam ',
        text: 'lorem ipsum',
        data: '27 Dec 2016 13:30:00',
        isImportent: false,
        date: 11,
        rimainder: 12,
        color: 'red'
    },
    {
        id: 5,
        title: 'clash',
        text: 'lorem ipsum',
        data: '27 Dec 2017 13:30:00',
        isImportent: false,
        date: 11,
        rimainder: 12,
        color: 'red'
    },
];

function emptyNote() {
    return {
        title: '',
        text: '',
        data: '',
        isImportent: false,
        date: '',
        rimainder: '',
        color: ''
    }
}

function addNote() {
   
    return note;
}

//function read???//

function editNote(note) {

}

function deleteNote(note) {

}

function sortNote(note, key) {

}

export default {
    emptyNote,
    addNote,
    editNote,
    deleteNote,
    sortNote,
    notes
}