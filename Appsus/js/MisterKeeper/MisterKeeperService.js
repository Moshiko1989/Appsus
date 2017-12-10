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
        id:_getNextId(),
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

function getNoteById(noteId){
    return new Promise((resolve, reject)=>{
        var foundNote = notes.find(note => note.id === noteId)
        if (foundNote){ 
            resolve(foundNote)
        }
        else reject();
    })
}

function addNote(note) {
    return new Promise((resolve, reject) => {
        notes.push(note);
    resolve();
    })
}
function saveNote(note) {
    return new Promise((resolve, reject)=>{
        cl('note',note);
            var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
            cl('noteIdx',noteIdx);
            notes.splice(noteIdx, 1, note);
        resolve()
        // reject()
    });
}

//function read???//

function editNote(note) {

}

function deleteNote(noteId) {
    return new Promise((resolve, reject)=>{
        var note = notes.findIndex(note => note.id === noteId)
        notes.splice(note, 1);
        resolve()
    });
}

function sortNote(note, key) {

}

export default {
    emptyNote,
    addNote,
    saveNote,
    editNote,
    deleteNote,
    sortNote,
    getNotes,
    getNoteById,
    notes
}