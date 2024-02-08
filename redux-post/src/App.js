
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { fetchPost } from './Redux/postSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchPost())
  },[dispatch])
   
  const postarray = useSelector((state)=>state.post.postdata);

  const loading= useSelector((state)=>state.post.loading)
  const error = useSelector((state)=>state.post.error)
  return (

    <div className="App">
       {postarray.map((post) => (
      <div key={post.id}>
        <h1>{post.userId}</h1>
        <h2>{post.title} </h2>
        <h2>{post.body} </h2>
      </div>
    ))}
    {loading && <p>loading the POST ... wait here</p>}
    {error && <p>404 no data found</p>}
    </div>
  );
}

export default App;