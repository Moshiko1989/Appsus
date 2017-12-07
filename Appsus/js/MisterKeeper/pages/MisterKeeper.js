'use strict';
var cl = console.log;
// cl('MKHomePage.js ran');

import MKService from '../MisterKeeperService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'



export default {
    template: `
    <section>
        <h1>This will be the MKHomePage</h1>
        <command-line @searchSubmited="searchSubmited"></command-line>
        <ul>
            <item-preview v-for="note in notes" :item="note"> </item-preview>
        </ul>
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
    
}

{/* <item-preview v-for="note in notes" :item="note"> </item-preview> */}


