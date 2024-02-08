const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true]
    },
    username: {
        type: String,
        require: [true]
    },
    email: {
        type: String,
        require: [true]
    },
    address: {
        type: Object,
        properties: {
            street: {
                type: String,
                require: [true]
            },
            suite: {
                type: String,
                require: [true]
            },
            city: {
                type: String,
                require: [true]
            },
            zipcode: {
                type: Number,
                require: [true]
            },
            geo: {
                type: Object,
                properties: {
                    lat: {
                        type: Number,
                        require: [true]
                    },
                    lng: {
                        type: Number,
                        require: [true]
                    }
                }
            }
        }
    },
    phone: {
        type : Number,
        require:[true]
    },
    website:{
        type: String,
        require: [true]
    },
    company:{
        type:Object,
        properties:{
            name: {
                type: String,
                require: [true]
            },
            catchPhrase: {
                type: String,
                require: [true]
            },
            bs: {
                type: String,
                require: [true]
            },
        }
    },

})

module.exports = mongoose.model('users', UserSchema)