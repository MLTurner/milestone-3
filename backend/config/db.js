const mongoose = require('mongoose')

// async function to connect to our database
const connectDB = async () => {
  // connection
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) //returns a promise and it takes in the mongoURI, so path to .env
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline) // conn.connection.host gives us the mongodb host that we're connected to, and it'll be displayed as cyan in terminal
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold) // any error will be displayed as such <--
    process.exit(1) // if it fails, it'll exit the entire process
  }
}

module.exports = connectDB