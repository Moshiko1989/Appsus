'use strict';
var cl = console.log;
cl('EmailsHomePage.js ran');

import EmailsService from '../EmailsService.js'
import CommandLine from '../../cmps/CommandLineCmp.js'
import ItemPreview from '../../cmps/ItemPreview.js'

export default {
    template: `
    <section>
        <h1>This will be th Emails Home Page</h1>
        <command-line></command-line>
        <ul>
        <item-preview v-for="email in emails" :item="email"> </item-preview>
           
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
             emails: EmailsService.emails
        }
    }
}