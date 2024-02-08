import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import './Comment.css'
import { fetchComment } from './Redux/commentSlice';

function Comment({postId}) {
  const dispatch=useDispatch();
// console.log('gfhgkjhgf' , postId)

  useEffect(()=>{
  
    dispatch(fetchComment(postId))
  },[dispatch])
   
  const commentarray = useSelector((state)=>state.comment.commentdata);
  console.log(' smnt' , commentarray)

  const loading= useSelector((state)=>state.comment.loading)
  const error = useSelector((state)=>state.comment.error)
  return (

    <div className="Appcom">
    <h1>Comments//</h1>
       {commentarray[postId]?.map((comment) => (
      <div className='appcomdata' key={comment.id}>
        <h1 className='head'>{comment.id}. name:{comment.name}</h1>
        <h2  className='headh2'>email: {comment.email} </h2>
        <h2 className='headh2'> descp: {comment.body} </h2>
        <div className='line'></div>
      </div>
      
    ))}
    {loading && <p>loading the data ! PLEASE WAIT......</p>}
    {error && <p>OOPS!! PAGE NOT FOUND</p>}
    </div>
  );
}

export default Comment;