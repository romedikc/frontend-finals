import React from 'react';
import Task from "./Task";
import {completed} from "./utilsFunctions";

const FinishedTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('completed'))
  return (
    <div className='finished'>
      <h5 className='title'>Completed tasks</h5>
      {
        tasks?.map((el) => (
          <Task task={el}/>
        ))
      }
    </div>
  );
};

export default FinishedTasks;