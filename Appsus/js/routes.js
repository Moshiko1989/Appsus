'use strict';
var cl = console.log;
// cl('routes.js ran');

import HomePage from './general/pages/HomePage.js'

import MKHomePage from './MisterKeeper/pages/MisterKeeper.js'
import MKDetailsPage from './MisterKeeper/pages/MKDetailsPage.js'
import MKEditPage from './MisterKeeper/pages/MKEditPage.js'

import PlacesHomePage from './Places/pages/Place.js'
import PlaceDetailsPage from './Places/pages/PlaceDetailsPage.js'
import PlaceEditPage from './Places/pages/PlaceEditPage.js'

import EmailssHomePage from './Emails/pages/Email.js'
import EmailDetailsPage from './Emails/pages/EmailDetailsPage.js'
import EmailEditPage from './Emails/pages/EmailEditPage.js'




const routes = [
    //home page
    {
        path: '/',
        component: HomePage
    },  
    //MK
    {
        path: '/MisterKeeper',
        component: MKHomePage
    },
    {
        path: '/MisterKeeper/create',
        component: MKEditPage
    },
    {
        path: '/MisterKeeper/:NoteId',
        component:  MKDetailsPage
    },
    {
        path: '/MisterKeeper/:NoteId/edit',
        component: MKEditPage
    },
    //Places
    {
        path: '/Places',
        component: PlacesHomePage
    },
    {
        path: '/Places/create',
        component: PlaceEditPage
    },
    {
        path: '/Places/:PlaceId',
        component: PlaceDetailsPage
    },
    {
        path: '/Places/:PlaceId/edit',
        component: PlaceEditPage
    },
    //Emails
    {
        path: '/Emails',
        component: EmailssHomePage
    },
    {
        path: '/Email/create',
        component: EmailEditPage
    },
    {
<<<<<<< HEAD
        path: '/Email:EmailId',
        component: EmailDetailsPage
    },
    {
        path: '/Email:EmailId/edit',
=======
        path: '/Emails/:EmailId',
        component: EmailDetailsPage
    },
    {
        path: '/Emails/:EmailId/edit',
>>>>>>> 6007750ee401379ffb987f1769b4bad4c72bad90
        component: EmailEditPage
    },
];


export default routes;