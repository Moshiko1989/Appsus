'use strict';
var cl = console.log;
// cl('main.js ran');

import myRoutes from './routes.js'
Vue.use(VueRouter);
const myRouter = new VueRouter({routes : myRoutes})
import MyHeader from './cmps/Header.js'
import MyFooter from './cmps/Footer.js'

// import UserMsg from './cmps/UserMsg.js'


new Vue({
    template: `
        <section>
            <my-header></my-header>
            <router-view></router-view>
            <my-footer></my-footer>
        </section>
    `,
    created() {
        cl('Vue App was created!!!');
    },  
    components: {
        MyHeader,
        MyFooter
        // UserMsg
    },
    router: myRouter,
}).$mount('#app')


//from yaron
{/* <router-link to="/" exact>Home</router-link> */}
{/* <user-msg></user-msg> */}
{/*  */}

{/* <h1>Appsus</h1> 

</nav>
 */}