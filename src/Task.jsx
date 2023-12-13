import React from 'react';
import { MdOutlineFileDownloadDone} from "react-icons/md";
import './App.css'
import {completed} from "./utilsFunctions";
import { getNewTask } from './getNewTaskApi';

const Task = ({task, setTask, setIsOpen}) => {

  const handleCompleteTask = () => {
    localStorage.setItem('completed', JSON.stringify([...completed, task]))
    getNewTask(setTask)
    setIsOpen(true)
  }

  return (
    <div className='item'>
      {task?.todo}
      {
        !completed?.some(el => task?.id === el?.id) && <MdOutlineFileDownloadDone onClick={handleCompleteTask}/>
      }
    </div>
  );
};

export default Task;