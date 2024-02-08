
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { fetchTodos } from './Redux/todosSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])
   
  const todosarray = useSelector((state)=>state.todo.tododata);

  const loading= useSelector((state)=>state.todo.loading)
  const error = useSelector((state)=>state.todo.error)
  return (

    <div className="App">
       {todosarray.map((todo) => (
      <div key={todo.id}>
        <h1>{todo.title}</h1>
        {todo.completed ? <p>true</p> : <p>false</p>} 
    
      </div>
    ))}
    {loading && <p>loading the Todo! PLEASE WAIT....for a while..</p>}
    {error && <p>Alas! PAGE NOT FOUND</p>}
    </div>
  );
}

export default App;
