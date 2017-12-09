'use strict';
var cl = console.log;
// cl('EmailsService.js ran');

const emails = [
    {
        id: 1,
        title: '1st mail to moshiko',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '27 Dec 1995 13:30:00',
        isRead: true,
        from: 'me@gmail.com',
        to: 'me@gmail.com'
    },
    {
        id: 2,
        title: '2nd dont know',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '25 Dec 2016 13:30:00',
        isRead: true,
        from: 'ido@gmail.com',
        to: 'me@gmail.com'
    },
    {
        id: 3,
        title: '3ed did I do it???',
        text: 'lorem ipsum',
        data: '',
        isImportent: true,
        date: '25 Dec 1995 13:30:00',
        isRead: true,
        from: 'mosh@gmail.com',
        to: 'ido@gmail.com'
    },
    {
        id: 4,
        title: '4th titel!!!!!',
        text: 'lorem ipsum',
        data: '',
        isImportent: true,
        date: '25 Dec 1995 13:32:00',
        isRead: false,
        from: 'ido@gmail.com',
        to: 'mosh@gmail.com'
    },
    {
        id: 5,
        title: '5th',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '25 nov 1995 13:30:00',
        isRead: false,
        from: 'mosh@gmail.com',
        to: 'mosh@gmail.com'
    },
    {
        id: 6,
        title: '6th',
        text: 'lorem ipsum',
        data: '',
        isImportent: false,
        date: '25 Dec 2017 13:30:00',
        isRead: true,
        from: 'me@gmail.com',
        to: 'mosh@gmail.com'
    },

];

function emptyEmail() {
    var id = _getNextId();
    return {
        id: id,
        title: '',
        data: '',
        isImportent: false,
        date: '',
        isRead: false,
        from: '',
        to: ''
    }
}

function _getNextId() {
    var maxId = emails.reduce((acc, mail) => {
        return (mail.id > acc) ? mail.id : acc
    }, 0);
    return maxId + 1;
}

function getEmails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(emails) }, 250)
    });
}

function getEmailById(emailId){
    return new Promise((resolve, reject)=>{
        var foundEmail = emails.find(email => email.id === emailId)
        if (foundEmail) resolve(foundEmail)
        else reject();
    })
}

function saveEmail(email) {
    return new Promise((resolve, reject) => {
        emails.push(email);
    })
    resolve(email);
    cl('email was saved', email);
};


//function read???//

function editEmail(email) {

}

function deleteEmail(email) {
    return new Promise((resolve, reject)=>{
        var emailIdx = emails.findIndex(email => email.id === emailId)
        emails.splice(emailIdx, 1);
        resolve()
    });
}

function sortEmails(email, key) {

}

export default {
    emptyEmail,
    saveEmail,
    editEmail,
    deleteEmail,
    sortEmails,
    getEmails,
    getEmailById,
    emails
}