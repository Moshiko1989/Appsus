'use strict';
var cl = console.log;
// cl('MKService.js ran');

var notes = [
    {
        id: 1,
        title: 'this is the one',
        text: 'lorem ipsum',
        data: '',
        isImportent: true,
        date: '27 Dec 1995 13:33:00',
        rimainder: '27 Dec 1995 14:33:00',
        color: 'red'
    },
    {
        id: 2,
        title: 'this is two',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '27 Nov 1995 13:30:00',
        rimainder: '',
        color: 'red'
    },
    {
        id: 3,
        title: '3ed ',
        text: 'lorem ipsum',
        data: '',
        isImportent: true,
        date: '28 Dec 1995 13:30:00',
        rimainder: '',
        color: 'red'
    },
    {
        id: 4,
        title: 'poam ',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '27 Dec 2016 13:30:00',
        rimainder: '',
        color: 'red'
    },
    {
        id: 5,
        title: 'clash',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '27 Dec 2017 13:30:00',
        rimainder: '29 Dec 2017 13:30:00',
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

function _getNextId() {
    var maxId = notes.reduce((acc, note)=>{
        return (note.id > acc)? note.id : acc
    }, 0);
    return maxId + 1;
} 

function getNotes(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => { resolve(notes) }, 500)
    });
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
    getNotes,
    notes
}