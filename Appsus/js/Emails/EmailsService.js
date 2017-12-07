'use strict';
var cl = console.log;
cl('EmailsService.js ran');

var emails = [
    {
        id: 1,
        title: '1st',
        text:'lorem ipsum',
        data:  '',
        isImportent: false,
        date: '27 Dec 1995 13:30:00',
        isRead: true,
        from: 'me@gmail.com',
        to: 'me@gmail.com'
    }, 
    {
        id: 2,
        title: '2nd',
        data:  '',
        isImportent: false,
        date: '25 Dec 2016 13:30:00',
        isRead: true,
        from: 'ido@gmail.com',
        to: 'me@gmail.com'
    }, 
    {
        id: 3,
        title: '3ed',
        data:  '',
        isImportent: true,
        date: '25 Dec 1995 13:30:00',
        isRead: true,
        from: 'mosh@gmail.com',
        to: 'ido@gmail.com'
    }, 
    {
        id: 4,
        title: '4th',
        data:  '',
        isImportent: true,
        date: '25 Dec 1995 13:32:00',
        isRead: false,
        from: 'ido@gmail.com',
        to: 'mosh@gmail.com'
    }, 
    {
        id: 5,
        title: '5th',
        data:  '',
        isImportent: false,
        date: '25 nov 1995 13:30:00',
        isRead: false,
        from: 'mosh@gmail.com',
        to: 'mosh@gmail.com'
    }, 
    {
        id: 6,
        title: '6th',
        data:  '',
        isImportent: false,
        date: '25 Dec 2017 13:30:00',
        isRead: true,
        from: 'me@gmail.com',
        to: 'mosh@gmail.com'
    }, 

];

function emptyEmail() {
    return {
        title: '',
        data:  '',
        isImportent: false,
        date: '',
        isRead: false,
        from: '',
        to: ''
    }
}

function addEmail() {
    

    return email;
}

//function read???//

function editEmail(email) {

}

function deleteEmail(email) {

}

function sortEmails(email, key) {

}

export default {
    emptyEmail,
    addEmail,
    editEmail,
    deleteEmail,
    sortEmails,
}