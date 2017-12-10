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
        <command-line @addNewItem="addNewPlace" @searchSubmited="searchSubmited"></command-line>
        <content class="main-content">
            <ul class="left">
                <item-preview v-for="place in places" :item="place" :key="place.id"> </item-preview>
            </ul>
            <maps-google :searchValue="searchValue" class="map-container right"></maps-google>            
        </content>
    </section>
    `,
    data(){ 
        return {
             places: [],
             newPlace: PlacesService.emptyPlace(),
             searchValue: ''
        }
    },
    created() {
        PlacesService.getPlaces()
            .then(places => {
                // cl('places', places)
                this.places = places
            })
            .catch(err => {
                console.log('cant get places from PlacesService!!');
                this.places = []
            })
    },
    methods: {
        searchSubmited(value) {
            cl('Ss ran', value)
            this.searchValue = value;

        },
        addNewPlace(){
            console.log('places is good rout')
            this.$router.push('/place/create');
        }
    },
    computed:{
        placesToDisplay(){
            return this.places.filter( place =>{
                if (!this.searchValue) return true;
                if (!place.title.match(new RegExp(this.searchValue, 'i'))){
                    return false; 
                }
            })
            cl('placesToDisplay'. placesToDisplay)
        }
    },
    components: {
        CommandLine,
        ItemPreview,
        MapsGoogle
    },
    
}


