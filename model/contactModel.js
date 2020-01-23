const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    zipCode: {
        type: Number,
        required: [true, 'A contact must have a zipCode'],
    },
    city: {
        type: String,
        required: [true, 'A contact must have a city'],
        trim: true
    },
    county: {
        type: String,
        required: [true, 'A contact must have a county'],
        trim: true
    },
    countyFIPS: {
        type: Number,
        required: [true, 'A contact must have a county FIPS']
    },
    stateAcronym: {
        type: String,
        required: [true, 'A contact must have a state acronym'],
        trim: true
    },
    congressionalDistrcit: {
        type: Number,
        required: [true, 'A contact must have a congressional district'],
    },
    state: {
        type: String,
        required: [true, 'A contact must have a state'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
