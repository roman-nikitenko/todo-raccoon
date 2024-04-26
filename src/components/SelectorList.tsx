import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../customHook/redux';

export const SelectorList: React.FC = () => {
  const { todos } = useAppSelector(state => state)
  const { completedTodos } = useAppSelector(state => state)
  return (
    <div className="todo-list-container-header">
      <div className="todo-list-container-header-link">
        <NavLink className={({ isActive }) => classNames({ 'active': isActive })} to='/'>Todo</NavLink>
        {todos.length !== 0 && <div className="counter">{todos.length}</div>}
      </div>
      /
      <div className="todo-list-container-header-link">
      <NavLink className={({ isActive }) => classNames({ 'active': isActive })} to='completed'>Completed</NavLink>
        {completedTodos.length !== 0 && <div className="counter">{completedTodos.length}</div>}
      </div>
    </div>
  );
};
