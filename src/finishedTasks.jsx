import React from 'react';
import Task from "./Task";
import {completed} from "./utilsFunctions";

const FinishedTasks = () => {
  return (
    <div className='finished'>
      <h5 className='title'>Completed tasks</h5>
      {
        completed?.map((el) => (
          <Task task={el}/>
        ))
      }
    </div>
  );
};

export default FinishedTasks;