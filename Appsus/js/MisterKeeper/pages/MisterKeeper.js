'use strict';
var cl = console.log;
// cl('MKHomePage.js ran');

import MKService from '../MisterKeeperService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'



export default {
    template: `
    <section>
        <command-line @addNewItem="addNewNote" @searchSubmited="searchSubmited"></command-line>
        <content class="main-content">
            <ul class="left">
                <li v-for="obj in 4">some li</li>
            </ul>
            <ul class="right">
                <item-preview v-for="note in notesToDisplay" :item="note" :key="note.id"> </item-preview>
            </ul>
            </content>
    </section>
    `,
    data() {
        return {
            notes: [],
            newNote: MKService.emptyNote(),
            notes: MKService.notes
        }
    },
    created() {
        MKService.getNotes()
            .then(notes => {
                this.notes = notes
            })
            .catch(err => {
                console.log('cant get notes from MKService!!');
                this.notes = []
            })
    },
    methods: {
        addNewNote(){
            console.log('notes is good rout')
            this.$router.push('/MisterKeeper/create');
        },
        searchSubmited(value) {
            cl('Ss ran', value)
            this.searchValue = value;

        }
    },
    
    computed:{
        notesToDisplay(){
            return this.notes.filter( note =>{
                if (!this.searchValue) return true;
                if (!note.title.match(new RegExp(this.searchValue, 'i'))){
                    return false; 
                }
            })
            cl('notesToDisplay'. notesToDisplay)
        }
    },
    components: {
        CommandLine,
        ItemPreview
    } 
}




