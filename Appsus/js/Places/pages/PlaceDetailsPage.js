'use strict';
var cl = console.log;
// cl('PlacesDetailsPage.js ran');

import PlacesService from '../PlacesService.js'

export default {
    template: `
        <section v-if="place">
            <p>title</p>
            <input type="text" v-model="place.title" autofocus>
            <p>text</p>
            <input type="textbox" v-model="place.text" >
            <p>picture</p>
            <input type="text" v-model="place.picture" >
            <p>date</p>
            <input type="date" v-model="place.date" >
            <p>type</p>
            <input type="text" v-model="place.type" >
            <button @click="savePlace">save</button>
            <router-link tag="button" to="/Places">Cancel</router-link>
            
        </section>
    `,
    data() {
        return {
            place :  {}
        }
    },
    created() {
        var placeId = +this.$route.params.PlaceId
        cl('placeId',placeId)
        PlacesService.getPlaceById(placeId)
         .then(place => {
             cl('place then is: ', place)
             this.place = Object.assign({}, place)
            cl('this.place', this.place)
         })
         .catch(err => {
             this.$router.push('/Places')
         })
    },
    methods: {
        savePlace() {
            cl('this.place',this.place)
            PlacesService.savePlace(this.place)
                .then(_ => {
                    cl('save clicked in the then')
                    this.$router.push('/Places')
                })
                .catch(err => {
                    cl('cant save');
                })
        }
    }
    
}