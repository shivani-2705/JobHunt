import mongoose  from "mongoose";

export const dbConnection =() => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_SEEK"
    }).then(() => {
        console.group("Connected to Database");
    }).catch((err) => {
        console.log(`Some error occured while connecting to database ${err}`);
    });
};