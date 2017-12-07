'use strict';
var cl = console.log;
cl('ComendLineSection.js ran');  

export default {
    template: `
        <section>
            <nav> 

            <button class="sort" @click="sortItemsBy()">Sort </button>
            <input class ="serchTextArea" type="text" >
            <button class="serch" @click="sortItemsBy()">serch </button>
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
            rightRadio: 'thumbnails'
            }
        },
        methods:{
            addNewItem(){
                this.$emit('addNewItem');
            }
        }


}
