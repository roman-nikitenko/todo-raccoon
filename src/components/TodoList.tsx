import React from 'react';
import { useAppSelector } from '../customHook/redux';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const { todos } = useAppSelector(state => state)
  
  return (
    <div className="list">
      {todos.map(todo => (
        <div className="list-item" key={`${todo.id} + ${todo}`}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};
