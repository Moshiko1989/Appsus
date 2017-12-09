'use strict';
var cl = console.log;
// cl('Header.js ran');  

export default {
    template: `
            <nav> 
                <router-link to="/" exact>Home</router-link>
                <router-link to="/MisterKeeper/">MisterKeeper</router-link>
                <router-link to="/Places/">Places</router-link>
                <router-link to="/Emails/">Emails</router-link> 
            </nav>           
        `   
}