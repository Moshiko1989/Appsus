'use strict';
var cl = console.log;
cl('EMailEditPage.js ran');

import EmailsService from '../EmailsService.js'
// import EventBusService from '../services/EventBusService.js'


export default {
    template: `
    <section>
    
    Add email
        <form @submit.prevent="saveEmail">
            <input type="text" v-model="emailToUpdate.model" autofocus>
            <button>{{(emailId)? 'Save' : 'Add'}}</button>
            <router-link tag="button" to="/">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            emailToUpdate: EmailsService.emptyemail(),
            emailId: +this.$route.params.emailId,
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