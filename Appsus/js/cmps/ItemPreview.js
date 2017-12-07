export default {
    template: `

            <li>
            <p>{{item.title}}</P
           <p>{{item.text}}</p>
         <p>{{item.date}}</P>
         </li>
    `,
    // data() {
    //     return {
    //         items
    //     }
    // },
    props: {
        item: Object,

    }
}