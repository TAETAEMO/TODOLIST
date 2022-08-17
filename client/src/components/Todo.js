import axios from 'axios';
import { useState } from "react";
import Change from './Change';
import { FaScrewdriver } from "react-icons/fa";

const Todo = ({data, setTodolist}) => {
  const [mode, setMode] = useState(false)
  const [topic, setTopic] = useState(data)

  const onDeleteHandler = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`)
    setTodolist((prev) => 
      prev.filter(e => e.id !== id)
    )
  }

  return(
    <div>
      {
        mode ? 
        <>
          <Change data={topic} setMode={setMode} setTopic={setTopic}></Change>
        </>:
        <>
          <span>{topic.title}</span>
          <input type='checkbox' defaultChecked={topic.isDone}></input>
          <button onClick={() => setMode(!mode)}>
          <FaScrewdriver/>
          Fix
          </button>
          <button onClick={() => onDeleteHandler(topic.id)}>Delete</button>
        </>
      }
    </div>
  )
}

export default Todo
