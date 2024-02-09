import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
function App() {
  const [image, setImg] = useState()
    const [images, setImgs] = useState([])
    const [imagesdata, setImgsdata] = useState([])
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setImg(file);
    };
    const handleFilesChange = (e) => {
        var file=[];
        for (let i = 0; i < e.target.files.length; i++) {
             file = [...file,e.target.files[i]];
        }
        // const file [] = e.target.files;
        setImgs(file);
    };
    useEffect(()=>{
        handleGetData();
    })
    const handleGetData = async () => {
        
        try {
            const res = await axios.get('http://localhost:8080/imagesdata')
            const data = res.data
            console.log(data)
            setImgsdata(data)
        }
        catch (e) {
            alert(e)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("images" , image)
        console.log("images2" , images)
        const formdata = new FormData();
      
        formdata.append('image', image)
        for (let i = 0; i < images.length; i++) {
            formdata.append('images', images[i])
        }
       console.log("images" , formdata)
          try {
      const response = await axios.post('http://localhost:8080/imagesUpload', formdata);
      console.log('product res', response.status)

      if (response.status === 201) {
          console.log('Product added successfully');
      } else {
          console.error('Error adding product');
      }
  } catch (error) {
      console.error('Error adding product:', error.message);

  }

    }
    return (
    <div>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="img">
                <input type="file" name="img" id="" onChange={handleFileChange} />
                <input type="file" name="imgs" multiple id="" onChange={handleFilesChange} />
                <button type="submit">Submit</button>
            </div>
        </form>

        {imagesdata?.map((i)=>
        <img src={`http://localhost:8080/${i.image}`} alt='hjghfv' ></img>
   
    
    
        )}
        
    </div>

    )
}


export default App;
