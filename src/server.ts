import mongoose from "mongoose";
import { app } from "./app";



const port: number = 5000


async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practicing-mongoose');
        console.log("Database Connected")

        app.listen(port, () => {
            console.log(`Practicing mongoose app listening on port ${port}`)
        })

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    } catch (error) {
        console.log("Problem in database connection", error)
    }
}

bootstrap()

