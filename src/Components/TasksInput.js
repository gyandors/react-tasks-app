import React, { useState } from 'react';
import './TasksInput.css';

export default function TasksInput(props) {
  const [task, setTask] = useState('');
  const [isValid, setIsValid] = useState(true);

  function changeHandler(event) {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setTask(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (task.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const newTask = { text: task, id: Math.random() };
    props.onAddTask(newTask);
    setTask('');
  }

  return (
    <form
      className={`form-control ${isValid ? '' : 'invalid'}`}
      onSubmit={formSubmitHandler}
    >
      <div className={`input-control ${isValid ? '' : 'invalid'}`}>
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
