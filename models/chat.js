
// C:\Users\danda\OneDrive\Documents\Desktop\dice\mdb\MONGODB\models\chat.js
const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        maxLength: 50
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});


const Chat = mongoose.model('Message', chatSchema);

module.exports = Chat;
