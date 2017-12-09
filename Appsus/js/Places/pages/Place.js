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
        <command-line @searchSubmited="searchSubmited"></command-line>
        <content class="main-content">
            <ul class="left">
                <item-preview v-for="place in places" :item="place"> </item-preview>
            </ul>
            <maps-google :searchValue="searchValue" class="map-container right"></maps-google>            
        </content>
    </section>
    `,
    data(){ 
        return {
             places: PlacesService.places,
             searchValue: '',
             places: [],
             newPlace: PlacesService.emptyPlace()
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
    created() {
        this.places
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


