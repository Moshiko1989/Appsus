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
    data(){
        return{
             places: [],
             newPlace: PlacesService.emptyPlace(),
             searchValue: '',
        }
    },
    created() {
        PlacesService.getPlaces()
            .then(places => {
                this.places = places
            })
            .catch(err => {
                PlacesService.getPlaces()
                console.log('cant get places from PlacesService!!');
                this.places = []
            })
    }
}


