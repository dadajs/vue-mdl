/**
 * Redirects
 */
module.exports.redirect = {};

/**
 * Routes
 */
module.exports.map = {

    '*': {
        component: require('views/404')
    },

    '/': {
        component: require('views/home')
    },


    '/me':{
        component: require('views/me')
    }

};
