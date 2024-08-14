const express = require('express')
const app = express();
const mongoose = require('mongoose')
const moviedata= require('./models/movies')
const Getroute = require('./routes/Getroute')


app.use(express.json())
mongoose.connect('mongodb+srv://SOMIL:1234@cluster0.gbpym2y.mongodb.net/movieapi').then(console.log("databse is connected"))

const port = 8000;





app.get("/",async(req,res)=>{
  //  const data =await moviedata.find();
  //  const name = data.map((e)=>{
  //  return e;
  //  }) 

   res.send("If you see this page add /api in the link \n see the readme file for other info ");

});

app.use('/api',Getroute)

app.listen(port,console.log("server is running"))