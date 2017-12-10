// 'use strict';
var cl = console.log;
// cl('EMailEditPage.js ran');

import BusService from '../../cmps/EventBusService.js'
import EmailsService from '../EmailsService.js'

export default {
    template: `
    <section>
        <form @submit.prevent="saveEmail()">
            <p>isImportent</p>
            <input type="chekbox" v-model="email.isImportent">
            <p>title</p>
            <input type="text" v-model="email.title" autofocus>
            <p>text</p>
            <input type="textbox" v-model="email.text" >
            <p>date</p>
            <input type="date" v-model="email.date" >
            <p>to</p>
            <input type="textbox" v-model="email.to" >
            
            <button @click="addEmail()">send</button>
            <router-link tag="button" to="/Emails">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
           email: EmailsService.emptyEmail()
        }
    },
    created() {
        
    },
    methods: {
        addEmail() {
            cl('save clicked')
            EmailsService.addEmail(this.email)
                .then(_ => {
                    cl('save clicked in the then')
                    this.$router.push('/Emails')
                })
                .catch(err => {
                    cl('cant save');
                })
        }
    }

}

/*  */