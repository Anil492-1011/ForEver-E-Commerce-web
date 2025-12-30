const express = require("express")
const app =express();
require("dotenv").config()
const Connect = require('./Config/db')
const auth = require('./Route/UserRoute')

const PORT =process.env.PORT || 7000;
Connect();

app.use(express.json());

// Test route
app.get("/api",(req,res)=>{
res.send("Welcome to the Auth Athen API")})

//Routes

app.use('/api/auth',auth);

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`)});