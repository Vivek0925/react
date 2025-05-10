import { useState } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');

  const [todos, setTodos] = useState([
  ]);

  const handleEdit = (e, id) =>{
    let t = todos.filter(i=> i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos);

  }
  const handleDelete = (e , id)=>{
    let newTodos = todos.filter(item =>{
      return item.id!==id;
    })
    setTodos(newTodos);
  }

  const handleAdd = () =>{
    setTodos([...todos, { id:uuidv4() ,todo , isCompleted: false}])
    setTodo('');
  }
  const handleChange = (e) =>{
    setTodo(e.target.value);
  }
  const handleCheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="container">
         
          <div className="addTodo">Add a Todo</div>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='add'>Add</button>
          <h1 className="heading">Your Todos</h1>
          <div className="Todos">

            {todos.map(item =>{

          
           return <div key={item.id} className="Todo flex gap-4 justify-between my-4 w-1/4">
            <input name = {item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
             <div className={item.isCompleted ?"line-through" :""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={(e) =>handleEdit(e, item.id)}>Edit</button>
                <button onClick={(e) =>{handleDelete(e, item.id)}}>Delete</button>
              </div>
             
            </div>
        })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
