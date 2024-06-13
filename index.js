const mongoose = require('mongoose');

main().catch(err => console.error(err));

async function main() {
    // Connect to MongoDB using Mongoose
    await mongoose.connect("mongodb://127.0.0.1:27017/test", {

    });

    console.log("Connected to MongoDB");


}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adarr@yahoo.in",
//     age: 48
// });

const user2 = new User({
    name: "shareen",
    email: "shareen@yahoo.in",
    age: 21
});

// Save the new user to the database
user2.save()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

