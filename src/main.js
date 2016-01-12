import './styles/main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/app';
import 'material-design-lite/material';

// Vue plugins
Vue.use(VueRouter);

// Set up router
let router = new VueRouter( {
    hashbang: true,
    //history: true,
    saveScrollPosition: true,
    transitionOnLoad: true
} );
router.redirect(routes.redirect);
router.map(routes.map);

// Define the app component
var app = Vue.extend(App);

// Start application
router.start(app, '#app');
