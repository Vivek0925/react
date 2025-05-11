import { useState, useEffect} from 'react';
import './App.css';
import './index.css';
import Navbar from './components/navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');
  const [showFinished, setshowFinished] = useState(false);

  const [todos, setTodos] = useState([
  ]);

  useEffect(() => {
    let todoString = localStorage.getItem('todos');
    if(todoString){
      let todos = JSON.parse(localStorage.getItem('todos'));
      setTodos(todos);
    }
  }, [])

  const toggleFinish = (e) =>{
    setshowFinished(!showFinished);
  }

  const saveToLS = (params) => {
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }

  
  const handleEdit = (e, id) =>{
    let t = todos.filter(i=> i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos);
    saveToLS();
  }
  const handleDelete = (e , id)=>{
    let newTodos = todos.filter(item =>{
      return item.id!==id;
    })
    setTodos(newTodos);
    saveToLS();
  }

  const handleAdd = () =>{
    setTodos([...todos, { id:uuidv4() ,todo , isCompleted: false}])
    setTodo('');
    saveToLS();
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
    saveToLS();
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="container">
          <h1 className='font-extrabold text-center'>iTask - Manage your todos at one place</h1>
         
          <div className="addTodo">Add a Todo</div>
          <input onChange={handleChange} value={todo} type="text" className='w-full' />
          <button onClick={handleAdd} disabled={todo.length<=2} className='add flex w-full my-5 flex-col gap-4'>Save</button>

          <input onChange={toggleFinish} className='flex' type="checkbox" checked={showFinished} name="" id="" />show completed

          <h1 className="heading">Your Todos</h1>
          <div className="Todos">

            {todos.map(item =>{

          
           return (showFinished || !item.isCompleted) && <div key={item.id} className="Todo flex gap-4 justify-between my-4 w-1/2">
            <input name = {item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
             <div className={item.isCompleted ?"line-through" :""}>{item.todo}</div>
              <div className="buttons flex h-full">
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
