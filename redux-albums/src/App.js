import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

// import { fetchalbum } from './Redux/albumSlice';
import { fetchAlbums } from './Redux/albumsSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchAlbums())
  },[dispatch])
   
  const albumarray = useSelector((state)=>state.album.content);
  console.log('arrar',albumarray[0])
  const loading= useSelector((state)=>state.album.loading)
  const error = useSelector((state)=>state.album.error)
  return (

    <div className="App">
       {albumarray.map((album) => (
      <div key={album.id}>
        <h1>{album.userId}</h1>
        <h2>{album.title} </h2>
      </div>
    ))}
    {loading && <p>loading the data</p>}
    {error && <p>404 NoT fOUND</p>}
    </div>
  );
}

export default App;
