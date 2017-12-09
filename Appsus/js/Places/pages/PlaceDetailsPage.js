'use strict';
var cl = console.log;
// cl('PlacesDetailsPage.js ran');

import PlacesService from '../PlacesService.js'

export default {
    template: `
        <section v-if="place">
            <h1>{{place.tite}}</h1>
            <h2>$ {{place.text}}</h2>
        </section>
    `,
    data() {
        return {
            place :  null
        }
    },
    created() {
        var placeId = +this.$route.params.PlaceId
        cl('placeId',placeId)
        PlacesService.getPlaceById(placeId)
         .then(place => this.place = place)
         .catch(err => {
             this.$router.push('/')
         })
        
    }
}