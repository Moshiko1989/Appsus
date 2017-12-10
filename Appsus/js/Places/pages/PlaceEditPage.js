'use strict';
var cl = console.log;
// cl('PlacesEditPage.js ran');

import PlacesService from '../PlacesService.js'
// import EventBusService from '../services/EventBusService.js'


export default {
    template: `
    <section>
     Add place
        <form @submit.prevent="addPlace">
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
            <button @click="addPlace">add</button>
            <router-link tag="button" to="/Places">Cancel</router-link>
        </form>
    
    </section>
    
    `,
    data() {
        return {
            place: {},
            placeId: +this.$route.params.placeId,
            // userMsg : null

        }
    },
    created() {
        cl('places edit place crated')
        cl('PlacesService.emptyPlace()',PlacesService.emptyPlace())
        this.place = PlacesService.emptyPlace()
        cl('place',this.place)
    },
    methods: {
        addPlace() {
            cl('this.place',this.place)
            PlacesService.addPlace(this.place)
                .then(_ => {
                    cl('add clicked in the then')
                    this.$router.push('/Places')
                })
                .catch(err => {
                    cl('cant add');
                })
        }
    }
    
}

