const mongoose = require('mongoose');

const CONNECTION_STRING = `mongodb+srv://talha-shiekh:${process.env.DB_PASSWORD}@tkcertfactory.t0tied7.mongodb.net/`

async function main() {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Database connected successfully!")
}

exports.connectToMongo = main;