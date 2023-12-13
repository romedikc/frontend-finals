import React from 'react';
import { MdOutlineFileDownloadDone} from "react-icons/md";
import './App.css'
import {getNewTask} from "./getNewTaskApi";

const Task = ({task, setTask, setIsOpen}) => {
  const completed = JSON.parse(localStorage.getItem('completed'))
  const handleCompleteTask = () => {
    localStorage.setItem('completed', JSON.stringify([...completed, task]))
    getNewTask(setTask)
    setIsOpen(true)
  }

  return (
    <div className='item'>
      {task?.todo}
      {
        !completed?.some(el => task?.id === el?.id) && <MdOutlineFileDownloadDone className='check' onClick={handleCompleteTask}/>
      }
    </div>
  );
};

export default Task;