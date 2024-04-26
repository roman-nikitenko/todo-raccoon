import React, { useState } from 'react';
import { useAppSelector } from '../customHook/redux';
import { TodoItem } from './TodoItem';
import classNames from 'classnames';

export const TodoList: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false)
  const { todos } = useAppSelector(state => state)
  
  return (
    <div className="list">
      {todos.map(todo => (
        <div className={classNames("list-item", { "list-item-error": isError } )} key={`${todo.id} + ${todo}`}>
          <TodoItem todo={todo} setIsError={setIsError} />
        </div>
      ))}
    </div>
  );
};
