import mongoose from "mongoose";

export const getConnection = () =>{
    const dbURL ="mongodb+srv://ahmmuh:Quuquule1234,,@cluster0.do469pc.mongodb.net/businessDb?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.connect(dbURL)
    .then(() => console.log("Connected to the Database"))
    .catch((err) => console.log("Failed to connect to database ", err))
}