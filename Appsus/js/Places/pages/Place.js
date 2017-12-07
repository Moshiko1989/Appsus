'use strict';
var cl = console.log;
// cl('PlacesHomePage.js ran');


import PlacesService from '../PlacesService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'
import MapsGoogle from '../../cmps/MapCmp.js'

export default {
    template: `
    <section>
        <h1>This will be the Places Home Page</h1>
        <command-line @searchSubmited="searchSubmited"></command-line>
        <ul>
            <item-preview v-for="place in places" :item="place"> </item-preview>
        </ul>
        <maps-google :searchValue="searchValue"></maps-google>
    </section>
    `,
    data(){
        return{
             places: PlacesService.places,
             searchValue: '',
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
        ItemPreview,
        MapsGoogle
    },

}


