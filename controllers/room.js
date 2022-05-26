// Controller handler to handle functionality in room page
const Room = require("../models/mongoDB_room");

// Example for handle a get request at '/:roomName' endpoint.
async function getRoom(request, response) {
    if (request.params.roomName === 'favicon.ico') {
        response.render('room', { title: 'chatroom', roomName: request.params.roomName});
    }
    else {
        const currentRoom = await Room.findById(request.params.roomName);
        const roomName = currentRoom.name;
        response.render('room', { title: 'chatroom', roomName: roomName});
    }
}

module.exports = {
    getRoom
};