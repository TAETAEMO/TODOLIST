import axios from 'axios';
import { useState, useEffect } from "react";
import "./Todolist.css";
import Todo from "./Todo"
import { FaCheck } from "react-icons/fa";

const Todolist = () => {
  const [todolist, setTodolist] = useState([])
  const [value, setValue] = useState('')

  const getData = async () => {
    const res = await axios.get('http://localhost:3000/posts')
    setTodolist(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  };

  const onSumbitHandler = async () => {
    const data = {
      id: Date.now(),
      title: value,
      isDone: false
    }

    await axios.post('http://localhost:3000/posts', data)

    setValue('')
    setTodolist((prev) => [...prev, data])
  }

  return (
    <div className ='container'>
      <div className='box'>
      <h1 className='title'>TO DO LIST</h1>
      <p className='count'>today's dream : {todolist.length}</p>
      <>
        <div className='box2'>
        <input className='input'
          type="text"
          value={value}
          onChange={onChangeHandler}
        />
        <button className='btn'
          onClick={onSumbitHandler}
        >
          <FaCheck/>
        </button>
        </div>
      </>
      {
        todolist.map((e) => (
          <Todo key={e.id} data={e} setTodolist={setTodolist}>
          </Todo>
        ))
      }
      </div>
    </div>
  );
};



export default Todolist;
