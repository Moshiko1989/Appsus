// 'use strict';
var cl = console.log;
// cl('EMailEditPage.js ran');

import BusService from '../../cmps/EventBusService.js'
import EmailsService from '../EmailsService.js'

export default {
    template: `
    <section>
        <form @submit.prevent="">
            <p>isImportent1</p>
            <input type="chekbox" v-model="email.isImportent">
            <p>title</p>
            <input type="text" v-model="email.title" autofocus>
            <p>text</p>
            <textarea type="textbox" v-model="email.text" ></textarea>
            <p>date</p>
            <input type="date" v-model="email.date" >
            <p>to</p>
            <input type="textbox" v-model="email.to" >

            <button @click="saveEmail()">save</button>

            <button v-if="!email.isSent" @click="sendEmail(email)">send</button>

            <router-link tag="button" to="/Emails">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
           email: EmailsService.emptyEmail(),
        //    email: null
        }
    },
    created() {
        var emailId = +this.$route.params.EmailId
        EmailsService.getEmailById(emailId)
         .then(email => {
             this.email = email
            //  cl('then')
            if(!this.email) {
                cl('not')
                this.email = EmailsService.emptyEmail()
                cl('email', this.email)

            }
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
            EmailsService.addEmail(this.email)
                .then(_ => {
                    cl('save clicked in the then')
                    this.$router.push('/Emails')
                })
                .catch(err => {
                    cl('cant save');
                })
        },
        sendEmail(email){
            if (email.isIncome || email.isSent) return;
            if (email.to === EmailsService.ourAddress) {
                this.email.from = email.to;
                this.email.isSent = true;
                this.email.isIncome = true;
                //need to check if item exist in the data.
                //if true, needs to be updated, if false, needs to be added (saveEmail()).
                saveEmail()
            } else {
                this.email.from = EmailsService.ourAddress;
                this.email.isSent = true;
                //need to check if item exist in the data.
                //if true, needs to be updated, if false, needs to be added (saveEmail()).
                this.saveEmail()             
            }
        }
    }

}

/*  */