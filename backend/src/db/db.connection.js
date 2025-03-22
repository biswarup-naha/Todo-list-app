import mongoose from "mongoose";

import dotenv from "dotenv"; 
dotenv.config();

const uri= (process.env.ATLAS_URI)==undefined ? process.env.COMPASS_URI : process.env.ATLAS_URI;

export const connectDb = () => mongoose.connect(uri, { dbName: "todo-list-app" })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((error) => {
        console.log(error);
    });
