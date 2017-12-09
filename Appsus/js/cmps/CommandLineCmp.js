'use strict';
var cl = console.log;
// cl('ComendLineSection.js ran');  

export default {
    template: `
        <section class="command-line">
            <nav> 
                <button class="sort" @click="sortItemsBy()">Sort </button>
                <input class ="serchTextArea" type="text"
                    v-model="searchValue" @keyup.enter="searchSubmited">
                <button class="serch" @click="searchSubmited()">serch </button>
                <button class="AddNew" @click="addNewItem()">{{newTitle}} </button>
                <input type="radio" name="viewType" value="list" > {{leftRadio}}
                <input type="radio" name="viewType" value="thumbNails"> {{rightRadio}}
            </nav>           
        </section>
        `,

        data(){
            return{
            newTitle: 'new',
            leftRadio: 'list',
            rightRadio: 'thumbnails',
            searchValue:''
            }
        },
        methods: {
            searchSubmited() {
                cl('searchSubmited')
                cl(this.searchValue)
                this.$emit('searchSubmited', this.searchValue);
            },
            sortItemsBy(){
                cl('sortItemsBy')
                this.$emit('sortItemsBy');
            },
            addNewItem(){
                cl('addNewItem')
                this.$emit('addNewItem');
            },

        }
}
