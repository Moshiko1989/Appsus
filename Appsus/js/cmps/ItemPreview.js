'use strict';
var cl = console.log;
// cl('ItemPreview.js ran');

export default {
    template: `
<<<<<<< HEAD

            <li>
            <p>{{item.title}}</P
           <p>{{item.text}}</p>
         <p>{{item.date}}</P>
         <button @click="deleteItem(item.id)">x</button>
         </li>
    `,
    props: {
        item: Object,

    },
    
=======
        <li>
            <router-link :item="item" :to=link exact>
                <p>{{item.title}}</P
                <p>{{item.text}}</p>
                <p>{{item.date}}</P>
            </router-link>
        </li>
    `,
    data() {
        return {
            link: this.$route.fullPath+this.item.id 
        }
    },
    props: {
        item: Object,
    },
    created(){
        // cl('created: ', this.$route.fullPath)
        // cl('regex: ', this.$route.matched[0].regex)
        cl(this.$route.matched[0].regex.test(this.$route.fullPath))
    }
>>>>>>> 6007750ee401379ffb987f1769b4bad4c72bad90
}