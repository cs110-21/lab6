// Controller handler to handle functionality in room page
const Room = require("../models/mongoDB_room");
const Message = require("../models/mongoDB_message");

// Example for handle a get request at '/:roomName' endpoint.
async function getRoom(request, response) {
    if (request.params.roomName === 'favicon.ico') {
        response.render('room', { title: 'chatroom', roomName: request.params.roomName, id: 0, messages: []});
    }
    else {
        const currentRoom = await Room.findById(request.params.roomName);
        const roomName = currentRoom.name;

        let messages = [];

        response.render('room', { title: 'chatroom', roomName: roomName, id: request.params.roomName, messages: messages});
    }
}

module.exports = {
    getRoom
};