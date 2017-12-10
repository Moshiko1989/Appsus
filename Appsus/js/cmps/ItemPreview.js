'use strict';
var cl = console.log;
// cl('ItemPreview.js ran');

export default {
    template: `
        <li>
            <router-link :item="item" :to=link exact>
                <p>{{item.title}}</P>
                <p>{{item.text}}</p>
                <p>{{item.date}}</P>
            </router-link>

            <button @click="deleteItem(item)">X</button>
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
        cl('regex: ', this.$route.matched[0].regex)
        cl(this.$route.matched[0].regex.test(this.$route.fullPath))
        cl('this.$route.fullPath',this.$route.fullPath)
        cl('this.item.id',this.item.id)
        cl('link', this.link)
        cl('item', this.item)
    },
    methods:{
        deleteItem(item){
            cl('item',item)
            // $emit(deleteItem,item.id)
        }
    }
}