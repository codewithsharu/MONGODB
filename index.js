const express = require('express');
const mongoose = require('mongoose');
const Chat = require('./models/chat'); // Corrected filename casing

const app = express();

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
        console.log("Connection to MongoDB successful");


    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }

    
        // Define your routes and middleware after connecting to MongoDB
        app.get('/', (req, res) => {
            res.send("Root is working");
        });

        // Example of saving a chat message to the database
        const chatMessage = new Chat({
            from: "neha", // Assuming 'username' matches your schema
            to: "narayaan",
            message: "send me your exam sheets",
            created_at: new Date()
        });

        // Saving the chat message to the database
       const sm =  await chatMessage.save();
        console.log(sm);

        app.listen(8080, () => {
            console.log("Server is listening on port 8080");
        });
}

main();

