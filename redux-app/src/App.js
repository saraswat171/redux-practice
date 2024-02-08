
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchContent } from './Redux/contentSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchContent())
  },[dispatch])
  const content = useSelector((state)=>state.content.content)
  const loading = useSelector((state)=>state.content.loading)
  const err =useSelector((state)=> state.content.error)
  
  return (
    <div >
    {content.map((cont) => (
      <div key={cont.id}>
        <img src={`${cont.thumbnailUrl}`}alt={`${cont.title}`} />
      </div>
    ))}
    {loading && <p>loading the data</p>}
    {err && <p>404 NoT fOUND</p>}
  </div>
  );
}

export default App;
