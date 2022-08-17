import axios from 'axios';
import { useState } from "react";

const Change = ({data, setMode, setTopic}) => {
  const [value, setValue] = useState(data.title)

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const onTodoChangeHandler = async () => {
    await axios.patch(`http://localhost:3000/posts/${data.id}`, {
      title: value
    })

    setTopic((prev) => {
      prev.title = value
      return prev
    })

    setMode(false)
  }

  return(
    <>
      <input value={value} onChange={onChangeHandler}></input>
      <button onClick={onTodoChangeHandler}>Check</button>
      <button >cancel</button>
    </>
  )
}

export default Change