'use strict';
var cl = console.log;
cl('EmailDetailsPage.js ran');

import EmailsService from '../EmailsService.js'

export default {
    template: `
        <section v-if="email">
            <h1>{{email.tite}}</h1>
            <h2>$ {{email.text}}</h2>
        </section>
    `,
    data() {
        return {
            email :  null
        }
    },
    created() {
        var emailId = +this.$route.params.emailId
        EmailsService.getEmailById(emailId)
         .then(email => this.email = email)
         .catch(err => {
             this.$router.push('/')
         })
        
    }
}