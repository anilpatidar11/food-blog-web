const express = require("express");
const app = express()

const dotenv = require("dotenv").config()

const connectDb =require("./config/connectionDb")
const cors =require("cors")

const PORT = process.env.PORT || 3000

connectDb()
app.use(express.json());
app.use(cors())
// ye method route/recipe.js me paste krna
// app.get("/", (req, res) => {
//   res.json({message:"hello"})
// })


//yha path diya 
app.use("/recipe",require("./routes/recipe"))





app.listen(PORT, (err) => {
  console.log(`app is listening on PORT ${PORT}`)
})