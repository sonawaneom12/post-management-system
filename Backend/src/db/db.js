const mongoose = require('mongoose');


async function connectDB() {
    await mongoose.connect("mongodb+srv://new_user_1:lYX7Y5TaXVSU7ErU@backend-tutorials.6zrmjyd.mongodb.net/project-1");

    console.log("DB Connected");
}

module.exports = connectDB;

