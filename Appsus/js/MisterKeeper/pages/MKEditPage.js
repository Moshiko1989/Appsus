'use strict';
var cl = console.log;
// cl('MKEditPage.js ran');

import MKService from '../MisterKeeperService.js'
// import EventBusService from '../services/EventBusService.js'


export default {
    template: `
    <section>
    
    Add note
        <form @submit.prevent="saveNote">
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
            <button @click="addNote">add</button>
            <router-link tag="button" to="/MisterKeeper">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            note: MKService.emptyNote(),
            noteId: +this.$route.params.noteId,
            // userMsg : null
        }
        
    },
    created(){
        
    },
    methods: {
        addNote() {
            cl('this.note',this.note)
            MKService.addNote(this.note)
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