const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//Connect to database
connectDB()

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Welcome to the SMELP API!')
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/reviews', require('./routes/reviewRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)) 