module.exports = {

    timeouts: {
        short: 5000,
        medium: 10000,
        long: 60000
    },

    login: {
        dashboardLoadTimeout: 60000,
        menuRetryCount: 10,
        menuRetryDelay: 1000,
        uiStabilizationDelay: 8000
    },

    users: {
        kiosk: {
            email: "kioskj1@mailinator.com",
            password: "123456"
        },

        cathline: {
            email: "cathline.a@trackdfect.com",
            password: "Hello@1234"
        }
    },

    branch: {
    search: "testing",
    name: "testing branch"
},

    register: {
        name: "Test"
    },

    warehouse: {
        phone: "9876543210"
    },

    tables: {
        start: 1,
        minEnd: 4,
        maxEnd: 10
    },

    cash: {
        minAmount: 10,
        maxAmount: 1000,
        note: "Automation Test"
    },

    product: {
        search: "bread"
    },

    touch: {
        cart: {
            x: 528,
            y: 2187
        },

        pay: {
            x: 635,
            y: 2169
        },

        duration: 120
    }
};