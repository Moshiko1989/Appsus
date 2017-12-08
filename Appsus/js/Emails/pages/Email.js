'use strict';
var cl = console.log;
// cl('EmailsHomePage.js ran');

import BusService from '../../cmps/EventBusService.js'

import EmailsService from '../EmailsService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'

export default {
    template: `
    <section>
        <h1>This will be th Emails Home Page</h1>
        <command-line @addNewItem="addNewEmail" @searchSubmited="searchSubmited"></command-line>
        <ul>
            <item-preview v-for="email in emailsToDisplay" :item="email" :key="email.id"> </item-preview>
                   
        </ul>
    </section>
    `
    ,
    
    data(){
        return{
             emails: [],
             newMail: EmailsService.emptyEmail(),
             searchValue: '',
        }
    },
    created() {
        EmailsService.getEmails()
            .then(emails => {
                this.emails = emails;
            })
            .catch(err => {
                EmailsService.getEmails()
                console.log('cant get emails from EmailsService!!');
                this.emails = []
            })
    },
    methods:{
        addNewEmail(){
            console.log('emails is good rout')
            this.$router.push('/Email/create');
        },
        searchSubmited(value) {
            cl('Ss ran', value)
            this.searchValue = value;
        },
        deleteEmail(emailId){
            cl('mail was delited');
            EmailsService.deleteEmail(emailId)
                .then(_ =>{
                    cl('mail was delited');
                })
                .catch(err => {
                    cl('mail was not delited');
                })
        }
    },
    computed:{
        emailsToDisplay(){
            return this.emails.filter( email =>{
                if (!this.searchValue) return true;
                if (!email.title.match(new RegExp(this.searchValue, 'i'))){
                    return false; 
                }
            })
            cl('emailsToDisplay'. emailsToDisplay)
        }
    },
    
    
        components: {
            CommandLine,
            ItemPreview
        }
}