import React from 'react';
import TasksListItems from './TasksListItems';
import './TasksList.css';

export default function TasksList(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <TasksListItems
            key={item.id}
            id={item.id}
            onDelete={props.onDeleteItem}
          >
            {item.text}
          </TasksListItems>
        );
      })}
    </ul>
  );
}
