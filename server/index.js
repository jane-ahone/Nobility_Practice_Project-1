const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

process.on('uncaughtException',(err)=>{
    console.log(err.name,err.message)
    console.log("Shutting down server...")
    process.exit(1)
})

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Successfully connected to DB")
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(err.name,err.message)
    console.log("Shutting down server...")
    server.close(()=>{
        process.exit(1)
    })
})