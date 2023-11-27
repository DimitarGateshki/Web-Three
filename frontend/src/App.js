import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant"

const App = () => {

  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  

  useEffect(() => {
    axios.get(`${baseURL}/get`)
    .then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, [updateUI]);

  const addTask = () =>{
    axios.post(`${baseURL}/create`, {task: input}).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI( (prevState) => !prevState);
    })
  }

  const updateMode = (id, text) => {
    setInput(text);
    setUpdateId(id);
  }

  const updateTask = () => {
    axios.put( `${baseURL}/update/${updateId}`, {task: input}).then((res) => {
      console.log(res.data);
      setUpdateUI( (prevState) => !prevState);
      setUpdateId(null);
      setInput("");

    })
  }


  return(
    <main>
      <h1 className="title"> Task list</h1>
      <h3>
        (Test task for Web Three)</h3>
        
        <div className="inpit">
          <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}/>
        </div>
        <button   type="submit"  onClick={updateId ? updateTask : addTask}>
           {updateId ? "Update task" : "Add task"}
           </button>

        <ul className="list">
          {tasks.map((task) => (
            <List 
            key = {task._id} 
            id = {task._id}
            task = {task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}/>
          ))}
        </ul>
    </main>
  )
}

export default App;