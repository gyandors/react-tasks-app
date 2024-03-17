import React, { useState } from 'react';
import TasksList from './Components/TasksList';
import TasksInput from './Components/TasksInput';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do all exercises!', id: Math.random() },
    { text: 'Finish the course!', id: Math.random() },
    { text: 'Goto the library', id: Math.random() },
  ]);

  function addTaskHandler(newTask) {
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  }

  function deleteItemHandler(itemId) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== itemId);
      return updatedTasks;
    });
  }

  let taskList = (
    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
      No tasks found. Add some tasks...
    </p>
  );

  if (tasks.length > 0) {
    taskList = <TasksList items={tasks} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div className="app">
      <TasksInput onAddTask={addTaskHandler} />
      <section id="task">
        {/* {tasks.length === 0 ? (
          <p style={{ textAlign: 'center' }}>
            No tasks found. Add some tasks...
          </p>
        ) : (
          <TasksList items={tasks} onDeleteItem={deleteItemHandler} />
        )} */}
        {/* {tasks.length === 0 && (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            No tasks found. Add some tasks...
          </p>
        )}
        <TasksList items={tasks} onDeleteItem={deleteItemHandler} /> */}
        {taskList}
      </section>
    </div>
  );
}

export default App;
