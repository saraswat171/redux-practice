
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { fetchUsers } from './Redux/UserSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
   
  const usersarray = useSelector((state)=>state.users.usersdata);

  const loading= useSelector((state)=>state.todo.loading)
  const error = useSelector((state)=>state.todo.error)
  return (

    <div className="App">
       {usersarray.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
        <h2>{user.address}</h2>
        <h2>{user.phone}</h2>
        <h2>{user.website}</h2>
        <h2>{user.company.name}</h2>
        <h2>{user.company.name}</h2>
    
      </div>
    ))}
    {loading && <p>loading the Todo! PLEASE WAIT....for a while..</p>}
    {error && <p>Alas! PAGE NOT FOUND</p>}
    </div>
  );
}

export default App;