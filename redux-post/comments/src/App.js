 import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchPost } from './Redux/postSlice';
import './App.css';
import Comment from './Comment';

function App() {
  const dispatch=useDispatch();
  const [com, setCom]=useState(false);

  useEffect(()=>{
    dispatch(fetchPost())
  },[dispatch])
   
  const postarray = useSelector((state)=>state.post.postdata);
  // console.log('dfdgffg', postarray)

  const loading= useSelector((state)=>state.post.loading)
  const error = useSelector((state)=>state.post.error)
const handleClick=(id)=>{
 setCom((prev)=>({
  ...prev,
  [id]:!prev[id]
 }))
}
  return (
    <div className="App">
       {postarray.map((post, id) => (
      <div className='Apppost' key={post.id}>
       
        <h2>{post.id} . title : {post.title} </h2>
        <h2>description : {post.body} </h2>
       

        <button onClick={()=>handleClick(id)}>comments</button>
        {com[id] && <Comment
        postId={post.id}/>}
      </div>
    ))}
 
    {loading && <p>loading the POST ... wait here</p>}
    {error && <p>404 no data found</p>}
    </div>
  );
}

export default App;






