module.exports = {

    redirect: {

    },
    
    map: {
        '*': {
            component: {
                tempate: '404'
            }
        },

        '/': {
            component: {
                template: 'home',
            }
        }
    },

};