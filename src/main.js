import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import './styles/main.css'
import App from './components/app'

// Vue plugins
Vue.use(VueRouter);

// Set up router
let router = new VueRouter();
router.redirect(routes.redirect);
router.map(routes.map);

// Define the app component
var app = Vue.extend(App);

// Start application
router.start(app, '#app');
