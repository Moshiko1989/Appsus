'use strict';
var cl = console.log;
// cl('MKDitailsPage.js ran');

import MKService from '../MisterKeeperService.js'

export default {
    template: `
        <section v-if="note">
            <p>isImportent</p>
            <input type="chekbox" v-model="note.isImportent">
            <p>title</p>
            <input type="text" v-model="note.title" autofocus>
            <p>text</p>
            <input type="textbox" v-model="note.text" >
            <p>date</p>
            <input type="date" v-model="note.date" >
            <p>rimainder</p>
            <input type="date" v-model="note.rimainder" >
            <p>color</p>
            <input type="color" v-model="note.color" >
            <button @click="saveNote">save</button>
            <router-link tag="button" to="/MisterKeeper">Cancel</router-link>
        </section>
    `,
    data() {
        return {
            note :  null
        }
    },
    created() {
        var noteId = +this.$route.params.NoteId
        cl('noteId',noteId)
        MKService.getNoteById(noteId)
         .then(note => {
             this.note = note
             cl('then')
             cl('note', this.note)
         })
         .catch(err => {
             this.$router.push('/MisterKeeper')
             cl('cach')
         })
        cl('note',this.note)
    },
    methods: {
        saveNote() {
            cl('this.note',this.note)
            MKService.saveNote(this.note)
                .then(_ => {
                    cl('save clicked in the then')
                    this.$router.push('/MisterKeeper')
                })
                .catch(err => {
                    cl('cant save');
                })
        }
    }
}