const express = require("express");
const todoRoute = require("./routes/todo.routes");
require("dotenv").config();
const app = express();


app.use(express.json())
app.use(todoRoute)
app.listen(process.env.PORT,(err)=>{
    console.log("server is runnning:")
})
