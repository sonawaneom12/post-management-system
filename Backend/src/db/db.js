const mongoose = require('mongoose');


async function connectDB() {
    await mongoose.connect("YOUR MONGO_DB ATLAS CLUSTER URL");

    console.log("DB Connected");
}

module.exports = connectDB;

