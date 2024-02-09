const  express = require ('express')
const mongoose = require ('mongoose')
const ImageModel = require('./models/imageSchema')
const cors = require('cors')
const multer = require('multer');
const app = express()

app.use(express.text())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/uploads', express.static('uploads')) // important
const upload = multer({ dest: './uploads' })
const url = "mongodb+srv://chetan1150:chetan@cluster0.lsitdv3.mongodb.net/?retryWrites=true&w=majority";
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST', 'GET'],
    credentials: true
  }));

try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}

const cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images' , maxCount: 4}])
app.post('/imagesUpload',cpUpload,async(req,res)=>{
    // console.log('single image' , req.files.image.map((i)=>{return (i.path)}));
    // console.log('multiple image' , req.files.images)
   

    //  image = req.files.map((i)=>{return (i.path)}); 
    console.log('first' , req.files.image[0].path)
    console.log('second ' , req.files.images)
        const singleimage = req.files.image[0].path;
    const multipleimage =req.files.images.map((i)=>{return (i.path)}); 
   try {
    const newuser = await ImageModel.create({image:singleimage,images:multipleimage});
    console.log('newuser', newuser)
    res.status(200).json(newuser)
   }
   catch (err) { res.status(500).json(err) }
})

app.get('/imagesdata',async(req,res)=>{
    console.log("first")
    try{
        const data=await ImageModel.find({});
        console.log(data)
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(400).json("no images found in database")
        }
    }catch(e){
        res.status(500).json(e)
    }
})




app.listen(8080, () => {
    console.log('server at port 8080')
})