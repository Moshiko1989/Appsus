// 'use strict';
var cl = console.log;
// cl('EMailEditPage.js ran');

import BusService from '../../cmps/EventBusService.js'
import EmailsService from '../EmailsService.js'

export default {
    template: `
    <section>
        <form @submit.prevent="saveEmail">
            <input type="text" v-model="emailToUpdate.title" autofocus>
            <input type="textbox" v-model="emailToUpdate.text" >
            <button @click="saveEmail()">Add</button>
            <router-link tag="button" to="/Emails">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            emailToUpdate: EmailsService.emptyEmail()
        }
    },
    created() {
        cl('emailToUpdate', this.emailToUpdate);
    },
    methods: {
        saveEmail() {
            cl('save clicked')
            EmailsService.saveEmail(this.emailToUpdate)
                .then(_ => {
                    this.$router.push('/Emails')
                })
                .catch(err => {
                    cl('cant save');
                })
        }
    }

}