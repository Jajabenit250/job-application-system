import mongoose from 'mongoose';
require('dotenv').config();
export default async function makeDb() {
    const connUri = process.env.DATABASE_URL;
    mongoose.promise = global.Promise;
    mongoose.connect(connUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.once("open", () =>
        console.log("MongoDB --  database connection established successfully!")
    );
    connection.on("error", (err) => {
        console.log(
            `MongoDB connection error. Please make sure MongoDB is running. Err: ${err}`
        );
        process.exit();
    });
}
