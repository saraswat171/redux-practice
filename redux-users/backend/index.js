const express = require("express")
const mongoose = require('mongoose')
const UsersModel = require('./models/UserSchema')
const app = express()
const mongoose = require('./config/mongodb')
app.use(express.text())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());



const url = "mongodb+srv://chetan1150:chetan@cluster0.lsitdv3.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}


app.post('/usersinfo', async (req, res) => {
     const userdata = req.body;
  
  console.log('hjdjkd',userdata
  
  
  
  )

        const newuser = await UsersModel.create(userdata);
        console.log('newuser', newuser)
        res.status(200).json(newuser)
     


    //  catch (err) { res.status(500).json(err) }
  
})








app.listen(8080, () => {
    console.log('server at port 8080')
})