'use strict';
var cl = console.log;
cl('EmailsHomePage.js ran');

import BusService from '../../cmps/EventBusService.js'

import EmailsService from '../EmailsService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'

export default {
    template: `
    <section>
        <h1>This will be th Emails Home Page</h1>
        <command-line @addNewItem="addNewEmail"></command-line>
        <ul>
        <item-preview v-for="email in emails" :item="email" :key="email.id"> </item-preview>
           
        </ul>
    </section>
    `
    ,

    components: {
        CommandLine,
        ItemPreview
    },

    data(){
        return{
             emails: [],
             newMail: EmailsService.emptyEmail()
        }
    },
    methods:{
        addNewEmail(){
            console.log('emails is good rout')
            this.$router.push('/Emails/create');
            BusService.Bus.$emit(BusService.OPEN_NEW_EMAIL ,this.newMail)
        }
    },
    created() {
        EmailsService.getEmails()
            .then(emails => {
                this.emails = emails
            })
            .catch(err => {
                EmailsService.getEmails()
                console.log('cant get emails from EmailsService!!');
                this.emails = []
            })
    }
}