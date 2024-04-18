import mongoose from "mongoose";


const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "mernProject"
    }).then(() => {
        console.log("Database connected successfully")
    }).catch((err) => {
        console.log(`Database issues ${err}`)
    })
}

export default dbConnection;