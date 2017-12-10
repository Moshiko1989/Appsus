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
        <command-line @addNewItem="addNewEmail" @searchSubmited="searchSubmited"></command-line>
        <content class="main-content">
            <ul class="left">
                <li v-for="obj in 4">some li</li>
            </ul>
            <ul class="right">
                <item-preview v-for="email in emailsToDisplay" @deleteItem="deleteEmail(email.id)" :item="email" :key="email.id"> </item-preview>
            </ul>
        </content>
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
                console.log('cant get emails from EmailsService!!');
                this.emails = []
            })
    },
    methods:{
        addNewEmail(){
            // console.log('emails is good rout')
            // this.$router.push('/Email/create');
        },
        searchSubmited(value) {
            // cl('Ss ran', value);
            this.searchValue = value;;
            // cl('Ss searchValue', this.searchValue)
        },
        deleteEmail(emailId){
            cl('id is: ', emailId)
            // cl('mail was delited');
            EmailsService.deleteEmail(emailId)
                .then(_ =>{
                    // cl('mail was delited');
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
                if (!email.title.match(new RegExp(this.searchValue ,'i'))){
                    return false; 
                }
            })
            cl('emailsToDisplay', emailsToDisplay)
        }
    },
        components: {
            CommandLine,
            ItemPreview
        }
}