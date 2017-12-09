'use strict';
var cl = console.log;
// cl('MKDitailsPage.js ran');

import MKService from '../MisterKeeperService.js'

export default {
    template: `
        <section v-if="note">
            <h1>{{Note.tite}}</h1>
            <h2>$ {{Note.text}}</h2>
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
         .then(note => this.note = note)
         .catch(err => {
             this.$router.push('/')
         })
        cl('note',this.note)
    }
}