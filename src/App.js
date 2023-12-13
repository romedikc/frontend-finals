import "./App.css"
import React, {useEffect, useState} from "react";
import Task from "./Task";
import FinishedTasks from "./finishedTasks";
import {getNewTask} from "./getNewTaskApi";
import MyModal from "./Modal";

function App() {
  const [task, setTask] = useState({"id":Math.random(),"todo":"Organize pantry","completed":true,"userId":39})
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify([]))
    getNewTask(setTask)
  }, [])

  const generateNewTask = () => {
    getNewTask(setTask)
  }

  return (
    <div className="App">
      <div className='cont'>
        <h5 className='title'>New task</h5>
        <div className='task_cont'><Task setIsOpen={setIsOpen} setTask={setTask} task={task} />
          <button className='button' onClick={generateNewTask}>New task</button>
        </div>
        <FinishedTasks/>
      </div>
      <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default App;