'use strict';
var cl = console.log;
// cl('MKHomePage.js ran');

import MKService from '../MisterKeeperService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'



export default {
    template: `
    <section>
        <command-line @searchSubmited="searchSubmited"></command-line>
        <content class="main-content">
            <ul class="left">
                <li v-for="obj in 4">some li</li>
            </ul>
            <ul class="right">
                <item-preview v-for="note in notes" :item="note"> </item-preview>
            </ul>
            </content>
    </section>
    `,
    
    data(){
        return{
             notes: MKService.notes
        }
    },
    methods: {
        searchSubmited(value) {
            cl('Ss ran', value)
            this.searchValue = value;

        }
    },
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




