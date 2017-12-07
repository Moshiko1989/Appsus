'use strict';
var cl = console.log;
cl('MKHomePage.js ran');

import MKService from '../MisterKeeperService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'



export default {
    template: `
    <section>
        <h1>This will be the MKHomePage</h1>
        <command-line></command-line>
        <ul>
        <item-preview v-for="note in notes" :item="note"> </item-preview>
      
           
        </ul>
    </section>
    `,

    components: {
        CommandLine,
        ItemPreview
    },
    data() {
        return {
            notes: [],
            newNote: MKService.emptyNote()
        }
    },
    created() {
        MKService.getNotes()
            .then(notes => {
                this.notes = notes
            })
            .catch(err => {
        MKService.getNotes()
                console.log('cant get notes from MKService!!');
                this.notes = []
            })
    }
}




