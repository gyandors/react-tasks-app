import React, { useState } from 'react';
import './TasksInput.css';

export default function TasksInput(props) {
  const [task, setTask] = useState('');

  function changeHandler(event) {
    setTask(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const newTask = { text: task, id: Math.random() };
    props.onAddTask(newTask);
    setTask('');
  }

  return (
    <form className="form-control" onSubmit={formSubmitHandler}>
      <div className="input-control">
        <label htmlFor="task-name">Task Name</label>
        <input
          type="text"
          id="task-name"
          value={task}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}
