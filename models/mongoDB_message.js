const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('message', MessageSchema);