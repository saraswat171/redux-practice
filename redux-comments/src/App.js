
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { fetchComment } from './Redux/commentSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchComment())
  },[dispatch])
   
  const commentarray = useSelector((state)=>state.comment.commentdata);

  const loading= useSelector((state)=>state.comment.loading)
  const error = useSelector((state)=>state.comment.error)
  return (

    <div className="App">
       {commentarray.map((comment) => (
      <div key={comment.id}>
        <h1>{comment.name}</h1>
        <h2>{comment.email} </h2>
        <h2>{comment.body} </h2>
      </div>
    ))}
    {loading && <p>loading the data ! PLEASE WAIT......</p>}
    {error && <p>OOPS!! PAGE NOT FOUND</p>}
    </div>
  );
}

export default App;