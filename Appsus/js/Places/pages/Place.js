'use strict';
var cl = console.log;
cl('PlacesHomePage.js ran');


import PlacesService from '../PlacesService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'

export default {
    template: `
    <section>
        <h1>This will be th Places Home Page</h1>
        <command-line></command-line>
        <ul>
        <item-preview v-for="place in places" :item="place"> </item-preview>

           
        </ul>
    </section>
    `,

    components: {
        CommandLine,
        ItemPreview
    },
    data(){
        return{
             places: [],
             newPlace: PlacesService.emptyPlace()
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


/*  */