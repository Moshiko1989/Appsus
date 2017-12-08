export default {
    template: `

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
    
}