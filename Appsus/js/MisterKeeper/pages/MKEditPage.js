'use strict';
var cl = console.log;
cl('MKEditPage.js ran');

import MKService from '../MisterKeeperService.js'
// import EventBusService from '../services/EventBusService.js'


export default {
    template: `
    <section>
    
    Add note
        <form @submit.prevent="saveNote">
            <input type="text" v-model="noteToUpdate.model" autofocus>
            <button>{{(noteId)? 'Save' : 'Add'}}</button>
            <router-link tag="button" to="/">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            noteToUpdate: MKService.emptynote(),
            noteId: +this.$route.params.noteId,
            userMsg : null

        }
    },
    created() {
        // if (!this.carId) return;
        // CarService.getCarById(this.carId)
        //     .then(car => {
        //         this.carToUpdate = Object.assign({}, car)
        //     })
    },
    methods: {
    //     saveCar() {
    //         CarService.saveCar(this.carToUpdate)
    //             .then(addedCar => {
    //                 this.$router.push('/')
    //             })
    //             .catch(err => {
    //                 var userMsg = { txt: 'Cars Loaded Failed!', type: 'danger' }
    //                 EventBusService.$emit(SHOW_MSG, userMsg)
    //             })
    //     }
    }
    
}