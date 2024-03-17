import React from 'react';
import './TasksListItems.css';

export default function TasksListItems(props) {
  function clickHandler() {
    props.onDelete(props.id);
  }
  return (
    <li className="task-list-items">
      {props.children}
      <span className="material-symbols-outlined" onClick={clickHandler}>
        delete_forever
      </span>
    </li>
  );
}
