const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
    name:{
        type: String,
        trim: true,
    },
    lastname:{
        type: String,
        trim: true,
    },
    company:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    address:{
        street:{
            type: String,
            trim: true,
        },
        number:{
            type: String,
            trim: true,
        },
        city:{
            type: String,
            trim: true,
        },
        country:{
            type: String,
            trim: true,
        }
    },
    phone:{
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('clients',clientsSchema);
