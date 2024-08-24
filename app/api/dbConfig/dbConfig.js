import mongoose from "mongoose"

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("MongoDB Connected")
        })

        connection.on('error', (err) => {
            console.error(err)
            process.exit()
        })
    }
    catch (err) {
        console.log("Something Went Wrong Connecting to DataBase");

        console.log(err);

    }
}