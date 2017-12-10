'use strict';
var cl = console.log;
// cl('PlacesEditPage.js ran');

import PlacesService from '../PlacesService.js'
// import EventBusService from '../services/EventBusService.js'


export default {
    template: `
    <section>
    
    Add place
        <form @submit.prevent="savePlace">
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
            <button>{{(placeId)? 'Save' : 'Add'}}</button>
            <router-link tag="button" to="/Places">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            placeToUpdate: PlacesService.emptyplace(),
            placeId: +this.$route.params.placeId,
            userMsg : null

        }
    },
    created() {
        var placeId = +this.$route.params.placeId
        PlacesService.getPlaceById(placeId)
         .then(place => this.place = place)
         .catch(err => {
             this.$router.push('/Places')
         })
    },
    methods: {
    
    }
    
}