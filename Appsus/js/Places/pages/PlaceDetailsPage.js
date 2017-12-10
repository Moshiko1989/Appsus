'use strict';
var cl = console.log;
// cl('PlacesDetailsPage.js ran');

import PlacesService from '../PlacesService.js'

export default {
    template: `
        <section v-if="place">
            <p>title</p>
            <input type="text" v-model="date.title" autofocus>
            <p>text</p>
            <input type="textbox" v-model="note.text" >
            <p>picture</p>
            <input type="text" v-model="note.picture" >
            <p>date</p>
            <input type="date" v-model="note.date" >
            <p>type</p>
            <input type="text" v-model="note.type" >
            <button @click="savePlace">save</button>
            <router-link tag="button" to="/Places">Cancel</router-link>
            
        </section>
    `,
    data() {
        return {
            place :  null
        }
    },
    created() {
        var placeId = +this.$route.params.PlaceId
        PlacesService.getPlaceById(placeId)
         .then(place => {
             this.place = place
         })
         .catch(err => {
             this.$router.push('/Places')
         })
        
    },
    
}