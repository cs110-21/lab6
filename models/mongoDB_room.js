const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'message'
        }
    ]
});

module.exports = Item = mongoose.model('room', roomSchema);