import React from 'react';
import { useAppDispatch, useAppSelector } from '../customHook/redux';
import restoreSvg from '../assets/restore.svg';
import binSvg from '../assets/bin.svg'
import { setLocalStorage, setTodo } from '../redux/todo/todoSlice';
import { removeTodoFromCompleted, setCompletedLocalStorage } from '../redux/completed/completedTodosSlice'
import { Todo } from '../type/todo';


export const CompletedList: React.FC = () => {
  const { completedTodos } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  
  const restoreHandler = (todo: Todo) => {
    dispatch(setTodo(todo));
    dispatch(removeTodoFromCompleted(todo.id));
    dispatch(setCompletedLocalStorage());
    dispatch(setLocalStorage());
  }
  
  const removeHandler = (todoId: number) => {
    dispatch(removeTodoFromCompleted(todoId))
    dispatch(setCompletedLocalStorage());
  }
  
  return (
    <div className="list">
      {completedTodos.map(todo => (
        <div className="list-item" key={`${todo.id} + ${todo}`}>
          {todo.todo}
          <div className="navigation">
            <button onClick={() => restoreHandler(todo)}>
              <img src={restoreSvg} alt='restore button' />
            </button>
            <button onClick={() => removeHandler(todo.id)}>
              <img src={binSvg} alt='delete button' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
