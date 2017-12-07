'use strict';
var cl = console.log;
cl('EMailEditPage.js ran');

import BusService from '../../cmps/EventBusService.js'
import EmailsService from '../EmailsService.js'

export default {
    template: `
    <section>
    
        <form @submit.prevent="saveEmail">
            <input type="text" v-model="emailToUpdate.model" autofocus>
            <input type="textbox" v-model="emailToUpdate.model" >
            <button :v-show(emailId)>Add</button>
            <router-link tag="button" to="/">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            emailToUpdate: EmailsService.emptyEmail(),
            emailId: +this.$route.params.emailId
        }
    },
    created() {
        
        BusService.Bus.$on(BusService.OPEN_NEW_EMAIL,function(){
            console.log('$no is good')
           
        })
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