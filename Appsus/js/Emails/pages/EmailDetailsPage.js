'use strict';
var cl = console.log;
// cl('EmailDetailsPage.js ran');

import EmailsService from '../EmailsService.js'

export default {
    template: `
        <section v-if="email">
            <p>isImportent2</p>
            <input type="chekbox" v-model="email.isImportent">
            <p>title</p>
            <input type="text" v-model="email.title" autofocus>
            <p>text</p>
            <input type="textbox" v-model="email.text" >
            <p>date</p>
            <input type="date" v-model="email.date" >
            <p>to</p>
            <input type="textbox" v-model="email.to" >
            <button @click="saveEmail()">send</button>
            <router-link tag="button" to="/Emails">Cancel</router-link>
        </section>
    `,
    data() {
        return {
            email :  null
        }
    },
    created() {
        var emailId = +this.$route.params.EmailId
        EmailsService.getEmailById(emailId)
         .then(email => {
             this.email = email
             cl('then')
             cl('email', this.email)
         })
         .catch(err => {
             this.$router.push('/Emails')
            cl('cach')
         })
        //  cl('emailId',emailId);
         
        //  cl('this.$route.params',this.$route.params)
        
    },
    methods: {
        saveEmail() {
            cl('save clicked')
            EmailsService.saveEmail(this.email)
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