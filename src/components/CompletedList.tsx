import React from 'react';
import { useAppDispatch, useAppSelector } from '../customHook/redux';
import restoreSvg from '../assets/restore.svg';
import binSvg from '../assets/bin.svg'
import { setLocalStorage, setTodo } from '../redux/todo/todoSlice';
import { Todo } from '../type/todo';
import { removeTodoFromBin, setBinLocalStorage } from '../redux/bin/binSlice';


export const BinList: React.FC = () => {
  const { bin } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  
  const restoreHandler = (todo: Todo) => {
    dispatch(setTodo(todo));
    dispatch(removeTodoFromBin(todo.id));
    dispatch(setBinLocalStorage());
    dispatch(setLocalStorage());
  }
  
  const removeHandler = (todoId: number) => {
    dispatch(removeTodoFromBin(todoId))
    dispatch(setBinLocalStorage());
  }
  
  return (
    <div className="list">
      {bin.map(todo => (
        <div className="list-item" key={`${todo.id} + ${todo}`}>
          {todo.todo}
          <div className="">
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
