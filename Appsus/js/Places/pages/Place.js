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
             places: PlacesService.places
        }
    }
}


/*  */