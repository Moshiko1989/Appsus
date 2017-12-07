'use strict';
var cl = console.log;
cl('ComendLineSection.js ran');  

export default {
    template: `
        <section>
            <nav> 

            <button class="sort" @click="sortItemsBy()">Sort </button>
            <input class ="serchTextArea" type="text" >
            <button class="AddNew" @click="addNewItem()">New </button>
            <input type="radio" name="viewType" value="list" > M
            <input type="radio" name="viewType" value="thumbNails"> F
            
            </nav>           
        </section>
        `   
}
